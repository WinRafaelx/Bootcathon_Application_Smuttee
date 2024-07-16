import React, { useState, useEffect } from "react";

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

  const handleSubmit = (e) => {
    e.preventDefault();
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
    onRequestClose();
    console.log(newAppointment);
  };

  return (
    <>
      {isOpen && (
        <div className="modal modal-open">
          <form onSubmit={handleSubmit} className="modal-box">
            <h2 className="text-2xl font-semibold mb-4">
              Add/Edit Appointment
            </h2>
            <div className="mb-4">
              <label className="label">Service</label>
              <select className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  Select
                </option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="label">Date</label>
              <input
                type="datetime-local"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="input input-bordered w-full py-2 px-3"
              />
            </div>
            <div className="mb-4">
              <label className="label">Address</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="input input-bordered w-full py-2 px-3"
              />
            </div>
            <div className="flex flex-row space-x-4">
              <div className="mb-4">
                <label className="label">Vehicle Number</label>
                <input
                  type="text"
                  value={vehicleNumber}
                  onChange={(e) => setVehicleNumber(e.target.value)}
                  className="input input-bordered w-full py-2 px-3"
                />
              </div>
              <div className="mb-4">
                <label className="label">Brand</label>
                <input
                  type="text"
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
                  className="input input-bordered w-full py-2 px-3"
                />
              </div>
              <div className="mb-4">
                <label className="label">Model</label>
                <input
                  type="text"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="input input-bordered w-full py-2 px-3"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="label">Problem</label>
              <textarea
                type="text"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                className="input input-bordered w-full py-2 px-3"
              />
            </div>
            <div className="flex flex-row justify-between">
              <div className="mb-4">
                <label className="label">First Name</label>
                <input
                  type="text"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  className="input input-bordered w-full py-2 px-3"
                />
              </div>
              <div className="mb-4">
                <label className="label">Last Name</label>
                <input
                  type="text"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                  className="input input-bordered w-full py-2 px-3"
                />
              </div>
            </div>

            <div className="flex flex-row justify-between">
              <div className="mb-4">
                <label className="label">Phone Number</label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="input input-bordered w-full py-2 px-3"
                />
              </div>
              <div className="mb-4">
                <label className="label">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered w-full py-2 px-3"
                />
              </div>
            </div>
            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              <button
                type="button"
                onClick={onRequestClose}
                className="btn"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
