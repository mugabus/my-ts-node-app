
import { Request,Response } from "express";
import { addUser,deleteUser,getAllUsers,getUserById, updateUser } from "../services/user.service";

export function createUser(req:Request,res:Response){
    const user=addUser(req.body);
    res.json(user)
}
export function fecthUsers(req:Request,res:Response){
    res.json(getAllUsers());
}

export function fecthUserById(req:Request,res:Response){
    const user= getUserById(Number(req.params.id));
    if (!user){
        return res.status(404).json({message:"user doesnt exist"});
    }
}

export function editUser(req:Request,res:Response){
    const updated=updateUser(Number(req.params.id),req.body);
    res.json(updated)

}
export function removeUser(req:Request,res:Response){
    const deleted= deleteUser(Number(req.params.id));
    res.json(deleted)
}