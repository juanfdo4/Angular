import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroes} from '../../services/heroes.service';
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-heroe-search',
  templateUrl: './heroe-search.component.html',
  styles: [
  ]
})
export class HeroeSearchComponent implements OnInit {

  heroes:Heroes[]=[];

  constructor(private _heroesServices:HeroesService, private _router:Router, private _activateRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this._activateRoute.params.subscribe(params => {
       this.heroes = this._heroesServices.searchHeroe(params['heroe']);
       console.log(this.heroes);

    })
   }


   verHeroe(name:string){
    this._router.navigate(['/heroe', name]);
  }

}
