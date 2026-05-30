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

 export function getAllUsers(): User[] {
    return users;
}
export function getUserById( id: number): User | undefined {
    return users.find((user) => user.id === id); 
}
export function updateUser(id:number,updateData:Partial<User>):void{
    const user= users.find((user)=>user.id===id);
    if(!user){
        console.log("user doesnot exits");
        return;
    }
    Object.assign(id,updateData);
}

export function deleteUser(id:number): User| undefined{
    const index=users.findIndex((user)=>user.id ===id);
    if(index===-1){
        console.log("user doesnot already");
        return undefined;
    }
    let deleteUser= users[index];
    users.splice(index,1);
}