import Styles from "./RecipeDetail.module.scss";
import Link from "next/link";

export default function Recipe(props) {
    return (
      <Link className={Styles.link} href="/recipe">
        <div className={Styles.recipe}>
          <div className={Styles.recipe__content}>
            <div className={Styles.recipe__imageWrapper}>
              <img
                className={Styles.recipe__image}
                src={props.src}
                alt={props.alt}
              />
            </div>
  
            <div className={Styles.recipe__text}>
              <h2 className={Styles.recipe__name}>{props.name}</h2>
              <h3 className={Styles.recipe__category}>{props.category}</h3>
              <p className={Styles.recipe__description}>{props.description}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
  