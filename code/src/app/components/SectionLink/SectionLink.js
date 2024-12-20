"use client";

import Styles from "./SectionLink.module.scss";
import Link from "next/link";

export default function SectionLink({ href, icon, label, isMenuOpen, onClick }) {
  return (
      <Link
        className={`${Styles.link} ${Styles.separator}`}
        href={href}
        onClick={onClick} // Adicionando onClick ao Link para "Add Section"
      >
        
      <img src={icon} alt={label} width="30px" height="30px" />
      <p className={isMenuOpen ? Styles.p__open : Styles.p__closed}>
        {label}
      </p>
    </Link>
  );
}
