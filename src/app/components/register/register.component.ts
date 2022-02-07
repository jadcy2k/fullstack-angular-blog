import { Component, OnInit } from '@angular/core';
// Se deberá manipular datos de usuario, por tanto importamos su modelo:
import { User } from 'src/app/models/user';

// Leccion 17-56:
// El COMPONENTE tendrá la siguiente definición:
@Component({
  // Qué etiqueta se usará para representarlo: "<register></register>"
  selector: 'register',
  // Qué vista tendrá la plantilla:
  templateUrl: './register.component.html',
  // Estilos:
  styleUrls: ['./register.component.less']
})
// ------------------------------------------------------------------

// Claase principal del componente:
export class RegisterComponent implements OnInit {

  // Podemos definir las variables públicas que se podrán vincular (BINDINGS) a la vista:
  // En la plantilla HTML la podremos usar: {{page_title}}
  public page_title: string;
  // (Leccion 18-61) Creamos un objeto USER que manipulará las propiedades definidas en el Modelo:
  public user: User;
  /** Recordemos qué 8 propiedades tiene:
   *  public id: number,
      public name: string,
      public surname: string,
      public role: string,
      public email: string,
      public password: string,
      public description: string,
      public image: string
  */
  constructor() { 
    // Damos valor a las variables anteriores:
    this.page_title = "Por favor, regístrate";

    //Inicializamos el "user" simplemente iniciando sus 8 propiedades (valores por defecto):    
    this.user = new User(1, '', '', 'ROLE_USER', '', '', '', '');
  }

  ngOnInit(): void {
    console.log("++ Componente REGISTER cargado.")
  }

  onSubmit (form:any){
    console.log("++ ", this.user);
  }

}