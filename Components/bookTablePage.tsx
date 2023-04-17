import React from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";

interface MyFormValues {
  name: string;
  family: string;
  phone: string;
  seats: string;
  category: string;
  time: string;
 
}

const BookTablePage = () => {
  const initialValues: MyFormValues = {
    
    name: "",
    family: "",
    phone: "",
    seats: "",
    category: "",
    time: "",
  
  };
  const languageOptions = [
    {
      label: "Chinese",
      value: "zh-CN"
    },
    {
      label: "English (US)",
      value: "en-US"
    },
    {
      label: "English (GB)",
      value: "en-GB"
    },
    {
      label: "French",
      value: "fr-FR"
    },
    {
      label: "Spanish",
      value: "es-ES"
    }
  ];
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name is too short!")
      .max(50, "Name is too long!")
      .required("Name is required!"),
    family: Yup.string()
    .min(2, "family is too short!")
    .max(50, "Name is too long!")
    .required("Name is required!"),
    phone: Yup.string().required("phone is required!"),
    seats: Yup.string().required("seats is required!"),
    category: Yup.string().required("seats is required!"),
    time: Yup.string().required("seats is required!")
  });
  return (
    <div className="h-full w-full flex flex-wrap mb-[10%]">
      <div className="relative  w-full h-full ">
        <div className="bg-black absolute top-[0] left-0 w-full h-full opacity-[0.6] z-20">
        </div>
        <div className=" absolute top-[50%] left-0 w-full h-fit z-20 text-center">
          <h2 className="text-xl color-icon">BOOK A TABLE </h2>
          <h2 className="text-4xl text-white">
            Let food be thy medicine and medicine be thy food.{" "}
          </h2>
          <span className="text-xl text-white">~~~~</span>
        </div>
        <div className="aspect-w-4 aspect-h-1 ">
          <img
            className=" object-center object-cover   h-full w-full "
            src="../img/bookTable.jpg"
            alt="restaurant-foods"
          />
        </div>
      </div>
      <div className="flex w-full justify-center p-8 flex-wrap">
        <div className=" w-full px-8  ">
          <div className=" w-full ">
            <Formik
              validateOnMount
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log("Form submitted successfully", values);
                setSubmitting(false);
              }}
            >
              {({ errors, touched, isValid, values }) =>
                <Form className="space-y-4   xl:p-8 ">
                  {/* forms */}
                  <div className="flex flex-wrap justify-center">
                    {/* form1 */}
                    <div className="xl:w-1/2 w-full p-8">
                      <div className="flex flex-col py-2 w-full">
                        <Field
                          type="text"
                          id="name"
                          name="name"
                          className="bg-gray-200 w-full rounded-md  text-[#333] p-4"
                          placeholder="First Name"
                        ></Field>
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="text-red-500"
                        />
                      </div>

                      <div className="flex flex-col py-2 w-full">
                        <Field
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="Phone Number"
                          className="bg-gray-200 rounded-md  p-4  text-[#333] "
                        />
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div className="flex  flex-col py-2 w-full">
                  
                        <Field
                          as="select"
                          type="text"
                          id="seats"
                          name="seats"
                          placeholder="seats"
                          className="bg-gray-200 rounded-md  p-4  text-[#333] "
> <option disabled value="">Seats</option>
                        {languageOptions && languageOptions.map(player => {
                          
                                return (
                                    <option value={player.value}>{player.label} </option>
                                )
                        }
                        ) }</Field>
                        
                        <ErrorMessage
                          name="seats"
                          component="div"
                          className="text-red-500 w-full"
                        />
                      </div>
                   
                    </div>

                    {/* form 2 */}
                    <div className="xl:w-1/2 w-full p-8">
                      <div className="flex flex-col py-2 w-full">
                        <Field
                          type="text"
                          id="family"
                          name="family"
                          className="bg-gray-200 w-full rounded-md  text-[#333] p-4"
                          placeholder="Last Name"
                        />
                        <ErrorMessage
                          name="family"
                          component="div"
                          className="text-red-500"
                        />
                      </div>

                      <div className="flex flex-col py-2 w-full">
                        <Field
                          as="select"
                          type="text"
                          id="category"
                          name="category"
                          placeholder="Category"
                          className="bg-gray-200 w-full rounded-md  text-[#333] p-4"
                        >
                         
                         <option disabled value="">Category</option>
                        {languageOptions && languageOptions.map(player => {
                          
                                return (
                                    <option value={player.value} >{player.label} </option>
                                )
                        }
                        ) }</Field>
                          
                       
                        <ErrorMessage
                          name="category"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
                      <div className="flex flex-col py-2 w-full">
                        <Field
                          type="text"
                          id="time"
                          name="time"
                          placeholder="Time"
                        as="select"
                          className="bg-gray-200 rounded-md  p-4  text-[#333] "

                        > <option disabled value="">Time</option>
                        {languageOptions && languageOptions.map(player => {
                          
                                return (
                                    <option value={player.value}>{player.label} </option>
                                )
                        }
                        ) }</Field>
                        <ErrorMessage
                          name="time"
                          component="div"
                          className="text-red-500"
                        />
                      </div>
             
                    </div>
                      {/* button */}
                  <div className=" bg-gradient-to-r from-[#ab795e] to-[#d3aa77] my-2 p-1 text-white  xl:flex w-fit xl:justify-center">
                    <button
                      type="submit"
                      disabled={!isValid}
                      className="flex items-center p-2 px-2 text-sm  xl:px-8 bg-transparent border-white-400 border-2 border-solid"
                    >
                     BOOK A RESERVATION
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

export default BookTablePage;
