import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// IMPORTAR "ROUTER" (Leccion 18-57)
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';

// IMPORTAR "FormModule" para trabajar con forumlarios (Leccion 18-60)
import { FormsModule } from '@angular/forms';

// Importar módulos de comunicación HTML (Leccion 19-63):
//import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  // Módulos que se usarán de forma global:
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    Error404Component
  ],
  
  imports: [
    BrowserModule,
    routing,
    appRoutingProviders,
    FormsModule,
    HttpClientModule
  ],
  
  providers: [],
  
  // Es el componente principal (home)
  bootstrap: [AppComponent] 
})
export class AppModule { }
