import { Inter } from 'next/font/google';
import Header from './components/Header/Header';
import './globals.css';
import AppProvider from './provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cypress + Next.js',
  description: 'Cypress: Ferramenta poderosa para trabalhar com legados'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-500`}>
        <AppProvider>
          <main className="flex min-h-screen flex-col items-center p-4  ma-2">
            <div className="container">
              <Header />
              {children}
            </div>
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
