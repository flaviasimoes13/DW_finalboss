"use client";

import { useEffect, useState } from "react";
import Styles from "./page.module.scss";
import RecipeDetail from "../components/RecipeDetail/RecipeDetail";

export default function quickRecipes() {
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

  const quick = recipes.filter(
    (recipe) => recipe.duration && recipe.duration <= 30
  );



  return (
    <>
      <section className={Styles.quickRecipes}>
        <h2 className={Styles.sectionTitle}>Quick Recipes</h2>
        <div className={Styles.quickRecipesItem}>
        {quick.length > 0 ? (
            quick
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
          <p>No quick recipes available.</p>
        )}
        </div>
      </section>
    </>
  );
}
