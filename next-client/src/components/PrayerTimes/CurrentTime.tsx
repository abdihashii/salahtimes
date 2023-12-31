'use client';

import React from 'react';

const CurrentTime = ({
  name,
  currentTime,
}: {
  name: string;
  currentTime: string;
}) => {
  return (
    <article className="lg:min-w-3/12 mx-auto flex h-10 w-fit items-center justify-center rounded-3xl bg-green-dark lg:px-14 lg:py-3 xl:min-w-[20%]">
      {name ? (
        <p>
          Current time in{' '}
          <span>
            {name}: {currentTime}
          </span>
        </p>
      ) : (
        <p>Please select a location</p>
      )}
    </article>
  );
};

export default CurrentTime;
