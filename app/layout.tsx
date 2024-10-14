import './globals.css';
import type { Metadata } from 'next';
import { Cormorant_Garamond } from 'next/font/google';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const cormorantGaramond = Cormorant_Garamond({ subsets: ['latin'], weight: ['400', '600'] });

export const metadata: Metadata = {
  title: 'Leander & Avashinita\'s Wedding',
  description: 'Join us in celebrating our love',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cormorantGaramond.className} bg-champagne text-pink-900`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Script id="handle-extra-attributes" strategy="afterInteractive">
          {`
            (function() {
              var originalError = console.error;
              console.error = function() {
                if (arguments[0].includes('Extra attributes from the server')) {
                  return;
                }
                originalError.apply(console, arguments);
              };
            })();
          `}
        </Script>
      </body>
    </html>
  );
}