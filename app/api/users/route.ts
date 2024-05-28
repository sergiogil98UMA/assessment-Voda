

const MongoClient = require("mongodb").MongoClient;

async function getUser() {
  try {
    const client = new MongoClient("mongodb://localhost:27017");

    await client.connect();
    const collection = client.db("Assessment-voda").collection("Users");
    const query = {};
    const user = await collection.find(query);
    client.close();

    const resoponse = {
        statusCode:200,
        body: JSON.stringify(user),
    }

    return (resoponse);
  } catch (error) {
    console.error("Error retrieving user:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error retrieving user" }),
    };
  }
}

module.exports = { getUser };


export default function handler(req: { method: string; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: string): void; new(): any; }; }; }) {
  console.log("nada bro");
  if (req.method === "GET") {
      getUser()
        .then((response) => {
          res.status(response.statusCode).json(response.body);
        })
        .catch((error) => {
          res.status(error.statusCode).json(error.body);
        });
}
}