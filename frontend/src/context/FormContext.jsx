import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    service: '',
    reserved_datetime: '',
    workshop_id: '',
    license_plate: '',
    car_brand: '',
    model: '',
    problem_description: '',
    name: '',
    lastname: '',
    tel: '',
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
