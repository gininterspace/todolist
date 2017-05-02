/**
 * Created by n_ngo on 2017/05/01.
 */
import {Component, Input, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import "rxjs/add/operator/switchMap";

import {Hero} from "../ts/heroes";
import {HeroService} from "../services/hero.service";



@Component({
  selector: "hero-detail",
  templateUrl: "../template/hero-detail.component.html"
})

export class HeroDetailComponent implements OnInit{
  @Input() hero: Hero;
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ){}

  ngOnInit():void{
      this.route.params.switchMap((params: Params)=>this.heroService.getHero(+params['id'])).subscribe(hero => this.hero = hero);
  }
  goBack():void{
      this.location.back();
  }

}
