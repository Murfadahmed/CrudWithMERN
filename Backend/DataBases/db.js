import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
//err if change name
const password = process.env.DB_PASSWORD;
const URL = `mongodb+srv://malikmurfad361:${password}@merncrud.dy6teqs.mongodb.net/`;
const Conection = async () => {
  try {
    await mongoose.connect(URL);
    // useUnifiedTopology: true,
    // useUnifiedParser :true
    console.log("data base connected");
  } catch (error) {
    console.log("error in database db.js in conection function", error);
  }
};

export default Conection;
