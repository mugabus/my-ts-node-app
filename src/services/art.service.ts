import { arts } from "../database/art.storage";
import { Art } from "../models/Art";


export function addArt(art:Art):void{
   let exist =arts.some((art)=>art.id===art.id);
   if(exist){
      console.log("this user exits already");
   } 
   arts.push(art);
}
export function getAllArts(): Art[]{
    return arts;
}
export function getArtById(id:number): Art |undefined{
    return arts.find((art)=>art.id ===id);
}

export function updateArt(id:number,updateData:Partial<Art>):void {
    let art=arts.find((art)=>art.id ===id);
    if(!art){
        console.log("this art doesnot exits");
        return;
    }
    Object.assign(id,updateData);
}

export function deleteArt(id:number): Art |undefined{
    let index=arts.findIndex((art)=>art.id===id);

    if(index==-1){
        console.log("the art doesnot exist");
        return undefined;
    }
    let deleteArt= arts[index];
    arts.splice(index,1);

}