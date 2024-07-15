import React from 'react'
import { useFormContext } from '../../context/FormContext';

export default function CarForm() {
  const { formData, handleChange, nextStep, prevStep } = useFormContext();
  
  return (
    <div className="p-4">
    <h2 className="text-xl font-bold mb-4">Car Details</h2>
    <div className="mb-4">
      <label className="block text-gray-700">Vehicle Number</label>
      <input
        type="text"
        className="mt-1 block w-full p-2 border rounded"
        placeholder="Enter vehicle number"
        value={formData.vehicleNumber}
        onChange={handleChange('vehicleNumber')}
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Brand</label>
      <input
        type="text"
        className="mt-1 block w-full p-2 border rounded"
        placeholder="Enter brand"
        value={formData.brand}
        onChange={handleChange('brand')}
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Model</label>
      <input
        type="text"
        className="mt-1 block w-full p-2 border rounded"
        placeholder="Enter model"
        value={formData.model}
        onChange={handleChange('model')}
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700">Problem</label>
      <textarea
        className="mt-1 block w-full p-2 border rounded"
        placeholder="Describe the problem"
        value={formData.problem}
        onChange={handleChange('problem')}
      />
    </div>
    <div className="flex justify-between">
      <button onClick={prevStep} className="bg-gray-500 text-white p-2 rounded">Back</button>
      <button onClick={nextStep} className="bg-blue-500 text-white p-2 rounded">Next</button>
    </div>
  </div>
  )
}
