import React from 'react';

const CustomToolbar = (toolbar) => {
  const goToBack = () => toolbar.onNavigate('PREV');
  const goToNext = () => toolbar.onNavigate('NEXT');
  const goToCurrent = () => toolbar.onNavigate('TODAY');

  const label = () => {
    const date = new Date(toolbar.date);
    return (
      <span className="font-bold">
        {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}
      </span>
    );
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gray-100">
      <div className="flex space-x-2">
        <button className="px-4 py-2 bg-gray-300 rounded" onClick={goToBack}>
          {'<'}
        </button>
        <button className="px-4 py-2 bg-gray-300 rounded" onClick={goToCurrent}>Today</button>
        <button className="px-4 py-2 bg-gray-300 rounded" onClick={goToNext}>
          {'>'}
        </button>
      </div>
      <div>{label()}</div>
      <div className="flex space-x-2">
        <button className="px-4 py-2 bg-gray-300 rounded" onClick={() => toolbar.onView('month')}>Month</button>
        <button className="px-4 py-2 bg-gray-300 rounded" onClick={() => toolbar.onView('week')}>Week</button>
        <button className="px-4 py-2 bg-gray-300 rounded" onClick={() => toolbar.onView('day')}>Day</button>
      </div>
    </div>
  );
};

export default CustomToolbar;
