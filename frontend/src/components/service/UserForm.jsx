import React from 'react'
import { useFormContext } from '../../context/FormContext';

export default function UserForm() {
  const { formData, handleChange, nextStep, prevStep } = useFormContext();
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User Details</h2>
      <div className="mb-4">
        <label className="block text-gray-700">First Name</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border rounded"
          placeholder="Enter first name"
          value={formData.firstName}
          onChange={handleChange('firstName')}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Last Name</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border rounded"
          placeholder="Enter last name"
          value={formData.lastName}
          onChange={handleChange('lastName')}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone Number</label>
        <input
          type="text"
          className="mt-1 block w-full p-2 border rounded"
          placeholder="Enter phone number"
          value={formData.phoneNumber}
          onChange={handleChange('phoneNumber')}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          className="mt-1 block w-full p-2 border rounded"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange('email')}
        />
      </div>
      <div className="flex justify-between">
        <button onClick={prevStep} className="bg-gray-500 text-white p-2 rounded">Back</button>
        <button onClick={nextStep} className="bg-blue-500 text-white p-2 rounded">Next</button>
      </div>
    </div>
  )
}
