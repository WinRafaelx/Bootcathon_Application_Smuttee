import React from 'react';
import { useFormContext } from '../../context/FormContext';
import ServiceSelection from './ServiceSelection';
import DateandLocation from './DateandLocation';
import CarForm from './CarForm';
import UserForm from './UserForm';
import Summary from './Summary';

const MultiStepForm = () => {
  const { step } = useFormContext();

  switch (step) {
    case 1:
      return <ServiceSelection />;
    case 2:
      return <DateandLocation />;
    case 3:
      return <CarForm />;
    case 4:
      return <UserForm />;
    case 5:
      return <Summary />;
    default:
      return <div>Invalid step</div>;
  }
};

export default MultiStepForm;
