

import { registerUserAction } from "@/storeRedux/authActions";
import { useAppDispatch, useAppSelector } from "@/storeRedux/hook";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { ErrorMessage, Field, Formik, Form } from "formik";
import React from "react";

import * as Yup from "yup";
interface MyFormValues {
  name: string;
email: string;
   password: string;
   confirmPassword: string;

 }
const Register = () => {

  const dispatch = useAppDispatch();
  const initialValues:MyFormValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword:"",

  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name is too short!")
      .max(50, "Name is too long!")
      .required("Name is required!"),
    email: Yup.string().email().required("Email is required!"),
    password: Yup.string()
    .min(6).required("password is required!")
    
    ,
  confirmPassword: Yup.string().when('password', (password, field) =>
    password ? field.required("confirmPassword is required!").oneOf([Yup.ref('password')]) : field
  ),
  });

  return (
      <div className='p-28'>
   
      

      <div className="xl:w-2/5 mx-auto w-full px-8  ">
      <div className="font-bold text-3xl text-center"> register</div>
          <div className=" w-full ">
          <Formik
            validateOnMount
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={ (values, { setSubmitting }) => {
              if (values.password !== values.confirmPassword) {
                alert('Password mismatch')
              }
             
              console.log("Form submitted successfully", values);
              setSubmitting(false);
             dispatch(registerUserAction(values))
            }}
          >
            {({ errors, touched, isValid, values }) =>
              <Form className="space-y-4  w-full xl:p-8 ">
                <div className="h-60 py-5 w-full flex flex-wrap justify-end">
                  <div className="flex flex-col py-2 w-full">
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="bg-gray-200 w-full rounded-md p-1  text-[#333] px-4"
                      placeholder="name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500"
                    />
                  </div>

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
                      type="text"
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
                  <div className="flex flex-col py-2 w-full">
                    <Field
                        type="tel"
                      
                        id="confirmPassword"
                        placeholder="confirmPassword"
                      name="confirmPassword"
                        className="bg-gray-200 rounded-md p-1   text-[#333] px-4"
                        
                    />
                    <ErrorMessage
                      name="confirmPassword"
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
           SIGNUP 
         
          <ArrowLongRightIcon className="md:h-6 md:w-4 h-4 w-4" />
            </button>
            
           
          </div>
                </div>
              </Form>}
          </Formik>
        </div>
        </div>
        </div>)
        

}

export default Register