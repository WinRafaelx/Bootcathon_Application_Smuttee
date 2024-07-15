import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Select from "react-select";

Modal.setAppElement("#root");
const options = [
  { value: "เปลี่ยนถ่ายน้ำมันหล่อลื่น", label: "เปลี่ยนถ่ายน้ำมันหล่อลื่น" },
  { value: "ตรวจเช็กสภาพรถยนต์", label: "ตรวจเช็กสภาพรถยนต์" },
  { value: "ระบบเบรก", label: "ระบบเบรก" },
  { value: "เปลี่ยนยาง", label: "เปลี่ยนยาง" },
  { value: "เปลี่ยนและตรวจแบตเตอรี่", label: "เปลี่ยนและตรวจแบตเตอรี่" },
  { value: "ล้างแอร์", label: "ล้างแอร์" },
  { value: "อื่นๆ", label: "อื่นๆ" },
];
export default function CalendarModal({
  isOpen,
  onRequestClose,
  onSave,
  appointment,
}) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [problem, setProblem] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (appointment) {
      setSelectedOption(appointment.service);
      setDate(appointment.date);
      setAddress(appointment.address);
      setVehicleNumber(appointment.vehicleNumber);
      setBrand(appointment.brand);
      setModel(appointment.model);
      setProblem(appointment.problem);
      setFname(appointment.fname);
      setLname(appointment.lname);
      setPhoneNumber(appointment.phoneNumber);
      setEmail(appointment.email);
    } else {
      setSelectedOption(null);
      setDate("");
      setAddress("");
      setVehicleNumber("");
      setBrand("");
      setModel("");
      setProblem("");
      setFname("");
      setLname("");
      setPhoneNumber("");
      setEmail("");
    }
  }, [appointment]);

  const handleSubmit = () => {
    const newAppointment = {
      service: selectedOption.value,
      date,
      address,
      vehicleNumber,
      brand,
      model,
      problem,
      fname,
      lname,
      phoneNumber,
      email,
    };
    // onSave(newAppointment);
    console.log(newAppointment);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="fixed inset-0 flex items-center justify-center z-50"
      overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg"
      >
        <h2 className="text-2xl font-semibold mb-4">Add/Edit Appointment</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Service
          </label>
          <Select
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
            value={selectedOption}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Date
          </label>
          <input
            type="datetime-local"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Address
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex flex-row space-x-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Vehicle Number
            </label>
            <input
              type="text"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Brand
            </label>
            <input
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Model
            </label>
            <input
              type="text"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Problem
          </label>
          <textarea
            type="text"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex flex-row justify-between">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>

        <div className="flex flex-row justify-between">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onRequestClose}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}
