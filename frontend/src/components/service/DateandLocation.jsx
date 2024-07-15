import React from "react";
import { useFormContext } from "../../context/FormContext";

export default function DateandLocation() {
  const { formData, handleChange, nextStep, prevStep } = useFormContext();
  
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Select Date and Location</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Date</label>
        <input
          type="date"
          className="mt-1 block w-full p-2 border rounded"
          value={formData.date}
          onChange={handleChange("date")}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Location</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border rounded"
          placeholder="Enter your location"
          value={formData.location}
          onChange={handleChange("location")}
        />
      </div>
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          className="bg-gray-500 text-white p-2 rounded"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}
