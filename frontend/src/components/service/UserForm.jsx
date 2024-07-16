import React from "react";
import { useFormContext } from "../../context/FormContext";

export default function UserForm() {
  const { formData, handleChange, nextStep, prevStep } = useFormContext();
  return (
    <>
      <h2 className="text-3xl text-center font-bold my-4">ข้อมูลของคุณ</h2>
  <div className="mx-96">
      <div className="flex flex-col w-full bg-white rounded-lg shadow-lg p-4">
        <div className="mb-4">
          <label className="block text-gray-700">ชื่อ</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={formData.name}
            onChange={handleChange("name")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">นามสกุล</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={formData.lastname}
            onChange={handleChange("lastname")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">เบอร์โทรศัพท์(มือถือ)</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="08xxxxxxxx"
            value={formData.tel}
            onChange={handleChange("tel")}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">อีเมล</label>
          <input
            type="email"
            className="input input-bordered w-full"
            placeholder="youremail@gmail.com"
            value={formData.email}
            onChange={handleChange("email")}
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
