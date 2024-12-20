"use client";

import Link from "next/link";
import Styles from "./Navegation.module.scss";
import { useState } from "react";
import SectionLink from "../SectionLink/SectionLink";

export default function Navegation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false); 
  const [newSectionName, setNewSectionName] = useState("");  // Estado para o nome da nova seção
  const [sections, setSections] = useState([  // Seções no estado (sem o item "Add Section")
    { href: "/", icon: "home.png", label: "Home" },
    { href: "/quickRecipes", icon: "stopwatch.png", label: "Quick Recipes" },
    { href: "/myRecipes", icon: "myrec.png", label: "My Recipes" },
  ]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const openPopup = (e) => {
    e.preventDefault();  // Previne a navegação
    setIsPopupOpen(true);  // Abre o popup
  };

  const closePopup = () => {
    setIsPopupOpen(false);  // Fecha o popup
  };

  const handleAddSection = () => {
    if (newSectionName.trim()) {
      const newSection = {
        href: `/${newSectionName.toLowerCase().replace(/\s+/g, '-')}`,  // Gera um href com o nome
        icon: "add.png",  // Pode ser um ícone default ou outro
        label: newSectionName,
      };

      setSections((prevSections) => [
        ...prevSections,
        newSection,  // Adiciona a nova seção à lista
      ]);

      setNewSectionName("");  // Limpa o nome da seção
      closePopup();  // Fecha o popup
    } else {
      alert("Por favor, insira um nome válido para a seção.");
    }
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
         <div className={Styles.logo}>
          <img
            src="logo.png"
            alt="Logo"
            className={isMenuOpen ? Styles.logo__open : Styles.logo__closed}
          />
        </div>

        <div className={Styles.links}>
          {sections.map((section, index) => (
            <SectionLink
              key={index}
              href={section.href}
              icon={section.icon}
              label={section.label} 
              isMenuOpen={isMenuOpen}
              onClick={section.label === "Add Section" ? openPopup : null}  // Passa a função de clique para "Add Section"
            />
          ))}

          {/* Adiciona o "Add Section" sempre ao final */}
          <SectionLink
            key="add-section"
            href="#"
            icon="add.png"
            label="Add Section"
            isMenuOpen={isMenuOpen}
            onClick={openPopup}
          />
        </div>
      </nav>



{/* Popup */}
      {isPopupOpen && (
        <div className={Styles.popup}>
          <div className={Styles.popupContent}>
            <h3>Add new Section</h3>
            <input
              type="text"
              placeholder="Digite o nome da seção"
              value={newSectionName}
              onChange={(e) => setNewSectionName(e.target.value)}
            />
            <button onClick={handleAddSection}>Adicionar Seção</button>
            <button onClick={closePopup}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
}



/*
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
        <div className={Styles.logo}>
          <img
            src="logo.png"
            alt="Logo"
            className={isMenuOpen ? Styles.logo__open : Styles.logo__closed}
          />
        </div>
        
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
            <img src="stopwatch.png" alt="quick recipes" width="30px" height="30px"/>{" "}
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
            href="/addSection"
          >
            <img src="add.png" alt="add section" width="30px" height="30px" />{" "}
            <p className={isMenuOpen ? Styles.p__open : Styles.p__closed}>
              Add Section
            </p>
          </Link>
        </div>
      </nav>
    </div>
  );
}
*/


//=============================
/*
import Link from "next/link";

export default function Navegation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
    
*/