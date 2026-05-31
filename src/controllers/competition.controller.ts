
import { Request,Response } from "express";
import {addCompetition, closeCompetition, deleteCompetition, getAllCompetitions, getCompetitionById, getCompetitionsByDateRange, getCompetitionsByStatus, updateCompetition} from "../services/competition.service";

export function createCompetition(req:Request,res:Response){
   const competition=addCompetition(req.body);
   res.json(competition);
}

export function fetchCompetitions(req:Request,res:Response){
    res.json(getAllCompetitions());
}

export function fetchCompetitionById(req:Request,res:Response){
    const competition=getCompetitionById(Number(req.params.id));
    res.json(competition);
}

export function editCompetition(req:Request,res:Response){
    const updated=updateCompetition(Number(req.params.id),req.body);
    res.json(updated);
}

export function removeCompetition(req:Request,res:Response){
    const deleted=deleteCompetition(Number(req.params.id));
    res.json(deleted);
}

export function fetchCompetitionsByStatus(req:Request,res:Response){
    const status=req.query.status as string;
    const competitions=getCompetitionsByStatus(status);
    res.json(competitions);
}

export function fetchCompetitionsByDateRange(req:Request,res:Response){
    const startDtae= new Date(req.query.startDate as string);
    const endDate= new Date(req.query.endDate as string);
    const competitions=getCompetitionsByDateRange(startDtae,endDate);
    res.json(competitions);
}

export function finishCompetition(req:Request,res:Response){
    const id=Number(req.params.id);
    const closed=closeCompetition(id);
    if(!closed){
        return res.status(404).json({message:"competition not found"});
    }
    res.json(closed);
}
export function checkVotiingEligibility(req:Request,res:Response){
    
}