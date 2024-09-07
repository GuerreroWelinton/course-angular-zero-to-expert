import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  //* Los getters son una propiedad que se ve como un método
  get capitalizedName(): string {
    return 'Hola Mundo';
  }
}
