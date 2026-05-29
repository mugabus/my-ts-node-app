import { User } from "../models/User";
import { users } from "../database/user.storage";


export function addUser(user:User):void{
   let exist =users.some((user)=>user.id==user.id);
   if(exist){
    console.log("user exist already");
    return;
   }
   users.push(user);
  }

  export function getAllUsers():void{
    users.forEach(users => {
        console.log(users);
    });
  }