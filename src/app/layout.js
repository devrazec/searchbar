import './globals.css';
import { GlobalProvider } from '../context/GlobalContext';
import { ThemeModeScript } from 'flowbite-react';
import { twMerge } from 'tailwind-merge';

export const metadata = {
  title: 'Universal SearchBar',
  icons: {
    icon: '/searchbar/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body className={twMerge('bg-primary-50 dark:bg-gray-900')}>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
