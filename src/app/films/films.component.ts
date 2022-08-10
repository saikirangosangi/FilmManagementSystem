import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {
  showadd!:boolean;
  showupdate!:boolean;

  formsValue!:FormGroup

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formsValue=this.formBuilder.group({
      title:[],
      description:[],
      releaseYear:[],
      language:[],
      runtime:[],
      rating:[],
      category:[],

    })
  }

  Add(){
    this.showadd=true;
    this.showupdate=false;
  }

  Update(){
    this.showadd=false;
    this.showupdate=true;
  }

}
