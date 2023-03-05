import React from 'react';
import { RxArrowDown, RxArrowUp } from 'react-icons/rx';

export const MorePrayerTimesBtn = ({
  onClickHandler,
  isMoreSalahTimesToggled,
}) => {
  return (
    <button
      className="mx-auto mb-27px flex h-55px cursor-pointer items-center justify-center gap-2 rounded-full border-none bg-green-dark px-8 text-base font-semibold uppercase text-white hover:bg-green-secondary"
      onClick={onClickHandler}
    >
      <p>More Prayer Times</p>
      {isMoreSalahTimesToggled ? <RxArrowUp /> : <RxArrowDown />}
    </button>
  );
};
