import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import SmoothScroller from '@/components/SmoothScroll';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Happy Meat Farm',
  description: `Happy Meat Farms is a completely humane, organic animal farm. We don't see problems as problems, we see problems as future solutions.
  `,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-primary">
          <Header className="flex-1" />
          <SmoothScroller />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
