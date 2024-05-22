"use client";
import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import FormMessage from "./FormMessage";
import FormField from "./FormField";
import emailjs from "emailjs-com";

const Contactus = () => {
  const initialFormData = {
    firstName: "",
    surname: "",
    email: "",
    phoneNumber: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      console.log("Submitting form data:", formData);

      // await emailjs.send(
      //   "service_hzoxbgd",
      //   "template_pk580mo",
      //   {
      //     from_name: `${formData.firstName} ${formData.lastName}`,
      //     from_email: formData.email,
      //     message: `${formData.comment}\nEmail: ${formData.email}\nPhone Number: ${formData.phoneNumber}`,
      //   },
      //   "HRxkfw62Pr66w8EJV"
      // );

      setFormData(initialFormData);

      setSuccess(true);
      setTimeout(() => setSuccess(false), 8000);
    } catch (error: any) {
      if (error instanceof TypeError) {
        setError(
          "Network error occurred. Please check your internet connection."
        );
      } else {
        setError(
          error.message || "Failed to submit form. Please try again later."
        );
      }
      setTimeout(() => setError(null), 8000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className=" flex flex-col p-3 
       gap-8  "
    >
      <div
        className="flex flex-col justify-center items-center 
      mx-auto "
      >
        <h2 className="text-3xl font-bold mb-4 text-blue-700 text-center">
          We look forward to hearing from you!
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 lg:pr-4">
              <FormField
                id="firstName"
                label="First Name"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                //   placeholder="Enter Your First Name"
                required
              />
            </div>
            <div className="lg:w-1/2">
              <FormField
                id="surname"
                label="Surname"
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                //   placeholder="Enter Your First Name"
                required
              />
            </div>
          </div>
          <div className="mb-4 flex flex-col lg:flex-row">
            <div className="lg:w-1/2 lg:pr-4">
              <FormField
                id="email"
                label="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                //   placeholder="Enter Your First Name"
                required
              />
            </div>
            <div className="flex flex-col lg:w-1/2">
              <FormField
                id="phoneNumber"
                label="Phone Number"
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                //   placeholder="Enter Your First Name"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <FormField
              id="message"
              label="Message"
              type="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              // placeholder="Your message here"
              rows={3}
              required
            />
          </div>
          <button
            type="submit"
            className=" bg-blue-800 text-white
               hover:bg-blue-300 border border-black py-3 px-10
                font-bold"
            disabled={loading}
          >
            {loading ? (
              <FaSpinner
                className="animate-spin flex mx-auto
                 text-black text-2xl"
              />
            ) : (
              "Submit"
            )}
          </button>
        </form>
        {success && (
          <FormMessage
            type="success"
            message="Your message has been sent successfully! I will get back to you soon."
            onClose={() => setSuccess(false)}
          />
        )}
        {error && (
          <FormMessage
            type="error"
            message={error}
            onClose={() => setError(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Contactus;
