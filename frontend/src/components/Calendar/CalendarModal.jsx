import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Select from 'react-select';

Modal.setAppElement("#root");
const options = [
  { value: 'เปลี่ยนถ่ายน้ำมันหล่อลื่น', label: 'เปลี่ยนถ่ายน้ำมันหล่อลื่น' },
  { value: 'ตรวจเช็กสภาพรถยนต์', label: 'ตรวจเช็กสภาพรถยนต์' },
  { value: 'ระบบเบรก', label: 'ระบบเบรก' },
  { value: 'เปลี่ยนยาง', label: 'เปลี่ยนยาง' },
  { value: 'เปลี่ยนและตรวจแบตเตอรี่', label: 'เปลี่ยนและตรวจแบตเตอรี่' },
  { value: 'ล้างแอร์', label: 'ล้างแอร์' },
  { value: 'อื่นๆ', label: 'อื่นๆ' },
];
export default function CalendarModal({
  isOpen,
  onRequestClose,
  onSave,
  appointment,
}) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (appointment) {
      setTitle(appointment.title);
      setDate(appointment.date);
      setAddress(appointment.address);
      setName(appointment.name);
      setDescription(appointment.description);
    } else {
      setTitle("");
      setDate("");
      setAddress("");
      setName("");
      setDescription("");
    }
  }, [appointment]);

  const handleSubmit = () => {
    const newAppointment = { title, date, address, name, description };
    onSave(newAppointment);
  };

  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className="fixed inset-0 flex items-center justify-center z-50"
    overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
  >
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Add/Edit Appointment</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        value={selectedOption}
      />
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Date</label>
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Save
        </button>
        <button type="button" onClick={onRequestClose} className="bg-gray-500 text-white px-4 py-2 rounded-lg">
          Cancel
        </button>
      </div>
    </form>
  </Modal>
  );
}
