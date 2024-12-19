"use client";

import { useEffect, useState } from "react";
import Styles from "./page.module.scss";
import RecipeDetail from "../components/RecipeDetail/RecipeDetail";

export default function quickRecipes() {
const [recipes, setRecipes] = useState([]);

/*
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
*/

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recipesResponse = await fetch("/api/recipes");
        const recipesData = await recipesResponse.json();
  
        const categoriesResponse = await fetch("/api/categories");
        const categoriesData = await categoriesResponse.json();
  
        // Create a mapping of category IDs to names
        const categoryMap = categoriesData.reduce((map, category) => {
          map[category._id] = category.name; // Assuming category has _id and name fields
          return map;
        }, {});
  
        // Merge recipes with category names
        const enrichedRecipes = recipesData.map((recipe) => ({
          ...recipe,
          category_name: categoryMap[recipe.category] || "Unknown",
        }));
  
        console.log("Enriched Recipes:", enrichedRecipes); // Debugging
  
        // Update state
        setRecipes(enrichedRecipes);
  
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, []);

  const quick = recipes.filter(
    (recipe) => recipe.duration && recipe.duration <= 35
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
              category={recipe.category_name}
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
