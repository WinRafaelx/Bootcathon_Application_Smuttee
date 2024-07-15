import React from 'react'
import { useFormContext } from '../../context/FormContext';

const options = [
  { value: "เปลี่ยนถ่ายน้ำมันหล่อลื่น", label: "เปลี่ยนถ่ายน้ำมันหล่อลื่น" },
  { value: "ตรวจเช็กสภาพรถยนต์", label: "ตรวจเช็กสภาพรถยนต์" },
  { value: "ระบบเบรก", label: "ระบบเบรก" },
  { value: "เปลี่ยนยาง", label: "เปลี่ยนยาง" },
  { value: "เปลี่ยนและตรวจแบตเตอรี่", label: "เปลี่ยนและตรวจแบตเตอรี่" },
  { value: "ล้างแอร์", label: "ล้างแอร์" },
  { value: "อื่นๆ", label: "อื่นๆ" },
];
export default function ServiceSelection() {
  const { formData, handleChange, nextStep } = useFormContext();
  return (
    <div className="p-4">
    <h2 className="text-xl font-bold mb-4">Select Service</h2>
    <div className="grid grid-cols-1 gap-4">
      {options.map(option => (
        <button
          key={option.value}
          className={`p-4 border rounded ${formData.service === option.value ? 'bg-blue-500 text-white' : 'bg-white'}`}
          onClick={() => handleChange('service')({ target: { value: option.value } })}
        >
          {option.label}
        </button>
      ))}
    </div>
    <div className="mt-4">
      <button onClick={nextStep} className="bg-blue-500 text-white p-2 rounded">Next</button>
    </div>
  </div>
);
  
}
