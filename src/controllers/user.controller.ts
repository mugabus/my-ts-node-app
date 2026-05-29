
import { Request,Response } from "express";
import { addUser,getAllUsers } from "../services/user.service";

export function createUser(req:Request,res:Response){
    const user=addUser(req.body);
    res.json(user)
}
export function fecthUser(req:Request,res:Response){
    res.json(getAllUsers());
}