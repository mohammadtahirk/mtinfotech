import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tahir Kalaiwala | Frontend Developer & Web Designer Portfolio",
  description: "Official portfolio of Tahir Kalaiwala - Web Designer & Frontend Developer specializing in React.js, Next.js, and responsive UI design. Contact: +91 6355744550 | kalaiwalatahir@gmail.com",
  keywords: ["Tahir Kalaiwala", "Frontend Developer", "Web Designer", "Next.js Developer", "React Developer", "UI/UX Designer", "Portfolio"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`py-4 sm:py-6 md:py-8 lg:py-10 px-3 sm:px-6 md:px-8 lg:px-12 max-w-[1720px] mx-auto min-h-screen flex flex-col justify-between ${inter.className}`}>
        <Header optionalLink={'Contact Me'} id={'header'} />
        <div className="flex-grow w-full">
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  );
}
