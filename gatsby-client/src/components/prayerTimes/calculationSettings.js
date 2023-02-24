import React from 'react';
import { RxPencil2 } from 'react-icons/rx';

const CalculationSettings = () => {
  return (
    <div className="mx-auto w-10/12 lg:w-9/12">
      {/* Calculation settings */}
      <p className="text-sm font-normal text-text-light_grey">
        Calculation Method: <strong>Islamic Society of North America</strong>,
      </p>

      <p className="mb-5 text-sm font-normal text-text-light_grey">
        Juristic settings: <strong>Shafii</strong>
      </p>

      {/* Change settings button */}
      <button className="mx-auto mb-45px flex w-fit items-center gap-2 text-text-light_blue">
        <RxPencil2 /> Change Settings
      </button>
    </div>
  );
};

export default CalculationSettings;
