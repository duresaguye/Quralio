import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";



export const metadata = {
  title: 'Quralio',
  description: 'Connect plastic waste producers and recyclers.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
       
      </body>
    </html>
  );
}
