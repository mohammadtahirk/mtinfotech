import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tahir Kalaiwala | Frontend Developer & Web Designer Portfolio",
  description: "Official portfolio of Tahir Kalaiwala - Web Designer & Frontend Developer specializing in React.js, Next.js, and responsive UI design. Contact: +91 6355744550 | kalaiwalatahir@gmail.com",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`py-6 sm:py-8 lg:py-10 px-4 md:px-6 ${inter.className}`}>
        <Header optionalLink={'Contact Me'} id={'header'} />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
