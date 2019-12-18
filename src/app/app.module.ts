import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/* Importamos el HttpClientModule para hacer las peticiones Ajax con HttpClient */
import { HttpClientModule } from '@angular/common/http';

/* Importamos el FormsModule para usar formularios y el two way data binding */
import { FormsModule } from '@angular/forms';

/* Importamos las constantes del fichero app.routing.ts que contienen las rutas del proyecto */
import { appRoutingProviders, routing } from './app.routing';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    /* Cargamos la constante routing del fichero app.routing ya que es un modulo */
    routing,
    /* Cargamos los modulos HttpClientModule y FormsModule */
    HttpClientModule,
    FormsModule
  ],
  providers: [
    /* Cargamos la constante appRoutingProviders del fichero app.routing ya que es un servicio */
       appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
