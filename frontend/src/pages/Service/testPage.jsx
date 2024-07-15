import React from 'react'
import MultiStepForm from '../../components/service/MultiStepForm'

export default function TestPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-8">Schedule Workshop Service</h1>
      <MultiStepForm />
    </div>
  )
}
