import React from 'react';

export const MorePrayerTimesBtn = ({
  onClickHandler,
  isMoreSalahTimesToggled,
}) => {
  return (
    <div className="flex justify-center">
      <button
        className="h-55px w-242px cursor-pointer rounded-4xl border-none bg-green text-base font-semibold uppercase text-white shadow-green hover:bg-green-dark"
        onClick={onClickHandler}
      >
        <span>More Salah Times</span>
        <span className="h-1.5em w-1.5em inline-flex items-center justify-center">
          <i
            className={`fas ${
              isMoreSalahTimesToggled ? 'fa-angle-up' : 'fa-angle-down'
            }`}
          ></i>
        </span>
      </button>
    </div>
  );
};
