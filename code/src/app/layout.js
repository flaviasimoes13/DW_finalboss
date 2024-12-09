import Image from "next/image";
import Styles from "./layout.module.scss";
import Link from "next/link";



import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Cooker",
  description: "Your digital cookbook!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>


      <nav className={Styles.nav}> 
        <Link className={Styles.link} href="/"> <img src= "home.png" alt="home" width="30px" height="30px"/> Home </Link>
        <Link className={`${Styles.link} ${Styles.separator}`} href="/quickRecipes"> <img src= "stopwatch.png" alt="home" width="30px" height="30px"/> Quick Recipes</Link>
        {/* adicionar os outros "links" da nossa side bar */}
      </nav>
       
       
        {children}
      </body>
    </html>
  );
}
