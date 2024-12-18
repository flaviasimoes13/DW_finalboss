import Recipe from "../components/RecipeDetail/RecipeDetail";
import Styles from "./page.module.scss";

import RecipeDetail from "../components/RecipeDetail/RecipeDetail";

export default function quickRecipes() {
  return (
    <>
      <section className={Styles.quickRecipes}>
        <h2 className={Styles.sectionTitle}>Quick Recipes</h2>
        <div className={Styles.quickRecipesItem}>
        <RecipeDetail />
          
          {/* <Recipe
            src="/capivarateste.webp"
            alt="yummy capivara"
            name="capi"
            category="CARNE"
            description="Ba-ba-ba-ba-ba-na-na Ba-ba-ba-ba-ba-na-na Banana-ah-ah Potato-na-ah-ah Banana-ah-ah Tokari noh potato-li kani malo mani kano Chi ka-baba, ba-ba-nana Yoh plano boo la planonoh too Ma bana-na la-ka moobi talaloo"
          />
          <Recipe
            src="/capivarateste.webp"
            alt="yummy capivara"
            name="capi"
            category="CARNE"
            description="Ba-ba-ba-ba-ba-na-na Ba-ba-ba-ba-ba-na-na Banana-ah-ah Potato-na-ah-ah Banana-ah-ah Tokari noh potato-li kani malo mani kano Chi ka-baba, ba-ba-nana Yoh plano boo la planonoh too Ma bana-na la-ka moobi talaloo"
          />
          <Recipe
            src="/capivarateste.webp"
            alt="yummy capivara"
            name="capi"
            category="CARNE"
            description="Ba-ba-ba-ba-ba-na-na Ba-ba-ba-ba-ba-na-na Banana-ah-ah Potato-na-ah-ah Banana-ah-ah Tokari noh potato-li kani malo mani kano Chi ka-baba, ba-ba-nana Yoh plano boo la planonoh too Ma bana-na la-ka moobi talaloo"
          />
          <Recipe
            src="/capivarateste.webp"
            alt="yummy capivara"
            name="capi"
            category="CARNE"
            description="Ba-ba-ba-ba-ba-na-na Ba-ba-ba-ba-ba-na-na Banana-ah-ah Potato-na-ah-ah Banana-ah-ah Tokari noh potato-li kani malo mani kano Chi ka-baba, ba-ba-nana Yoh plano boo la planonoh too Ma bana-na la-ka moobi talaloo"
          />
          <Recipe
            src="/capivarateste.webp"
            alt="yummy capivara"
            name="capi"
            category="CARNE"
            description="Ba-ba-ba-ba-ba-na-na Ba-ba-ba-ba-ba-na-na Banana-ah-ah Potato-na-ah-ah Banana-ah-ah Tokari noh potato-li kani malo mani kano Chi ka-baba, ba-ba-nana Yoh plano boo la planonoh too Ma bana-na la-ka moobi talaloo"
          />
          <Recipe
            src="/capivarateste.webp"
            alt="yummy capivara"
            name="capi"
            category="CARNE"
            description="Ba-ba-ba-ba-ba-na-na Ba-ba-ba-ba-ba-na-na Banana-ah-ah Potato-na-ah-ah Banana-ah-ah Tokari noh potato-li kani malo mani kano Chi ka-baba, ba-ba-nana Yoh plano boo la planonoh too Ma bana-na la-ka moobi talaloo"
          />
          <Recipe
            src="/capivarateste.webp"
            alt="yummy capivara"
            name="capi"
            category="CARNE"
            description="Ba-ba-ba-ba-ba-na-na Ba-ba-ba-ba-ba-na-na Banana-ah-ah Potato-na-ah-ah Banana-ah-ah Tokari noh potato-li kani malo mani kano Chi ka-baba, ba-ba-nana Yoh plano boo la planonoh too Ma bana-na la-ka moobi talaloo"
          />
          <Recipe
            src="/capivarateste.webp"
            alt="yummy capivara"
            name="capi"
            category="CARNE"
            description="Ba-ba-ba-ba-ba-na-na Ba-ba-ba-ba-ba-na-na Banana-ah-ah Potato-na-ah-ah Banana-ah-ah Tokari noh potato-li kani malo mani kano Chi ka-baba, ba-ba-nana Yoh plano boo la planonoh too Ma bana-na la-ka moobi talaloo"
          />
          <Recipe
            src="/capivarateste.webp"
            alt="yummy capivara"
            name="capi"
            category="CARNE"
            description="Ba-ba-ba-ba-ba-na-na Ba-ba-ba-ba-ba-na-na Banana-ah-ah Potato-na-ah-ah Banana-ah-ah Tokari noh potato-li kani malo mani kano Chi ka-baba, ba-ba-nana Yoh plano boo la planonoh too Ma bana-na la-ka moobi talaloo"
          />
          <Recipe
            src="/capivarateste.webp"
            alt="yummy capivara"
            name="capi"
            category="CARNE"
            description="Ba-ba-ba-ba-ba-na-na Ba-ba-ba-ba-ba-na-na Banana-ah-ah Potato-na-ah-ah Banana-ah-ah Tokari noh potato-li kani malo mani kano Chi ka-baba, ba-ba-nana Yoh plano boo la planonoh too Ma bana-na la-ka moobi talaloo"
          /> */}
        </div>
      </section>
    </>
  );
}
