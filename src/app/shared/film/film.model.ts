export class film
 {
    FilmId:number=0;
    Title:string='';
    Description: string='';
    Releaseyear: any;
    Actors: number;
    Language: number=0;
    Runtime: number;
    Rating:number;
    Category: number=0;
 }

 export class actor
 {
    ActorId:number=0;
    Firstname:string='';
    Lastname: string='';
    Gender: string='male';
    DOB: any;
 }

 export class language
 {
    LanguageId:number=0;
    Language:string='';
 }

 export class category
 {
    CategoryId:number=0;
    Category:string='';
 }


