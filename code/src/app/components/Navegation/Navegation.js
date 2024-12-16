"use client";

import Link from "next/link";
import Styles from "./Navegation.module.scss";
import { useState } from "react";

export default function Navegation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div
      className={`${Styles.navegation} ${
        isMenuOpen ? Styles.navegation__open : Styles.navegation__closed
      }`}
    >
      <button className={Styles.hamburguer} onClick={toggleMenu}>
        {isMenuOpen ? (
          <img src="/menu_close.png" width={"100%"} height={"100%"} />
        ) : (
          <img src="/menu_open.png" width={"100%"} height={"100%"} />
        )}
      </button>

      <nav
        className={`${Styles.menu} ${
          isMenuOpen ? Styles.menu__open : Styles.menu__closed
        }`}
      >
        <img
          src="logo.png"
          alt="Logo"
          className={isMenuOpen ? Styles.logo__open : Styles.logo__closed}
        />

        <div className={Styles.links}>
          <Link className={Styles.link} href="/">
            <img src="home.png" alt="home" width="30px" height="30px" />{" "}
            <p className={isMenuOpen ? Styles.p__open : Styles.p__closed}>
              Home
            </p>
          </Link>
          <Link
            className={`${Styles.link} ${Styles.separator}`}
            href="/quickRecipes"
          >
            <img
              src="stopwatch.png"
              alt="quick recipes"
              width="30px"
              height="30px"
            />{" "}
            <p className={isMenuOpen ? Styles.p__open : Styles.p__closed}>
              Quick Recipes
            </p>
          </Link>
          <Link
            className={`${Styles.link} ${Styles.separator}`}
            href="/myRecipes"
          >
            <img src="myrec.png" alt="my recipes" width="30px" height="30px" />{" "}
            <p className={isMenuOpen ? Styles.p__open : Styles.p__closed}>
              My Recipes
            </p>
          </Link>
          <Link
            className={`${Styles.link} ${Styles.separator}`}
            href="/addRecipes"
          >
            <img src="home.png" alt="add recipe" width="30px" height="30px" />{" "}
            <p className={isMenuOpen ? Styles.p__open : Styles.p__closed}>
              Add Recipes
            </p>
          </Link>
        </div>
      </nav>
    </div>
  );
}
