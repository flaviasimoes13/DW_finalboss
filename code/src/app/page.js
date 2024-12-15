import Image from "next/image";
import Styles from "./page.module.scss";
import Link from "next/link";

//componentes têm que ser importados
import Recipe from "./components/Recipe/Recipe";

export default function Home() {
  return (
    <>
            <section className={Styles.highlightItem}>
              <h2 className={Styles.sectionTitle}>Featured Recipe</h2>
              <Image src="/imagem.png" alt="Featured Recipe" width={300} height={200} />
              <h3 className={Styles.highlightItemTitle}>Recipe Name</h3>
              <p className={Styles.highlightItemDescription}>Recipe description</p>
            </section>

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
          
          <section className={Styles.myRecipes}>
            <h2 className={Styles.sectionTitle}>My Recipes</h2>
            <div className={Styles.myRecipesItem}>
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
              <Recipe src='/capivarateste.webp' alt='yummy capivara' name='capi' category='CARNE'/>
              <Recipe src='/capivarateste.webp' alt='yummy capivara' name='capi' category='CARNE'/>
            </div>
          </section>
    </>
  );
}
