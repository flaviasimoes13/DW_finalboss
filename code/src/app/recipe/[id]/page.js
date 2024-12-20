import { MongoClient } from "mongodb";
import Styles from "./page.module.scss";

export default async function RecipePage({ params }) {
  const { id } = await params;

  const uri = "mongodb://127.0.0.1:27017";
  const dbName = "recipes";

  let recipe = null;

  try {
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);

    const numericId = parseInt(id, 10); 
    recipe = await db.collection("allrecipes").findOne({ _id: numericId });

    client.close();
  } catch (error) {
    console.error("Error fetching recipe:", error.message);
  }

  if (!recipe) {
    return <div className={Styles.error}>Recipe not found!</div>;
  }

  return (
    <div className={Styles.container}>
      <img
        className={Styles.image}
        src={recipe.image_link}
        alt={recipe.recipe_name}
      />
      <h1 className={Styles.title}>{recipe.recipe_name}</h1>
      <p className={Styles.description}>{recipe.description}</p>
      <h3 className={Styles.sectionTitle}>Ingredients:</h3>
      <ul className={Styles.ingredientsList}>
        {recipe.ingredients.split(",").map((ingredient, index) => (
          <li key={index} className={Styles.ingredientItem}>
            {ingredient}
          </li>
        ))}
      </ul>
      <h3 className={Styles.sectionTitle}>Instructions:</h3>
      <p className={Styles.instructions}>{recipe.instructions}</p>
    </div>
  );
}