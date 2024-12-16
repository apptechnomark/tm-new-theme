import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Title from "components/common/Title/Title";
import styles from "./FormSection.module.css";

interface FormSectionProps {
  formContent: {
    title: string;
    nextSteps: string[];
    formHeading: string;
    submitButtonText: string;
    nextStepsHeading: string;
  };
}

interface formValues {
  name: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  companyName: string;
}

const FormSection = ({ formContent }: FormSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-10px" });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      countryCode: "+1",
      phoneNumber: "",
      companyName: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phoneNumber: Yup.string()
        .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
        .required("Phone number is required"),
      companyName: Yup.string().required("Company name is required"),
    }),
    onSubmit: (values: formValues) => {
      console.log("Form Values:", values);
      alert("Form submitted successfully!");
    },
  });

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d{0,10}$/.test(value)) {
      formik.setFieldValue("phoneNumber", value);
    }
  };

  return (
    <div className="container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center items-center"
      >
        <Title
          title={formContent.title}
          highlightWords={[]}
          titleClass="text-4xl font-semibold text-center capitalize"
        />
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: -30 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, rotate: 0 }
              : { opacity: 0, y: 50, rotate: -30 }
          }
          transition={{ duration: 0.5 }}
        >
          <Image
            src="/images/likeThumb.svg"
            alt="like thumb"
            width={100}
            height={100}
            className={`h-[100px] w-[100px] ${styles.flipThumb}`}
          />
        </motion.div>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className={`mt-[4vh] border-4 border-white p-5 max-w-[1150px] rounded-3xl flex mx-auto relative ${styles.techStartupBox}`}
      >
        <Image
          src="/images/tech-startup.png"
          alt="startupbg"
          width={1366}
          height={631}
          className="rounded-3xl w-full absolute -z-10 h-full left-0 top-0 opacity-80"
        />
        <div className="w-7/12">
          <p className="font-bold text-xl">{formContent.formHeading}</p>
          <form
            onSubmit={formik.handleSubmit}
            className=" flex flex-wrap py-7"
            noValidate
          >
            <div className="flex flex-col w-1/2 pr-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="p-2 outline-none bg-transparent border border-white rounded-md placeholder-opacity-25 placeholder-current"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <span className="text-red-500 text-sm">
                  {String(formik.errors.name)}
                </span>
              )}
            </div>

            {/* Email Field */}
            <div className="flex flex-col w-1/2 pl-2">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-2 outline-none bg-transparent border border-white rounded-md placeholder-opacity-25 placeholder-current"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <span className="text-red-500 text-sm">
                  {String(formik.errors.email)}
                </span>
              )}
            </div>

            <div className="w-1/2 flex flex-col mt-8 pr-2 overflow-hidden">
              <div className="flex">
                <select
                  name="countryCode"
                  className="p-[9.5px] outline-none bg-transparent rounded-e-none max-w-[90px] border border-white border-r-0 rounded-md placeholder-opacity-25 placeholder-current"
                  value={formik.values.countryCode}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+61">🇦🇺 +61</option>
                  <option value="+81">🇯🇵 +81</option>
                  <option value="+86">🇨🇳 +86</option>
                </select>
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  className="bg-transparent border-l-0 border w-full rounded-e-[6px] p-2 placeholder-opacity-25 placeholder-current focus:outline-none"
                  value={formik.values.phoneNumber}
                  onChange={handlePhoneNumberChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <span className="text-red-500 text-sm">
                  {String(formik.errors.phoneNumber)}
                </span>
              )}
            </div>

            <div className="flex flex-col w-1/2 pl-2">
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                className="p-2 outline-none bg-transparent mt-8 border border-white rounded-md placeholder-opacity-25 placeholder-current"
                value={formik.values.companyName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.companyName && formik.errors.companyName && (
                <span className="text-red-500 text-sm">
                  {String(formik.errors.companyName)}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-9 py-3 bg-[var(--text-red)] mt-8 text-white font-semibold rounded-md"
            >
              {formContent.submitButtonText}
            </button>
          </form>
        </div>

        <div className="w-1/2 p-3">
          <h3 className="font-extrabold italic text-xl pb-3">
            {formContent.nextStepsHeading}
          </h3>
          <ul className="list-decimal ml-5 font-medium max-w-[700px]">
            {formContent.nextSteps.map((step, index) => (
              <li key={index} className="pb-3">
                {step}
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50, rotate: 30 }}
          animate={
            isInView
              ? { opacity: 1, y: 0, rotate: 0 }
              : { opacity: 0, y: 50, rotate: 30 }
          }
          transition={{ duration: 0.5 }}
          className="absolute bottom-[-50px] left-32"
        >
          <Image
            src="/images/likeThumb.svg"
            alt="like thumb"
            width={130}
            height={130}
            className="h-[130px] w-[130px]"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FormSection;
