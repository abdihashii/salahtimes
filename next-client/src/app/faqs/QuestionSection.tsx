const QuestionSection = ({
	title,
	className,
	children,
}: {
	title: string;
	className: string;
	children: React.ReactNode;
}) => {
	return (
		<section className={`mx-auto w-10/12 space-y-8 lg:w-5/12 ${className}`}>
			<h2 className="text-3xl font-semibold text-green-dark dark:text-green-secondary lg:text-5xl">
				{title}
			</h2>
			{children}
		</section>
	);
};

export default QuestionSection;
