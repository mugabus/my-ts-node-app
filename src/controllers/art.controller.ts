
import { Request,Response } from "express";
import { addArt, deleteArt, getAllArts, getArtById, updateArt } from "../services/art.service";


export function createArt(req:Request,res:Response){
    const art=addArt(req.body);
    res.json(art);
}

export function fecthArts(req:Request,res:Response){
    res.json(getAllArts());
}

export function fetchArtById(req:Request,res:Response){
    const art=getArtById(Number(req.params.id));
    if(!art){
        return res.status(404).json({message:"this art not found"});
    }
}

export function editArt(req:Request,res:Response){
    const updated=updateArt(Number(req.params.id),req.body);
    res.json(updated);
}

export function removeArt(req:Request,res:Response){
    const deleted=deleteArt(Number(req.params.id));
    res.json(deleted);
}