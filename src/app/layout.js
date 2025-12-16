import './globals.css';
import { GlobalProvider } from '../context/GlobalContext';

export const metadata = {
  title: 'Universal SearchBar',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
