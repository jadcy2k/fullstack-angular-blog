// SERVICIO PARA "USER":
// Importamos todo lo necesario:
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
// MODELO:
import { User } from "../models/user";
// VARIABLES GLOBALES (Leccion 19-64)
import { global } from "./global";

/**
 * Definir la clase del servicio "UserService" con el decorador 
 * @Injectable() para que pueda ser utilizado como servicio. 
 * En el constructor cargamos la propiedad de HttpClient (_http)
 * Como variable pública importaremos la "global.apiUrl" como "url".
 */
@Injectable()
export class UserService {
  public url: string;

  constructor (
    public _http: HttpClient
  ){
    // nos traemos del archivo "global" la propiedad "ApiUrl":
    this.url = global.apiUrl;
  }

  // Test para probar el servicio:
  test () {
    return "hola desde el UserService!!";
  }

  // Método "REGISTER" que enviamos un objeto "user" y 
  // devuelve un "Observable" con la respuesta del API (cualquier cosa = any).
  register (user: User): Observable<any> {
    // El objeto "user" deberá convertirse a JSON para ser enviado:
    let json = JSON.stringify(user);
    // Definimos "params" que es lo que enviamos:
    let params = 'json=' + json;
    // Las cabeceras http del envío (similares a las de POSTMAN)
    let headers = new HttpHeaders().set ('Content-Type', 'application/x-www-form-urlencoded');
    // Finalmente hacemos la petición POST:
    return this._http.post(
      this.url + 'register',
      params,
      {headers:headers}
    )

  }

}