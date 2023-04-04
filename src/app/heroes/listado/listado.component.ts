import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: String[] = ["Spiderman", "Ironman", "Hulk", "Thor"];
  heroeBorrado: String = "";


  borrarHeroes(){
    this.heroeBorrado = this.heroes.shift() || "";
  }
}
