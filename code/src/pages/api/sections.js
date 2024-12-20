import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const uri = "mongodb://127.0.0.1:27017"; 
  const dbName = "recipes"; 

  if (req.method === "POST") {
    const { sectionName } = req.body;  

    if (!sectionName) {
      return res.status(400).json({ error: "Section name is required" });
    }

    try {
      const client = await MongoClient.connect(uri); 
      const db = client.db(dbName); 
      const collection = db.collection("sections"); 

      const result = await collection.insertOne({
        name: sectionName,  
        recipes: []  
      });

      res.status(201).json({ message: "Section created", data: result });

      client.close();  
    } catch (error) {
      console.error("Error creating section:", error);
      res.status(500).json({ error: "Failed to create section" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });  
  }
}
