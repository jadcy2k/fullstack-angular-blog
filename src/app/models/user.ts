/**
 * Leccion 17-53
 * MODELO "USER" (Igual que en el tutorial 01-TUTORIAL-API-LARAVEL") 
 * nos servirá para crear objetos que conecten con la BD ya creada. 
 */

// En TypeScript las clases se podrán utilizar en otros archivos de Angular:
export class User {

  // Se empieza con un constructor con todas las propiedades:
  // Typescript permite definir las variables dentro del constructor en lugar de
  // definirlas fuera e iniciarlas dentro del propio constructor. Ahorra tiempo.

  // En nuestro caso, agregamos los campos de la BD como propiedades.
  // De forma que podremos crear objetos de ese modelo y asignar valores a esas propiedades.
  // Ese objeto se podrá, por ejemplo, convertor a JSON y enviarlo a la API para ejecutar métodos, etc..

  constructor (
    public id: number,
    public name: string,
    public surname: string,
    public role: string,
    public email: string,
    public password: string,
    public description: string,
    public image: string
  ){};
}