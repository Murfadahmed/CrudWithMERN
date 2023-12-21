import express from "express";
import { addUserController } from "../Controllers/userController.js";

const addUser = express.Router();

addUser.post("/add",addUserController);

export default addUser;
