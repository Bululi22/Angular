import { Component } from '@angular/core';


interface Personaje {
  nombre: String;
  poder: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  nuevo: Personaje = {
    nombre : "",
    poder: 0
  }

  // cambiarNombre( event: any){
  //   console.log(event)
  // }

  agregar(){
  if (this.nuevo.nombre.trim().length === 0){
    return;
  }

    console.log(this.nuevo);
  }


}
