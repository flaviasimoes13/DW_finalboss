import "./globals.css";
import Styles from "./layout.module.scss";
import Navegation from "./components/Navegation/Navegation";


export const metadata = {
  title: "Cooker",
  description: "Your digital cookbook!",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>
          <Navegation/>
        <main className={Styles.content}>
          {children}
        </main>
      </body>
    </html>
  );
}
