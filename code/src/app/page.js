"use client";

import { useEffect, useState } from "react";
import Styles from "./page.module.scss";
import RecipeCard from "./components/RecipeCard/RecipeCard";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [featuredRecipe, setFeaturedRecipe] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recipesResponse = await fetch("/api/recipes");
        const recipesData = await recipesResponse.json();
  
        const categoriesResponse = await fetch("/api/categories");
        const categoriesData = await categoriesResponse.json();
  
        const categoryMap = categoriesData.reduce((map, category) => {
          map[category._id] = category.name; 
          return map;
        }, {});
  
        const enrichedRecipes = recipesData.map((recipe) => ({
          ...recipe,
          category_name: categoryMap[recipe.category] || "Unknown",
        }));
  
        setRecipes(enrichedRecipes);
  
        if (enrichedRecipes.length > 0) {
          const randomRecipe =
            enrichedRecipes[Math.floor(Math.random() * enrichedRecipes.length)];
          setFeaturedRecipe(randomRecipe);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);
  

  const quickRecipes = recipes.filter(
    (recipe) => recipe.duration && recipe.duration <= 35
  );

  const my = recipes.filter((recipe) => recipe.owner && recipe.owner == 1);

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
                  id={recipe._id}
                  recipe_name={recipe.recipe_name}
                  image_link={recipe.image_link}
                  category={recipe.category_name} 
                />
              ))
          ) : (
            <p>No quick recipes available.</p>
          )}
        </div>
      </section>



      <section className={Styles.quickRecipes}>
        <h2 className={Styles.sectionTitle}>My Recipes</h2>
        <div className={Styles.quickRecipesItem}>
          {my.length > 0 ? (
            my
              .slice(0, 9)
              .map((recipe) => (
                <RecipeCard
                id={recipe._id}
                recipe_name={recipe.recipe_name}
                image_link={recipe.image_link}
                category={recipe.category_name} 
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
