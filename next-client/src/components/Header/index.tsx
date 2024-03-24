'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import useHasMounted from '@/hooks/useHasMounted';

import DesktopNav from './DesktopNav';

const Header = () => {
	const pathname = usePathname();
	const { theme, setTheme } = useTheme();
	const hasMounted = useHasMounted();

	const transparentNav = pathname === '/' || pathname === '/about';

	return (
		<header
			className={`w-full pb-[10px] pt-6 lg:pb-8 lg:pt-8
      ${
				transparentNav
					? 'absolute left-0 top-0 z-30 w-full'
					: 'static border-b border-header_border_color'
			}
    `}
		>
			<nav className="mx-auto flex w-10/12 flex-row items-center lg:w-8/12 lg:justify-between xl:w-7/12">
				{/* Logo at the start */}
				<div className="flex-grow-0">
					<Link className="flex flex-row items-center gap-3" href="/">
						<Image
							src={'/favicon-cropped-600px.png'}
							alt="My Prayer Times Logo"
							width={48}
							height={48}
						/>
						<p
							className={`uppercase ${
								transparentNav ? 'text-white' : 'text-green-secondary'
							} font-bold`}
						>
							My Prayer Times
						</p>
					</Link>
				</div>

				{/* Navigation in the center */}
				<div className="hidden flex-grow justify-center lg:flex">
					<DesktopNav transparentNav={transparentNav} />
				</div>

				{/* Blog button at the end */}
				<div className="flex-grow-0">
					<Link
						className={`hidden rounded-full bg-green-dark px-12 py-4 font-semibold text-white hover:bg-green-secondary hover:transition-colors lg:flex
        ${pathname === '/blog' ? 'pointer-events-none opacity-20' : ''}`}
						href="/blog"
					>
						Our Blog
					</Link>
				</div>

				{/* Dark mode toggle at the far right */}
				<div className="ml-4 flex-grow-0">
					{hasMounted && theme === 'light' ? (
						<Moon
							className={`w-10 cursor-pointer
                ${transparentNav ? 'text-white' : ''}
              `}
							onClick={() => setTheme('dark')}
						/>
					) : (
						<Sun
							className={`w-10 cursor-pointer
                ${transparentNav ? 'text-white' : ''}
              `}
							onClick={() => setTheme('light')}
						/>
					)}
				</div>

				{/* Hamburger icon */}
				{/* {isHamburgerMenuOpen ? (
					<X
						className={`ml-auto text-2xl lg:hidden ${
							transparentNav || isHamburgerMenuOpen ? 'text-white' : ''
						}`}
						onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
					/>
				) : (
					<Menu
						className={`ml-auto text-2xl lg:hidden ${
							transparentNav ? 'text-white' : ''
						}`}
						onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
					/>
				)} */}
			</nav>
		</header>
	);
};

export default Header;
