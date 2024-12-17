import Styles from "./RecipeCard.module.scss";
import Link from "next/link";

export default function RecipeCard(props) {
  return (
    <Link className={Styles.link} href="/recipe">
      <div className={Styles.recipe}>
        <img
          className={Styles.recipe__image}
          src={props.src}
          width={"100%"}
          height={"auto"}
          alt={props.alt}
        />

        <div className={Styles.text}>
          <h2 className={Styles.recipe__name}>{props.name}</h2>

          <h3 className={Styles.recipe__category}>{props.category}</h3>
        </div>
      </div>
    </Link>
  );
}


