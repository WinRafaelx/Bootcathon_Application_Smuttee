import React from "react";

export default function CalendarDetailModal({
  isOpen,
  onRequestClose,
  appointment,
  onEdit,
  onDelete,
}) {
  if (!appointment) return null;

  return (
    <>
     { isOpen && <div className="modal modal-open">
        <div className="modal-box">
          <h2 className="text-2xl font-semibold mb-4">Appointment Details</h2>
          <div className="mb-2">
            <strong>Service:</strong> {appointment.service}
          </div>
          <div className="mb-2">
            <strong>Date:</strong> {new Date(appointment.start).toLocaleString()}
          </div>
          <div className="mb-2">
            <strong>Vehicle Number:</strong> {appointment.license_plate}
          </div>
          <div className="mb-2">
            <strong>Brand:</strong> {appointment.car_brand}
          </div>
          <div className="mb-2">
            <strong>Model:</strong> {appointment.model}
          </div>
          <div className="mb-2">
            <strong>Problem:</strong> {appointment.problem_description}
          </div>
          <div className="mb-2">
            <strong>Name:</strong> {appointment.name} {appointment.lastname}
          </div>
          <div className="mb-2">
            <strong>Phone Number:</strong> {appointment.tel}
          </div>
          <div className="mb-2">
            <strong>Email:</strong> {appointment.email}
          </div>
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => onEdit(appointment)}
              className="btn btn-info px-4 py-2"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(appointment)}
              className="btn btn-error px-4 py-2"
            >
              Delete
            </button>
            <button
              onClick={onRequestClose}
              className="btn px-4 py-2"
            >
              Close
            </button>
          </div>
        </div>
      </div>}
    </>
  );
}
