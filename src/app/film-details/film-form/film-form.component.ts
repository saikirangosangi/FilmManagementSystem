import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FilmService } from 'src/app/shared/film.service';

@Component({
  selector: 'app-film-form',
  templateUrl: './film-form.component.html',
  styleUrls: ['./film-form.component.css']
})
export class FilmFormComponent implements OnInit {

  constructor(public Fservice:FilmService) { }

  ngOnInit(): void {
  this.Fservice.getActors().subscribe(data=> {
      this.Fservice.listActors=data;
  });
  this.Fservice.getLanguages().subscribe(data=> {
    this.Fservice.listLanguage=data;
  });
  this.Fservice.getCategories().subscribe(data=> {
  this.Fservice.listCategory=data;
  });
  }

  submit(form:NgForm)
  {

  }

}
