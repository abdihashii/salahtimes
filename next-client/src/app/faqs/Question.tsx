import React from 'react';

const Question = ({
	title,
	question,
}: {
	title: string;
	question: string | any[];
}) => {
	return (
		<div>
			<h3 className="text-xl font-semibold lg:text-2xl">{title}</h3>
			<p className="leading-relaxed lg:text-lg lg:leading-loose">{question}</p>
		</div>
	);
};

export default Question;
