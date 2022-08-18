import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { actor, category, film, language } from './film/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private myhttp:HttpClient) { }
  filmurl:string='https://localhost:44321/api/Films';
  actorurl:string='https://localhost:44321/api/Actors';
  languageurl:string='https://localhost:44321/api/Languages';
  categoryurl:string='https://localhost:44321/api/Categories';
  listFilms:film[]=[];
  listActors:actor[]=[];
  listLanguage:language[]=[];
  listCategory:category[]=[];

  filmdata:film=new film();

  saveFilm()
  {
    return this.myhttp.post(this.filmurl,this.filmdata);
  }
  updateFilm()
  {
    return this.myhttp.put(`${this.filmurl}/${this.filmdata.FilmId}` ,this.filmdata);
  }
  getFilm():Observable<film[]>
  {
    return this.myhttp.get<film[]>(this.filmurl);
  }
  getActors():Observable<actor[]>
  {
    return this.myhttp.get<actor[]>(this.actorurl);
  }
  getLanguages():Observable<language[]>
  {
    return this.myhttp.get<language[]>(this.languageurl);
  }
  getCategories():Observable<category[]>
  {
    return this.myhttp.get<category[]>(this.categoryurl);
  }
  deleteFilm(FilmId:number)
  {
    return this.myhttp.delete(`${this.filmurl}/${FilmId}`);
  }
 }
