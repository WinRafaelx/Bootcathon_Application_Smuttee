import React from 'react';

const ServiceCard = ({ image, title }) => {
    return (
      <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src={image} alt={title} />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{title}</div>
            <button className="mt-2 block text-center w-full bg-gray-200 text-gray-700 rounded py-2">เลือก</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ServiceCard;