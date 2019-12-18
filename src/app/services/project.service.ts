/* Importamos todos los modulos necesarios para crear un servicio */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/* Importamos el modelo */
import { Project } from '../models/project';

/* Importamos el fichero de configuracion global */
import { Global } from './global';

/* Decorador Injectable diremos que este será un servicio que estaremos inyectando */
@Injectable()
export class ProjectService{
    public url: string; // Aqui se guardará la url del Api

    /* Creamos el constructor y cargamos de forma privada el HttpClient que sirve 
       para las peticiones Ajax*/
    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url; // guardamos en this.url la url del json de Global
    }

    
}
