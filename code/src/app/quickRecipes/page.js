"use client";

import { useEffect, useState } from "react";
import Styles from "./page.module.scss";
import RecipeDetail from "../components/RecipeDetail/RecipeDetail";

export default function quickRecipes() {
  const [recipes, setRecipes] = useState([]);

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
                  id={recipe._id}
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
