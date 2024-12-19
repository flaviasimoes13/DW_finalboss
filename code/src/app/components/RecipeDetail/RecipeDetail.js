"use client";

import Styles from "./RecipeDetail.module.scss";
import Link from "next/link"; 

export default function RecipeDetail(recipe) {
  return (
    <div>
      <div className={Styles.recipesList}>
          <Link
            className={Styles.link}
            key={recipe._id}
            href={`/recipe/${recipe._id}`}
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
      </div>
    </div>
  );
};

