/*      CREACION DEL MODELO  

    El modelo representa a un objeto o a un documento de la bd. Sera una entidad.
    La entidad que estamos usando es project

*/

export class Project{

    constructor(
        public _id: string,
        public name: string,
        public description: string,
        public category: string,
        public year: number,
        public langs: string,
        public image: string
    ){}

}