import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import { Poppins } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from '@/components/ui/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const poppins = Poppins({
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
	display: 'swap',
	subsets: ['latin'],
	preload: true,
});

export const metadata: Metadata = {
	title: {
		template: '%s | MyPrayerTimes',
		default: 'MyPrayerTimes',
	},
	description: 'MyPrayerTimes',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.className} flex min-h-screen flex-col`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="light"
					enableSystem
					disableTransitionOnChange
				>
					<Header />

					{children}

					<Footer />
				</ThemeProvider>

				<Analytics />
			</body>
		</html>
	);
}
