import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

export class Hero {
  id: number;
  name: String;
}

@Component({
  selector: 'my-heroes',
  templateUrl:'app/heroes.component.html',
  styleUrls: ['app/heroes.component.css']
})

export class HeroesComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes : Hero[];
  constructor(private router: Router, private heroService: HeroService) {}

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
