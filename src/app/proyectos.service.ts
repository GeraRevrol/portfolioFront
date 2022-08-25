import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from './proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  //url para ver los proyectos
  private proURL = "http://localhost:9090/proyectos";


  constructor(private httpClient : HttpClient) { }

  //metodo para ver Proyectos
  verProyectos(): Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.proURL + '/ver');
  }

  // metodo para agregar Proyectos
  agregarProyectos(proyectos:Proyectos): Observable<any>{
    return this.httpClient.post<any>(this.proURL + '/new', proyectos);
  }

  // metodo para ver el id de Proyectos
  verIdProyectos(idProyectos: number): Observable<Proyectos>{
    return this.httpClient.get<Proyectos>(this.proURL + `/ver/${idProyectos}`);
  }

  // metodo para editar Proyectos
  editarProyectos(idProyectos: number, proyectos:Proyectos): Observable<any>{
    return this.httpClient.put<any>(this.proURL + `/editar/${idProyectos}`,proyectos);
  }

  // metodo para borrar Proyectos
  borrarProyectos(idProyectos: number): Observable<any>{
    return this.httpClient.delete<any>(this.proURL + `/delete/${idProyectos}`);
  }
  
}
