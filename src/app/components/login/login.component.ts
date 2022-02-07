import { Component, OnInit } from '@angular/core';

// Leccion 17-55:
// El COMPONENTE tendrá la siguiente definición:
@Component({
  // Qué etiqueta se usará para representarlo: "<login></login>"
  selector: 'login',
  // Qué vista tenrá la plantilla:
  templateUrl: './login.component.html',
  // Qué estilos usaremos:
  styleUrls: ['./login.component.less']
})
// ------------------------------------------------------------------


// Clase principal del componente:
export class LoginComponent implements OnInit {

  // Podemos definir las variables públicas que se podrán vincular (BINDINGS) a la vista:
  // En la plantilla HTML la podremos usar: {{page_title}}
  public page_title: string;

  constructor() { 
    // Damos valor a las variables anteriores:
    this.page_title = "Hola, identifícate";
  }

  // ngOnInit es lo primero que se va a ejecutar cuando se cargue el componente:
  ngOnInit(): void {
    console.log("++ Componente LOGIN cargado.");
  }

}
