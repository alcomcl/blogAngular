import { Component, OnInit } from '@angular/core';

/* Importamos el modelo y el servicio */
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],

  /* Cargamos el servicio dentro de la propiedad providers del decorador */
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {
  // Creamos una propiedad que guardara el titulo de esta seccion
    public title: string;
  // Creamos una propiedad de tipo Project. Esto será el objeto que modificará el formulario
    public project: Project;


  constructor(
    // Creamos las propiedades del servicio
      private _projectService: ProjectService
  ) { 
      this.title ="Crear Proyecto";
    // Intanciamos el modelo Project y dejamos las propiedades vacías para luego ser llenadas por el formulario
      this.project = new Project('','','','',2019,'','');
  }

  ngOnInit() {
  }

  onSubmit(form){
    console.log(this.project);
  }

}
