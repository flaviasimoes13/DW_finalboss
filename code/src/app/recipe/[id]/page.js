import { MongoClient } from "mongodb";

export default async function RecipePage({ params }) {
  const { id } = await params; // Resolve `params` Promise

  const uri = "mongodb://127.0.0.1:27017";
  const dbName = "recipes";

  let recipe = null;

  try {
    const client = await MongoClient.connect(uri);
    const db = client.db(dbName);

    const numericId = parseInt(id, 10); // Convert `id` to number if needed
    recipe = await db.collection("allrecipes").findOne({ _id: numericId });

    client.close();
  } catch (error) {
    console.error("Error fetching recipe:", error.message);
  }

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div>
      <h1>{recipe.recipe_name}</h1>
      <img src={recipe.image_link} alt={recipe.recipe_name} />
      <p>{recipe.description}</p>
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.split(",").map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <p>{recipe.instructions}</p>
    </div>
  );
}
