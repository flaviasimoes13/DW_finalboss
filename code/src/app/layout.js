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
        <header className={Styles.header}>
          <img src="favicon.png" alt="Logo" width="50" height="50" className={Styles.logo} />
          <h1 className={Styles.title}>Cooker</h1>
        </header>

        <div className={Styles.mainLayout}>
          <nav className={Styles.nav}>
            <Link className={Styles.link} href="/">
              <img src="home.png" alt="home" width="30px" height="30px" /> Home
            </Link>
            <Link className={`${Styles.link} ${Styles.separator}`} href="/quickRecipes">
              <img src="stopwatch.png" alt="quick recipes" width="30px" height="30px" /> Quick Recipes
            </Link>
            <Link className={`${Styles.link} ${Styles.separator}`} href="/myRecipes">
              <img src="myrec.png" alt="my recipes" width="30px" height="30px" /> My Recipes
            </Link>
            <Link className={`${Styles.link} ${Styles.separator}`} href="/myRecipes">
              <img src="mais.png" alt="add recipe" width="30px" height="30px" /> Add Recipes
            </Link>
          </nav>
        </div>

        <main className={Styles.content}>
          {children}
        </main>
      </body>
    </html>
  );
}
