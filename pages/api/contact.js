import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }

    // store data in a database

    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_cluster}.er2t4.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`
      );
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Could not connect to database" });
      return;
    }

    try {
      const result = await client
        .db()
        .collection("messages")
        .insertOne(newMessage);

      newMessage.id = result.insertedId;
    } catch (e) {
      console.log(e);
      res.status(500).json({ message: "Storing message to db failed" });
      return;
    } finally {
      await client.close();
    }

    res.status(201).json({
      message: "Message stored successfully",
      storedMessage: newMessage,
    });
  }
}
