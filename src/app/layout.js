import './globals.css';
import { GlobalProvider } from '../context/GlobalContext';
import { ThemeModeScript } from 'flowbite-react';
import { twMerge } from 'tailwind-merge';
import { ThemeInit } from '../../.flowbite-react/init';

export const metadata = {
  title: 'Universal SearchBar',
  icons: {
    icon: '/searchbar/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" class="dark" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body className={twMerge('bg-gray-50 dark:bg-gray-900')}>
        <GlobalProvider>
          <ThemeInit />
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
