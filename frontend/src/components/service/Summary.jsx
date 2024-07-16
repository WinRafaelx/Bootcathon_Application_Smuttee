import React from "react";
import { useFormContext } from "../../context/FormContext";
import { workshop } from "../../constants/workshopLocation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Summary() {
  const { formData, prevStep } = useFormContext();
  const navigate = useNavigate();

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

  function findworkshopLocation(workshopArray,workshop_id) {
    const workshop = workshopArray.find(w => w.workshop_id === workshop_id);
    return workshop ? workshop.location : null;
  }
  const handleSubmit = async () => {
    if (validateFormData(formData)) {
      try {
        const response = await axios.post("http://localhost:8000/api/reservations/add", formData);
        if (response.status === 201) {
          alert("Reservation submitted successfully");
          navigate("/complete");
        } else {
          alert("Error submitting reservation");
        }
      }
      catch (error) {
        console.error("api error",error);
        alert("Error submitting reservation");
      }
    } else {
      alert("Please fill in all fields");
    }

  };
  return (
    <div className="mx-40">
      <h2 className="text-3xl text-center font-bold my-4">Summary</h2>
      <div className="flex flex-col w-full bg-white rounded-lg shadow-lg p-4">
        <div className="mb-4">
          <h3 className="font-bold">บริการ</h3>
          <p>{formData.service}</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">วันที่ - เวลา</h3>
          <p>{formData.reserved_datetime}</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">สถานที่</h3>
          <p>{findworkshopLocation(workshop,formData.workshop_id)}</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">ข้อมูลรถ</h3>
          <p>ทะเบียนรถยนต์: {formData.license_plate}</p>
          <p>ยี่ห้อรถยนต์: {formData.car_brand}</p>
          <p>รุ่น: {formData.model}</p>
          <p>ปัญหา: {formData.problem_description}</p>
        </div>
        <div className="mb-4">
          <h3 className="font-bold">ข้อมูลของคุณ</h3>
          <p>ชื่อ: {formData.name}</p>
          <p>นามสกุล: {formData.lastName}</p>
          <p>เบอร์โทรศัพท์(มือถือ): {formData.tel}</p>
          <p>อีเมล: {formData.email}</p>
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
