import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const uri = "mongodb://127.0.0.1:27017";  // MongoDB URI
  const dbName = "recipes";  // Your database name

  if (req.method === "POST") {
    const { sectionName } = req.body;  // Get the section name from the request body

    // Validate that the section name is provided
    if (!sectionName) {
      return res.status(400).json({ error: "Section name is required" });
    }

    try {
      const client = await MongoClient.connect(uri);  // Connect to MongoDB
      const db = client.db(dbName);  // Get the database
      const collection = db.collection("sections");  // Get the "sections" collection

      // Insert the new section with an empty "recipes" array
      const result = await collection.insertOne({
        name: sectionName,  // The name of the new section
        recipes: []  // Initialize the recipes array as empty
      });

      // Respond with a success message
      res.status(201).json({ message: "Section created", data: result });

      client.close();  // Close the MongoDB connection
    } catch (error) {
      console.error("Error creating section:", error);
      res.status(500).json({ error: "Failed to create section" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });  // Handle methods other than POST
  }
}
