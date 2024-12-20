import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const uri = "mongodb://127.0.0.1:27017";
  const dbName = "recipes"; 

  if (req.method === "GET") {
    try {
      const client = await MongoClient.connect(uri);
      const db = client.db(dbName);

      const recipes = await db.collection("allrecipes").find().toArray();
      const categories = await db.collection("categories").find().toArray();

      const categoryMap = categories.reduce((map, category) => {
        map[category._id] = category.name;
        return map;
      }, {});

      const enrichedRecipes = recipes.map((recipe) => ({
        ...recipe,
        category_name: categoryMap[recipe.category] || "Unknown",
      }));

      res.status(200).json(enrichedRecipes); 
      client.close();
    } catch (error) {
      console.error("Error fetching recipes:", error.message);
      res.status(500).json({ message: "Failed to fetch recipes" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
