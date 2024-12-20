"use client";

import Styles from "./Navegation.module.scss";
import { useState } from "react";
import SectionLink from "../SectionLink/SectionLink";

export default function Navegation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false); 
  const [newSectionName, setNewSectionName] = useState(""); 
  const [sections, setSections] = useState([  
    { href: "/", icon: "home.png", label: "Home" },
    { href: "/quickRecipes", icon: "stopwatch.png", label: "Quick Recipes" },
    { href: "/myRecipes", icon: "myrec.png", label: "My Recipes" },
  ]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const openPopup = (e) => {
    e.preventDefault(); 
    setIsPopupOpen(true); 
  };

  const closePopup = () => {
    setIsPopupOpen(false);  
  };

  const handleAddSection = async () => {
    if (newSectionName.trim()) {
      try {
        const response = await fetch("/api/sections", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
          },
          body: JSON.stringify({ sectionName: newSectionName })
        });
  
        const data = await response.json();
  
        if (response.ok) {
          const newSection = {
            href: `/${newSectionName.toLowerCase().replace(/\s+/g, '-')}`,
            icon: "myrec.png",
            label: newSectionName,
          };
  
          setSections((prevSections) => [
            ...prevSections,
            newSection,
          ]);
  
          setNewSectionName("");
          closePopup();
        } else {
          alert(data.error || "Error adding section");
        }
      } catch (error) {
        console.error("Error adding section:", error);
      }
    } else {
      alert("Please insert a valid name for your section");
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
              onClick={section.label === "Add Section" ? openPopup : null}
            />
          ))}

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


      {isPopupOpen && (
        <div className={isPopupOpen ? Styles.popup : Styles.notpopup}>
          <div className={Styles.popupContent}>
            <h3>Add new Section</h3>
            <input
              type="text"
              placeholder="Insert section name"
              value={newSectionName}
              onChange={(e) => setNewSectionName(e.target.value)}
            />
            <button onClick={handleAddSection}>Add Section</button>
            <button onClick={closePopup}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}