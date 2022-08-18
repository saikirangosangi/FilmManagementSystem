import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FilmService } from '../shared/film.service';
import { film } from '../shared/film/film.model';


@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  constructor(public filmService:FilmService, public datepipe:DatePipe) { }

  ngOnInit(): void {
    this.filmService.getFilm().subscribe(data=>{
      this.filmService.listFilms=data;
    });
    this.filmService.getActors().subscribe(data=>{
      this.filmService.listActors=data;
    });
    this.filmService.getLanguages().subscribe(data=>{
      this.filmService.listLanguage=data;
    });
    this.filmService.getCategories().subscribe(data=>{
      this.filmService.listCategory=data;
    });
  }

  populateFilm(SelectedFilms:film)
  {
    let df=this.datepipe.transform(SelectedFilms.Releaseyear,'yyyy-MM-dd');
    SelectedFilms.Releaseyear=df;
    this.filmService.filmdata=SelectedFilms;
  }

  delete(FilmId:number)
  {
    if(confirm('Are you really want to delete this record?'))
    {
      this.filmService.deleteFilm(FilmId).subscribe(data=> {
        this.filmService.getFilm().subscribe(data=>{
          this.filmService.listFilms=data;
        });
      },
      err=>{
      });
    }
  }
 }
