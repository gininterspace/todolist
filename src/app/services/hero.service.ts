import {Injectable} from "@angular/core";
import {Hero} from "../ts/heroes";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
/**
 * Created by n_ngo on 2017/05/01.
 */

@Injectable()
export class HeroService{
  private heroesUrl = "api/heroes123";
  constructor(private http:Http){}

  getHeroes():Promise<Hero[]>{
      return this.http.get(this.heroesUrl).toPromise().then(response => response.json().data as Hero[]).catch(this.handleError);
    }
    getDelayHeroes():Promise<Hero[]>{
      return new Promise(resolve=>{
        setTimeout(()=>resolve(this.getHeroes()),1000);
      })
    }
    getHero(id:number): Promise<Hero>{
      //return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
      const url = `${this.heroesUrl}/${id}`;
      return this.http.get(url).toPromise().then(response => response.json().data as Hero).catch(this.handleError)
    }

    private handleError(error: any): Promise<never>{
      console.error("An Error occurred", error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

}
