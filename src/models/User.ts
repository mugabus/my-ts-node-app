
export enum UserType {
    ADMIN,
    ARTIST,
    PUBLIC,

}

export interface User{
    id:number;
    name:string;
    email:string;
    image:string;
    category:UserType
}