import React from 'react';
import Header from '../../components/service/header.jsx';
import MultiStepForm from '../../components/service/MultiStepForm'

export default function ServicePage() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <Header />
      <MultiStepForm />
    </div>
  );
}