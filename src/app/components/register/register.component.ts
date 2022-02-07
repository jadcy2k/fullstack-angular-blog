import { Component, OnInit } from '@angular/core';
// Se deberá manipular datos de usuario, por tanto importamos su modelo:
import { User } from 'src/app/models/user';
// Importamos el UserService (Leccion 19-63):
import { UserService } from 'src/app/services/user.service';

// Leccion 17-56:
// El COMPONENTE tendrá la siguiente definición:
@Component({
  // Qué etiqueta se usará para representarlo: "<register></register>"
  selector: 'register',
  // Qué vista tendrá la plantilla:
  templateUrl: './register.component.html',
  // Estilos:
  styleUrls: ['./register.component.less'],
  // Servicios (Leccion 19-63):
  providers: [UserService]
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
  constructor(
    // Instanciamos el UserService (leccion 19-63):
    private _userService: UserService
  ) { 
    // Damos valor a las variables anteriores:
    this.page_title = "Por favor, regístrate";

    //Inicializamos el "user" simplemente iniciando sus 8 propiedades (valores por defecto):    
    this.user = new User(1, '', '', 'ROLE_USER', '', '', '', '');
  }

  ngOnInit(): void {
    console.log("++ Componente REGISTER cargado.");
    // Prueba del UserService:
    console.log("++ ",this._userService.test());
  }

  onSubmit (form:any){
    // Enviamos el "user" al servicio:
    this._userService.register(this.user).subscribe(
      // Ver Respuesta o error:
      response => {
        console.log(response);
      },
      error => {
        console.log(<any>error);
      },
    );
    console.log("++ ", this.user);    
    // Resetear el formulario:
    form.reset();
  }

}