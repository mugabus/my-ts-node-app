import { Competition, CompetitionStatus } from "../models/Competition";
import {competitions} from "../database/competition.storage"




export function addCompetion(competition:Competition):Competition |null{
    let exist= competitions.some((competition)=>competition.id===competition.id);
    if(exist){
        console.log("competition exist already")
        return null;
    }
    competitions.push(competition);
    return competition;
}

export function getAllCompetitions():Competition []{
    return competitions;
}

export function getCompetitionById(id:number):Competition |undefined{
    return competitions.find((competition)=>competition.id===id);

}

export function updateCompetition(id:number,updateData:Partial<Competition>):Competition |null{
    let competition=competitions.find((competition)=>competition.id===id);
    if(!competition){
        console.log("competition doensot exist");
        return null;
    }
    Object.assign(competition,updateData);
    return competition;
}

export function deleteCompetition(id:number):Competition |undefined{
    let index=competitions.findIndex((competition)=>competition.id===id);
    if(index===-1){
        console.log("competition doensot exist");
        return undefined;
    }
    return competitions.splice(index,1)[0];
}

export function getCompetitionsByStatus(status:string):Competition[]{
    return competitions.filter((competition)=>competition.status.toString()===status);
}

export function getCompetitionsByDateRange(startDate:Date,endDate:Date):Competition[]{
    return competitions.filter((competition)=>competition.startDate>startDate && competition.endDate<endDate);
}

export function closeCompetition(
    id: number
): Competition | undefined {

    const competition = getCompetitionById(id);

    if (!competition) {
        return undefined;
    }

    competition.status = CompetitionStatus.CLOSED;

    return competition;
}

export function canVote(
    competitionId: number
): boolean {

    const competition = getCompetitionById(
        competitionId
    );

    if (!competition) {
        return false;
    }

    return competition.status === CompetitionStatus.OPEN;
}