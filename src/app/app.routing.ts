// Leccion 18-57
// ------------------------------------------------------------------

// IMPORTS:
// Módulo que permite cargar como servicios cosas del router:
import { ModuleWithProviders } from "@angular/core";

// Clases y librerías del router:
import { Routes, RouterModule } from "@angular/router";

// Componentes propios de nuestra aplicación:
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { Error404Component } from "./components/error404/error404.component";


// ------------------------------------------------------------------
// DEFINIR RUTAS en un Array JSON:
const appRoutes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'inicio', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegisterComponent},
  // IMPORTANTE: ** indica cualquier otra ruta que NO esté definida arriba:
  {path: '**', component: Error404Component} // Mostrará 404.
]
// ------------------------------------------------------------------
// EXPORTAR CONFIGURACIÓN para ser usada en "app.module":
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);
export const appRoutingProviders: any[] = [];