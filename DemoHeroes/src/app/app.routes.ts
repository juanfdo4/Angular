import {RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroeSearchComponent } from './components/heroe-search/heroe-search.component';

const APP_ROUTES: Routes = [
  {path:'home', component: HomeComponent},
  {path:'heroe/:name', component: HeroeComponent},
  {path:'heroes', component: HeroesComponent},
  {path:'heroesSearch/:heroe', component: HeroeSearchComponent},
  {path:'about', component: AboutComponent},
  {path:'**', pathMatch:'full', redirectTo:'home'}

]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
