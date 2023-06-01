"use client";
import { useRouter } from 'next/navigation';
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { ErrorMessage, Field, Formik, Form } from "formik";
import React from "react";
import * as Yup from "yup";
import {  toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase';

interface MyFormValues {
  email: string;
  password: string;
}
const Login = () => {
  const router = useRouter();
  const initialValues: MyFormValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().email().required("Email is required!"),
  password: Yup.string().required("password is required!"),
  });

  return (
      <div className='p-28'>

      <div className="xl:w-2/5 w-full px-8  mx-auto">
      <div className='font-bold text-3xl text-center'> login</div>
          <div className=" w-full ">
          <Formik
            validateOnMount
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              signInWithEmailAndPassword(auth, values.email,values.password)
              .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
              
                toast.success("Wellcome to Dashboard !",{position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                  theme: "light",
                });
                router.push('/dashboard')
                  
              })
              .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                toast.error("is error ): !",{position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",});
              });
              console.log("Form submitted successfully", values);

              setSubmitting(false);
            }}
          >
            {({ errors, touched, isValid, values }) =>
              <Form className="space-y-4  w-full xl:p-8 ">
                <div className="h-60 py-5 w-full flex flex-wrap justify-end">
             
                 

                  <div className="flex flex-col py-2 w-full">
                    <Field
                      type="tel"
                      id="email"
                        name="email"
                        placeholder="email"
                      className="bg-gray-200 rounded-md  p-1  text-[#333] px-4"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex flex-col py-2 w-full">
                    <Field
                      type="password"
                      id="password"
                        name="password"
                        placeholder="password"
                      className="bg-gray-200 rounded-md p-1 text-[#333] px-4"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
              
                    <div className=" bg-gradient-to-r from-[#ab795e] to-[#d3aa77] my-2 p-1 text-white  xl:flex w-fit xl:justify-end">
          
            <button
              type="submit"
              disabled={!isValid}
              className="flex items-center p-2 px-2 text-sm  xl:px-8 bg-transparent border-white-400 border-2 border-solid"
            > 
         SIGN UP
         
          <ArrowLongRightIcon className="md:h-6 md:w-4 h-4 w-4" />
            </button>
            
           
          </div>
                </div>
              </Form>}
          </Formik>
        </div>

      </div>


      
    </div>
  )
}

export default Login