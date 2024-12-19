"use client";

import Styles from "./RecipeCard.module.scss";
import Link from "next/link";

export default function RecipeCard(props) {

  return (
    <Link
      className={Styles.link}
      key={props.id}
      href={`/recipe/${props.id}`}
    >
      <div className={Styles.recipe}>
        <img
          className={Styles.recipe__image}
          src={props.image_link}
          width={"100%"}
          height={"auto"}
          alt={props.recipe_name}
        />
        <div className={Styles.text}>
          <h2 className={Styles.recipe__name}>{props.recipe_name}</h2>
          <h3 className={Styles.recipe__category}>
            Category: {props.category}
          </h3>
        </div>
      </div>
    </Link>
  );
}
