export interface ToDo {
  idTask: string;
  titulo: string;
  descripcion: string;
  estado: ToDoStatus;
  fechaCreacion: Date;
  fechaInicio?: string;
  fechaFinalizacion?: string;
  prioridad:ToDoPrioridad;
  responsable?:string;
}


export interface MiembrosVito{
  nombreUsuario:string;
  apellidoUsuario:string;
}


