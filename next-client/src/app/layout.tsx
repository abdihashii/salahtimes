import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'], // Add the weights you need
  display: 'swap',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MyPrayerTimes',
  description: 'MyPrayerTimes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex min-h-screen flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />

          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
