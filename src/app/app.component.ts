import {Component, OnInit} from '@angular/core';
import listOfHeros from 'microfront-common/heros.json';
import {HeroModel} from 'microfront-common/model/hero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public title = 'microfront-dashboard';
    public heroes: HeroModel[] = [];
    public selectedHero: HeroModel;

    public ngOnInit() {
        this.heroes = (listOfHeros || []).map((item) => new HeroModel(item));
    }

    public handleClick(hero) {
        this.selectedHero = hero;
    }
}
