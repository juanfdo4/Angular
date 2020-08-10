import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroes} from '../../services/heroes.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
heroes:Heroes[]=[];

  constructor(private _heroesServices:HeroesService, private _router:Router) { }

  ngOnInit(): void {
  this.heroes=this._heroesServices.getHeoues();
  console.log(this.heroes);

  }
  verHeroe(name:string){
    this._router.navigate(['/heroe', name]);
  }

}



