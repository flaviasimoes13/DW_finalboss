"use client";

import Styles from "./RecipeDetail.module.scss";
import Link from "next/link";

export default function RecipeDetail(props) {
  return (
    <Link className={Styles.link} id={props._id} href={`/recipe/${props.id}`}>
      <div className={Styles.recipe}>
        <div className={Styles.recipe__content}>
          <div className={Styles.recipe__imageWrapper}>
            <img
              className={Styles.recipe__image}
              src={props.image_link}
              alt={props.recipe_name}
            />
          </div>
          <div className={Styles.recipe__text}>
            <h2 className={Styles.recipe__name}>{props.recipe_name}</h2>
            <h3 className={Styles.recipe__category}>
              Category: {props.category}
            </h3>
            <p className={Styles.recipe__description}>{props.description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
