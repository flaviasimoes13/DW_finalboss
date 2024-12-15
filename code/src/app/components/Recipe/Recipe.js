import Styles from "./Recipe.module.scss";

export default function Recipe(props){
    return(
        <div className={Styles.recipe}>
            <img className={Styles.image} 
                src={props.src}
                width={'100%'}
                height={'auto'}
                alt={props.alt}
            />

            <div className={Styles.text}>
                <h2 className={Styles.recipe__name}>
                    {props.name}
                </h2>

                <h3 className={Styles.recipe__category}>
                    {props.category}
                </h3>
            </div>
        </div>
    );
}