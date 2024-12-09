import Image from "next/image";
import Styles from "./page.module.scss";
import Link from "next/link";

//componentes têm que ser importados
import Recipe from "./components/Recipe/Recipe";

export default function Home() {
  return (
    <>
      <Recipe src='/capivarateste.webp' alt='yummy capivara' name='capi' category='CARNE'/>
        
      
    </>
  );
}
