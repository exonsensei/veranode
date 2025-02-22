import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import localFont from 'next/font/local';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const horizhon = localFont({
  src: './fonts/horizon.otf',
  variable: '--font-horizhon',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Vera Digital - Digital Transformation and Technology Solutions",
  description: "Take your business to the future with digital transformation and technology solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable} ${horizhon.variable}`}>{children}</body>
    </html>
  );
} 