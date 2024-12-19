"use client";

import { useEffect, useState } from "react";
import Styles from "./page.module.scss";
import Image from "next/image";

import RecipeCard from "./components/RecipeCard/RecipeCard";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [featuredRecipe, setFeaturedRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/api/recipes");
        const data = await response.json();
        setRecipes(data); 

        // Seleciona uma receita aleatória
        if (data.length > 0) {
          const randomRecipe = data[Math.floor(Math.random() * data.length)];
          setFeaturedRecipe(randomRecipe);
        }
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };

    fetchRecipes();
  }, []);

  const quickRecipes = recipes.filter(
    (recipe) => recipe.duration && recipe.duration <= 30
  );

  return (
    <>
      <section className={Styles.highlightItem}>
        <div className={Styles.highlightContent}>
          <h2 className={Styles.highlightsectionTitle}>Featured Recipe</h2>
          {featuredRecipe ? (
            <>
              <h3 className={Styles.highlightItemTitle}>
                {featuredRecipe.name || "No name available"}
              </h3>
              <p className={Styles.highlightItemDescription}>
                {featuredRecipe.description || "No description available."}
              </p>
              <button type="button" className={Styles.highlightItemButton}>
                Start Cooking ➔
              </button>
            </>
          ) : (
            <p>Loading featured recipe...</p>
          )}
        </div>
        {featuredRecipe && (
          <Image
            src={
              featuredRecipe.image && featuredRecipe.image.startsWith("http")
                ? featuredRecipe.image
                : "/default-image.jpg"
            } // Fallback para imagem padrão
            alt={featuredRecipe.name}
            width={300}
            height={200}
          />
        )}
      </section>

      <section className={Styles.quickRecipes}>
        <h2 className={Styles.sectionTitle}>Quick Recipes</h2>
        <div className={Styles.quickRecipesItem}>
        
        </div>
      </section>

      <section className={Styles.myRecipes}>
        <h2 className={Styles.sectionTitle}>My Recipes</h2>
        <div className={Styles.myRecipesItem}>
          {recipes.slice(0, 9).map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      </section>
    </>
  );
}
