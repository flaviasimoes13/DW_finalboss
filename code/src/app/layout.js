import localFont from "next/font/local";
import "./globals.css";
import Styles from "./layout.module.scss";
import Navegation from "./components/Navegation/Navegation";

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
          <Navegation/>
        <main className={Styles.content}>
          {children}
        </main>
      </body>
    </html>
  );
}
