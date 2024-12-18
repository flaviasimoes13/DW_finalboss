"use client";

import { useEffect, useState } from "react";
import Styles from "./RecipeDetail.module.scss"; // Import the SASS module
import Link from "next/link"; // For linking to detailed recipe pages

const QuickRecipes = () => {
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

  return (
    <div>
      <h2 className={Styles.heading}>Quick Recipes</h2>
      <div className={Styles.recipesList}>
        {recipes.map((recipe) => (
          <Link
            className={Styles.link}
            key={recipe._id}
            href={`/recipe/${recipe._id}`} // Dynamic link to detailed recipe page
          >
            <div className={Styles.recipe}>
              <div className={Styles.recipe__content}>
                <div className={Styles.recipe__imageWrapper}>
                  <img
                    className={Styles.recipe__image}
                    src={recipe.image_link}
                    alt={recipe.recipe_name}
                  />
                </div>
                <div className={Styles.recipe__text}>
                  <h2 className={Styles.recipe__name}>{recipe.recipe_name}</h2>
                  <h3 className={Styles.recipe__category}>
                    Category: {recipe.category}
                  </h3>
                  <p className={Styles.recipe__description}>
                    {recipe.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickRecipes;
