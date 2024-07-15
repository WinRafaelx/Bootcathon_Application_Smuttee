import React from 'react'
import { useFormContext } from '../../context/FormContext';

export default function Summary() {
  const { formData, prevStep } = useFormContext();

  const handleSubmit = () => {
    alert('Form submitted!');
    console.log(formData);
  }
  return (
    <div className="p-4">
    <h2 className="text-xl font-bold mb-4">Summary</h2>
    <div className="mb-4">
      <h3 className="font-bold">Service</h3>
      <p>{formData.service}</p>
    </div>
    <div className="mb-4">
      <h3 className="font-bold">Date</h3>
      <p>{formData.date}</p>
    </div>
    <div className="mb-4">
      <h3 className="font-bold">Location</h3>
      <p>{formData.location}</p>
    </div>
    <div className="mb-4">
      <h3 className="font-bold">Vehicle Details</h3>
      <p>Vehicle Number: {formData.vehicleNumber}</p>
      <p>Brand: {formData.brand}</p>
      <p>Model: {formData.model}</p>
      <p>Problem: {formData.problem}</p>
    </div>
    <div className="mb-4">
      <h3 className="font-bold">User Details</h3>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Phone Number: {formData.phoneNumber}</p>
      <p>Email: {formData.email}</p>
    </div>
    <div className="flex justify-between">
      <button onClick={prevStep} className="bg-gray-500 text-white p-2 rounded">Back</button>
      <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded">Submit</button>
    </div>
  </div>
  )
}
