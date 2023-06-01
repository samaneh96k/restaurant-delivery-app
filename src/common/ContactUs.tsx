
import { messagingAction } from "@/storeRedux/contactUsAction";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { ErrorMessage, Field, Formik, Form } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
interface MyFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;

}
const ContactUsPage = () => {
  const dispatch = useDispatch();
  const initialValues: MyFormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",

  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name is too short!")
      .max(50, "Name is too long!")
      .required("Name is required!"),
    email: Yup.string().email().required("Email is required!"),
    message: Yup.string().required("mesage is required!"),
    subject: Yup.string().required("subject is required!"),
   
  });
  return (
    <div className="h-full w-full flex flex-wrap mb-[10%]">
                    <div className="relative  w-full h-full mt-[22%] sm:mt-[4%] md:mt-[8%] xl:mt-0">
        <div className="bg-black absolute xl:top-[0]  left-0 w-full h-full opacity-[0.6] z-20">
        </div>
        <div className=" absolute top-[30%] sm:p-0 px-2 sm:top-[40%] xl:top-[50%] left-0 w-full h-fit  z-20 text-center">
          <h2 className="md:text-3xl text-[12px] text-white">Contact Us</h2>
          <span className="md:text-xl text-white">~~~~</span>
        </div>
        <div className="aspect-w-4 aspect-h-1 ">
          <img
            className=" object-center object-cover   h-full w-full "
            src="./header-img-small.jpg"
            alt="restaurant-foods"
          />
        </div>
      </div>
      <div className="flex w-full justify-center p-8 flex-wrap">
        <div className="xl:w-2/5 w-full flex justify-center p-8 flex-wrap items-center">
          <div className="w-full text-bold xl:text-2xl ">
          <h2 className="color-icon">CONTACT US</h2>
          <p className="underline "> +98147598</p>
          <p className="underline "> +samanehkarimi17@gmail.com</p>
          <p className="underline "> 986 Ramsar,mazandaran,iran</p>
          <span>~~~~</span>
        </div>
        </div>
        <div className="xl:w-2/5 w-full px-8  ">
          <div className=" w-full ">
          <Formik
            validateOnMount
            initialValues={initialValues}
            validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                dispatch(messagingAction(values))
         
              toast.success("send your message!",{position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
                theme: "light",
              });
              setSubmitting(false);
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
                      id="subject"
                        name="subject"
                        placeholder="subject"
                      className="bg-gray-200 rounded-md p-1 text-[#333] px-4"
                    />
                    <ErrorMessage
                      name="subject"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="flex flex-col py-2 w-full">
                    <Field
                        type="tel"
                        component="textarea"
                        id="message"
                        placeholder="message"
                      name="message"
                        className="bg-gray-200 rounded-md p-1   text-[#333] px-4"
                        
                    />
                    <ErrorMessage
                      name="message"
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
            SEND MESSAGE
         
          <ArrowLongRightIcon className="md:h-6 md:w-4 h-4 w-4" />
            </button>
            
           
          </div>
                </div>
              </Form>}
          </Formik>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
