import type { Components } from 'react-markdown';

export const components: Components = {
	h2: (h2) => {
		return (
			<h2 className="mb-2 text-lg font-semibold text-[#0f0700]">
				{h2.children}
			</h2>
		);
	},
	p: (p) => {
		return (
			<p className="mb-8 text-base font-light leading-7 text-black last:mb-0">
				{p.children}
			</p>
		);
	},
	ol: (ol) => {
		return <ol className="ml-8 list-inside">{ol.children}</ol>;
	},
	li: (li) => {
		return (
			<li className="mb-6 list-decimal text-base font-light leading-7 text-black last:mb-8">
				{li.children}
			</li>
		);
	},
	a: (a) => {
		return (
			<a
				className="text-xs text-[#848280] hover:text-[#0f0700] hover:underline focus:text-[#0f0700]"
				href={typeof a.href === 'string' ? a.href : ''}
				target="_blank"
			>
				{a.children}
			</a>
		);
	},
};
