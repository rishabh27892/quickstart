import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    template: `
        <div *ngIf="hero">
            <h2>{{hero.name}} details!</h2>                          <!--Second Heading, hero-object, name-attribute--> 
            <div><label>id: </label>{{hero.id}}</div> 
            <div>
                <label>name: </label>
                <input [(ngModel)]="hero.name" placeholder="name"> 
	                                                                <!--[(ngModel)]-Angular syntax to bind SelectedHero.name to textbox -->
            </div>
        </div> 
    `
})
export class HeroDetailComponent {
   @Input() hero: Hero;


}