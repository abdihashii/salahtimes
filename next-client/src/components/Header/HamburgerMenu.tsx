'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const HamburgerMenu = ({ closeMenu }: { closeMenu: () => void }) => {
	const pathname = usePathname();

	const handleClick = () => {
		closeMenu();
	};

	return (
		<nav className="absolute left-0 top-0 z-20 mx-auto min-h-screen w-full bg-green-extra_dark pb-12 pt-36 font-semibold text-white lg:hidden">
			<ul className="mb-20 flex flex-col gap-16 text-2xl">
				<li className="mx-auto w-fit">
					<Link
						onClick={handleClick}
						href="/"
						className={`${pathname === '/' ? 'text-green-secondary' : ''}`}
					>
						Prayer Times
					</Link>
				</li>
				<li className="mx-auto w-fit">
					<Link
						onClick={handleClick}
						href="/about"
						className={`${pathname === '/about' ? 'text-green-secondary' : ''}`}
					>
						About Us
					</Link>
				</li>
				<li className="mx-auto w-fit">
					<Link
						onClick={handleClick}
						href="/faqs"
						className={`${pathname === '/faqs' ? 'text-green-secondary' : ''}`}
					>
						FAQs
					</Link>
				</li>
				<li className="mx-auto w-fit">
					<Link
						onClick={handleClick}
						href="/hijri"
						className={`${pathname === '/hijri' ? 'text-green-secondary' : ''}`}
					>
						Hijri Date
					</Link>
				</li>
				<li className="mx-auto w-fit">
					<Link
						onClick={handleClick}
						href="/contact"
						className={`${pathname === '/contact' ? 'text-green-secondary' : ''}`}
					>
						Contact Us
					</Link>
				</li>
			</ul>

			<hr className="mx-auto mb-11 w-7/12" />

			<Link
				onClick={handleClick}
				href="/blog"
				className="mx-auto block w-fit rounded-full bg-green-secondary px-12 py-4"
			>
				Our Blog
			</Link>
		</nav>
	);
};

export default HamburgerMenu;
