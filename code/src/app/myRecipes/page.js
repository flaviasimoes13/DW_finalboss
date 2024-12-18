import Recipe from "../components/RecipeDetail/RecipeDetail";
import Styles from "./page.module.scss";
import RecipeDetail from "../components/RecipeDetail/RecipeDetail";

export default function myRecipes() {
  return (
    <>
      <section className={Styles.quickRecipes}>
        <h2 className={Styles.sectionTitle}>My Recipes</h2>
        <div className={Styles.quickRecipesItem}>
        <RecipeDetail />
          
          
        </div>
      </section>
    </>
  );
}
