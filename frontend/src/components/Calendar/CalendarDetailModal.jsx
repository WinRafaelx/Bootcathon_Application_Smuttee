// src/components/AppointmentDetailsModal.js
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export default function CalendarDetailModal({ isOpen, onRequestClose, appointment, onEdit, onDelete }) {
  if (!appointment) return null;

  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className="fixed inset-0 flex items-center justify-center z-50"
    overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-50 z-40"
  >
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Appointment Details</h2>
      <div className="mb-2">
        <strong>Service:</strong> {appointment.service}
      </div>
      <div className="mb-2">
        <strong>Date:</strong> {new Date(appointment.date).toLocaleString()}
      </div>
      <div className="mb-2">
        <strong>Address:</strong> {appointment.address}
      </div>
      <div className="mb-2">
        <strong>Vehicle Number:</strong> {appointment.vehicleNumber}
      </div>
      <div className="mb-2">
        <strong>Brand:</strong> {appointment.brand}
      </div>
      <div className="mb-2">
        <strong>Model:</strong> {appointment.model}
      </div>
      <div className="mb-2">
        <strong>Problem:</strong> {appointment.problem}
      </div>
      <div className="mb-2">
        <strong>Name:</strong> {appointment.fname} {appointment.lname}
      </div>
      <div className="mb-2">
        <strong>Phone Number:</strong> {appointment.phoneNumber}
      </div>
      <div className="mb-2">
        <strong>Email:</strong> {appointment.email}
      </div>
      <div className="flex justify-end space-x-4">
        <button onClick={() => onEdit(appointment)} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Edit
        </button>
        <button onClick={() => onDelete(appointment)} className="bg-red-500 text-white px-4 py-2 rounded-lg">
          Delete
        </button>
        <button onClick={onRequestClose} className="bg-gray-500 text-white px-4 py-2 rounded-lg">
          Close
        </button>
      </div>
    </div>
  </Modal>
  );
};

