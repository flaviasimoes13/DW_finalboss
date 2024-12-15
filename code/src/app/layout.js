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
            <img src="logo.png" alt="Logo" className={Styles.logo} />

            <div className={Styles.links}>
              <Link className={Styles.link} href="/">
                <img src="home.png" alt="home" width="30px" height="30px" /> Home
              </Link>
              <Link className={`${Styles.link} ${Styles.separator}`} href="/quickRecipes">
                <img src="stopwatch.png" alt="quick recipes" width="30px" height="30px" /> Quick Recipes
              </Link>
              <Link className={`${Styles.link} ${Styles.separator}`} href="/myRecipes">
                <img src="home.png" alt="my recipes" width="30px" height="30px" /> My Recipes
              </Link>
              <Link className={`${Styles.link} ${Styles.separator}`} href="/addRecipes">
                <img src="home.png" alt="add recipe" width="30px" height="30px" /> Add Recipes
              </Link>
            </div>
          </nav>

        <main className={Styles.content}>
          {children}
        </main>
      </body>
    </html>
  );
}
