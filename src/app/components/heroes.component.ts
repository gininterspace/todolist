import {Component, OnInit} from '@angular/core';
import {Hero} from  "../ts/heroes";
import {HeroService} from "../services/hero.service";

@Component({
  selector: "my-heroes",
  templateUrl: "../template/heroes.component.html",
  styleUrls: ["../assets/css/task-detail.component.css"]
})

export class HeroesComponent implements OnInit{

  selectedHero:Hero;
  heroes:Hero[];
  ngOnInit():void{
    this.getHero();
  }
  constructor(private heroService:HeroService){}

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
  }
  getHero():void{
    this.heroService.getHeroes().then(heroes =>this.heroes = heroes);
  }

}
