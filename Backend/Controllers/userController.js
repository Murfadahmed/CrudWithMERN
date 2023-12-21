// import { response } from "express"
import User from "../Models/user-schema.js"

export const addUserController = async (req, res) => {
    const user = req.body
    const newUser = new User(user)

    try {
        // console.log(newUser);
        console.log(req.body);
        await newUser.save()
        res.status(201)
    } catch (error) {
        res.status(401).json("yahn controller may line 12 error aya hai",{ message: error.message })
    }
}   