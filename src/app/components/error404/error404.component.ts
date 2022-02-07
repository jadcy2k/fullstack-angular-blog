import { Component, OnInit } from '@angular/core';

// Leccion 18-58:
// El COMPONENTE tendrá la siguiente definición:
@Component({
  // Qué etiqueta se usará para representarlo: "<login></login>"
  selector: 'error404',
  // Qué vista tenrá la plantilla:
  templateUrl: './error404.component.html',
  // Qué estilos usaremos:
  styleUrls: ['./error404.component.less']
})
// ------------------------------------------------------------------


// Clase principal del componente:
export class Error404Component implements OnInit {

  // Podemos definir las variables públicas que se podrán vincular (BINDINGS) a la vista:
  // En la plantilla HTML la podremos usar: {{page_title}}
  public page_title: string;

  constructor() { 
    // Damos valor a las variables anteriores:
    this.page_title = "Error 404.";
  }

  // ngOnInit es lo primero que se va a ejecutar cuando se cargue el componente:
  ngOnInit(): void {
    console.log("++ Componente 404 cargado.");
  }

}
