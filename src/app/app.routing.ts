

                /* ESTE ARCHIVO SE ENCARGARA DE CONTENER LAS RUTAS DEL PROYECTO */

/* iMPORTAMOS LOS MODULOS DEL ROUTER */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*  IMPORTAMOS LOS COMPONENTES */
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';

/* DEFINIMOS LAS RUTAS */
    //Creamos una constante appRoutes, será un array de tipo Routes
        const appRoutes: Routes = [
            {path: '', component: AboutComponent},
            {path: 'sobre-mi', component: AboutComponent},
            {path: 'proyectos', component: ProjectsComponent},
            {path: 'crear-proyecto', component: CreateComponent},
            {path: 'contacto', component: ContactComponent},

            /* Creamos la ruta 404, pa que cuando no cargue ningun componente, o la ruta 
            especificada no sea la correcta, cons cargue el componente ErrorComponent */
            {path: '**', component: ErrorComponent}

        ];

/* EXPORTAMOS LA CONFIGURACION DE LAS RUTAS - estas dos constantes se deben importar en app.module*/
    export const appRoutingProviders: any[] = [];
        /* ModuleWithProviders llama al RouterModule y este ocupa el metodo forRoot que carga
           nuestra configuracion de rutas en el router de Angular y hace que funcionen  */
            export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

