import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {HeroesService, Heroes} from '../../services/heroes.service';




@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
  ]
})
export class HeroeComponent  {
  heroe:Heroes;
  constructor(private _activateRoute:ActivatedRoute,
              private _heroesServices:HeroesService ) {
    this._activateRoute.params.subscribe(params => {
      this.heroe = this._heroesServices.getHeroe(params['name']);
      console.log(this.heroe);

    })
   }



}
