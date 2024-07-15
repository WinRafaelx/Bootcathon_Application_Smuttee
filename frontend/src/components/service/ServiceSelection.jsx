import React from "react";
import { useFormContext } from "../../context/FormContext";

const options = [
  {
    value: "เปลี่ยนถ่ายน้ำมันหล่อลื่น",
    label: "เปลี่ยนถ่ายน้ำมันหล่อลื่น",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    value: "ตรวจเช็กสภาพรถยนต์",
    label: "ตรวจเช็กสภาพรถยนต์",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    value: "ระบบเบรก",
    label: "ระบบเบรก",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    value: "เปลี่ยนยาง",
    label: "เปลี่ยนยาง",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    value: "เปลี่ยนและตรวจแบตเตอรี่",
    label: "เปลี่ยนและตรวจแบตเตอรี่",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    value: "ล้างแอร์",
    label: "ล้างแอร์",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    value: "อื่นๆ",
    label: "อื่นๆ",
    imageUrl: "https://via.placeholder.com/150",
  },
];
export default function ServiceSelection() {
  const { formData, handleChange, nextStep } = useFormContext();
  const handleCardClick = (value) => {
    handleChange("service")({ target: { value } });
  };
  return (
    <div className="p-4">
      <h2 className="text-3xl text-center font-bold mb-4">Select Service</h2>
      <div className="grid grid-cols-3 gap-4">
        {options.map((option) => (
          <div
            key={option.value}
            className={`card card-compact bg-base-100 shadow-xl cursor-pointer ${
              formData.service === option.value ? "bg-primary text-white" : ""
            }`}
            onClick={() => handleCardClick(option.value)}
          >
            <figure>
              <img src={option.imageUrl} alt={option.label} />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{option.label}</h2>
            </div>
          </div>
        ))}
      </div>

      <div className="flex mt-4 justify-center">
        <button onClick={nextStep} className="btn btn-primary btn-wide">
          Next
        </button>
      </div>
    </div>
  );
}
