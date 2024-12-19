import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const uri = "mongodb://127.0.0.1:27017"; // Replace with your MongoDB connection string
  const dbName = "recipes"; // Replace with your database name

  if (req.method === "GET") {
    try {
      const client = await MongoClient.connect(uri);
      const db = client.db(dbName);

      const categories = await db.collection("categories").find().toArray();

      res.status(200).json(categories); // Only send categories
      client.close();
    } catch (error) {
      console.error("Error fetching categories:", error.message);
      res.status(500).json({ message: "Failed to fetch categories" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: "Method Not Allowed" });
  }
}