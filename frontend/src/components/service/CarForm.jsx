import React from "react";
import { useFormContext } from "../../context/FormContext";

export default function CarForm() {
  const { formData, handleChange, nextStep, prevStep } = useFormContext();

  return (
    <>
      <h2 className="text-3xl text-center font-bold my-4">ข้อมูลรถ</h2>
      <div className="mx-96">
        <div className="flex flex-col w-full bg-white rounded-lg shadow-lg p-4">
          <div className="mb-4">
            <label className="block text-gray-700">ทะเบียนรถยนต์</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="กข1234"
              value={formData.license_plate}
              onChange={handleChange("license_plate")}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">ยี่ห้อรถยนต์</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="Toyota, Honda, etc."
              value={formData.car_brand}
              onChange={handleChange("car_brand")}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">รุ่น</label>
            <input
              type="text"
              className="input input-bordered w-full"
              placeholder="โมเดลรถยนต์"
              value={formData.model}
              onChange={handleChange("model")}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">ระบุปัญหา</label>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="อธิบายปัญหาของรถยนต์เพิ่มเติม"
              value={formData.problem_description}
              onChange={handleChange("problem_description")}
            />
          </div>
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
