"use client";

import { useEffect, useState } from "react";
import Styles from "./page.module.scss";
import RecipeCard from "./components/RecipeCard/RecipeCard";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [featuredRecipe, setFeaturedRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/api/recipes");
        const data = await response.json();
        setRecipes(data); // Armazenando as receitas no estado

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
        <div className={Styles.highlightText}>
          <h2 className={Styles.highlightsectionTitle}>Featured Recipe</h2>
          {featuredRecipe ? (
            <>
              <h3 className={Styles.highlightItemTitle}>
                {featuredRecipe.recipe_name || "No name available"}
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
          <img
            src={
              featuredRecipe.image_link &&
              featuredRecipe.image_link.startsWith("http")
                ? featuredRecipe.image_link
                : "/default-image.jpg"
            }
            alt={featuredRecipe.recipe_name}
            width={300}
            height={200}
          />
        )}
      </section>

      <section className={Styles.quickRecipes}>
        <h2 className={Styles.sectionTitle}>Quick Recipes</h2>
        <div className={Styles.quickRecipesItem}>
          {quickRecipes.length > 0 ? (
            quickRecipes
              .slice(0, 9)
              .map((recipe) => (
                <RecipeCard
                  key={recipe._id}
                  recipe_name={recipe.recipe_name}
                  image_link={recipe.image_link}
                  category={recipe.category}
                />
              ))
          ) : (
            <p>No quick recipes available.</p>
          )}
        </div>
      </section>

      {/*
      <section className={Styles.myRecipes}>
        <h2 className={Styles.sectionTitle}>My Recipes</h2>
        <div className={Styles.myRecipesItem}>
          {recipes.slice(0, 9).map((recipe) => (
            <RecipeCard key={recipe._id} recipe={recipe} />
          ))}
        </div>
      </section>
      */}
    </>
  );
}
