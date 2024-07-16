import React from "react";
import { useFormContext } from "../../context/FormContext";

export default function Summary() {
  const { formData, prevStep } = useFormContext();

  function validateFormData(formData) {
    // Iterate over each key in the formData object
    for (const key in formData) {
      // Check if the property is a direct property of formData and not from its prototype chain
      if (formData.hasOwnProperty(key)) {
        // Check if the value is an empty string
        if (formData[key].trim() === '') {
          // Return false if any value is an empty string
          return false;
        }
      }
    }
    // Return true if all values are not empty strings
    return true;
  }
  const handleSubmit = () => {
    if (validateFormData(formData)) {
      // TODO: Submit form data to the server
      alert("Form submitted successfully");
    } else {
      alert("Please fill in all fields");
    }

  };
  return (
    <div className="mx-40">
      <h2 className="text-3xl text-center font-bold my-4">Summary</h2>
      <div className="flex flex-col w-full bg-white rounded-lg shadow-lg p-4">
        <div className="mb-4">
          <h3 className="font-bold">Service</h3>
          <p>{formData.service}</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">Date</h3>
          <p>{formData.date}</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">Location</h3>
          <p>{formData.location}</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">Vehicle Details</h3>
          <p>Vehicle Number: {formData.vehicleNumber}</p>
          <p>Brand: {formData.brand}</p>
          <p>Model: {formData.model}</p>
          <p>Problem: {formData.problem}</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">User Details</h3>
          <p>First Name: {formData.firstName}</p>
          <p>Last Name: {formData.lastName}</p>
          <p>Phone Number: {formData.phoneNumber}</p>
          <p>Email: {formData.email}</p>
        </div>
      </div>
      <div className="flex m-4 justify-center">
        <button onClick={prevStep} className="btn">
          Back
        </button>
        <button onClick={handleSubmit} className="btn btn-success btn-wide">
          Submit
        </button>
      </div>
    </div>
  );
}
