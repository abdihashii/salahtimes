'use client';

import React from 'react';

const CurrentTime = ({
	name,
	currentTime,
	className,
}: {
	name: string;
	currentTime: string;
	className?: string;
}) => {
	return (
		<article
			className={`lg:min-w-3/12 mx-auto flex h-10 w-11/12 items-center justify-center rounded-3xl bg-green-dark lg:w-fit lg:px-14 lg:py-3 xl:min-w-[20%] ${className}`}
		>
			{name ? (
				<p>
					Current time in <span className="font-bold">{name}:</span>{' '}
					{currentTime}
				</p>
			) : (
				<p>Please select a location</p>
			)}
		</article>
	);
};

export default CurrentTime;
