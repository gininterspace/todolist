import {Component, OnInit} from "@angular/core";
import {Hero} from "../ts/heroes";
import {HeroService} from "../services/hero.service";
/**
 * Created by n_ngo on 2017/05/01.
 */

@Component({
  selector:"my-dashboard",
  templateUrl: "../template/dashboard.component.html"
})
export class DashBoardComponent implements OnInit{
  heroes: Hero[];
  constructor (private heroService: HeroService){}

  ngOnInit():void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(0,4));
  }



}
