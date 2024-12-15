import Recipe from "../components/Recipe/Recipe";
import Styles from "./page.module.scss";

export default function quickRecipes(){
    return(<>
    
    <section className={Styles.quickRecipes}>
      <h2 className={Styles.sectionTitle}>Quick Recipes</h2>
      <div className={Styles.quickRecipesItem}>
        <Recipe src='/capivarateste.webp' alt='yummy capivara' name='capi' category='CARNE'/>
        <Recipe src='/capivarateste.webp' alt='yummy capivara' name='capi' category='CARNE'/>
        <Recipe src='/capivarateste.webp' alt='yummy capivara' name='capi' category='CARNE'/>
        <Recipe src='/capivarateste.webp' alt='yummy capivara' name='capi' category='CARNE'/>
        <Recipe src='/capivarateste.webp' alt='yummy capivara' name='capi' category='CARNE'/>
        <Recipe src='/capivarateste.webp' alt='yummy capivara' name='capi' category='CARNE'/>
        <Recipe src='/capivarateste.webp' alt='yummy capivara' name='capi' category='CARNE'/>
        <Recipe src='/capivarateste.webp' alt='yummy capivara' name='capi' category='CARNE'/>
        <Recipe src='/capivarateste.webp' alt='yummy capivara' name='capi' category='CARNE'/>
        <Recipe src='/capivarateste.webp' alt='yummy capivara' name='capi' category='CARNE'/> 
      </div>
    </section>
    
    </>);
}