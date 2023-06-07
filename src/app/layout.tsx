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
      <body className={inter.className}>
        <AppProvider>
          <main className="flex min-h-screen flex-col items-center p-10 bg-blue-500 ma-5">
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
