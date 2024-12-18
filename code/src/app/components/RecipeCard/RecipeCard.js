"use client";

import { useEffect, useState } from "react";
import Styles from "./RecipeCard.module.scss";
import Link from "next/link";

const RecipeCard = ({ recipe }) => {
  return (
    <Link
      className={Styles.link}
      key={recipe._id}
      href={`/recipe/${recipe._id}`}
    >
      <div className={Styles.recipe}>
        <img
          className={Styles.recipe__image}
          src={recipe.image_link}
          width={"100%"}
          height={"auto"}
          alt={recipe.recipe_name}
        />
        <div className={Styles.text}>
          <h2 className={Styles.recipe__name}>{recipe.recipe_name}</h2>
          <h3 className={Styles.recipe__category}>Category: {recipe.category}</h3>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
