export enum ArtType{
    DRAW,
    DANCE,
    SLAM,
    SING
}

export interface Art{
    id:number;
    name:string;
    image:string;
    description:string;
    category:ArtType;
    artistId:number;
    createdAt:Date;
    competitionId: number;
}