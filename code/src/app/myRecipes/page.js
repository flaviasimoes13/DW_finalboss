"use client";

import { useEffect, useState } from "react";
import Styles from "./page.module.scss";
import RecipeDetail from "../components/RecipeDetail/RecipeDetail";

export default function myRecipes() {
const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/api/recipes");
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  const my = recipes.filter(
    (recipe) => recipe.owner && recipe.owner == 1
  );


  return (
    <>
      <section className={Styles.quickRecipes}>
        <h2 className={Styles.sectionTitle}>My Recipes</h2>
        <div className={Styles.quickRecipesItem}>
         {my.length > 0 ? (
                   my
                     .slice(0, 9)
                     .map((recipe) => (
               <RecipeDetail 
                  key={recipe._id}
                  recipe_name={recipe.recipe_name}
                  image_link={recipe.image_link}
                  category={recipe.category}
                  description={recipe.description}
                  />
                 ))
               ) : (
                 <p>You haven't created any recipes.</p>
               )}
          
        </div>
      </section>
    </>
  );
}
