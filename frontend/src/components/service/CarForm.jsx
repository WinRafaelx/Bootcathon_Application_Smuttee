import React from "react";
import { useFormContext } from "../../context/FormContext";

export default function CarForm() {
  const { formData, handleChange, nextStep, prevStep } = useFormContext();

  return (
    <>
      <h2 className="text-3xl text-center font-bold my-4">Car Details</h2>
      <div className="flex flex-col w-full bg-white rounded-lg shadow-lg p-4">
        <div className="mb-4">
          <label className="block text-gray-700">Vehicle Number</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter vehicle number"
            value={formData.vehicleNumber}
            onChange={handleChange("vehicleNumber")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Brand</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter brand"
            value={formData.brand}
            onChange={handleChange("brand")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Model</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter model"
            value={formData.model}
            onChange={handleChange("model")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Problem</label>
          <textarea
            className="textarea textarea-bordered w-full"
            placeholder="Describe the problem"
            value={formData.problem}
            onChange={handleChange("problem")}
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
