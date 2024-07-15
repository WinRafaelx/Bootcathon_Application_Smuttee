import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    location: '',
    vehicleNumber: '',
    brand: '',
    model: '',
    problem: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
  });

  const [step, setStep] = useState(1);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleChange = (input) => (e) => {
    setFormData({ ...formData, [input]: e.target.value });
  };

  return (
    <FormContext.Provider value={{ step, formData, nextStep, prevStep, handleChange }}>
      {children}
    </FormContext.Provider>
  );
};
