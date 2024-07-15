import React from "react";
import { useFormContext } from "../../context/FormContext";

export default function UserForm() {
  const { formData, handleChange, nextStep, prevStep } = useFormContext();
  return (
    <>
      <h2 className="text-3xl text-center font-bold my-4">User Details</h2>
      <div className="flex flex-col w-full bg-white rounded-lg shadow-lg p-4">
        <div className="mb-4">
          <label className="block text-gray-700">First Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={handleChange("firstName")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Last Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={handleChange("lastName")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Phone Number</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter phone number"
            value={formData.phoneNumber}
            onChange={handleChange("phoneNumber")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange("email")}
          />
        </div>
      </div>
      <div className="flex m-4 justify-center">
        <button onClick={prevStep} className="btn">
          Back
        </button>
        <button onClick={nextStep} className="btn btn-primary btn-wide">
          Next
        </button>
      </div>
    </>
  );
}
