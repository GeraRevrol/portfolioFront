import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from './educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  //url para ver la educacion
  private eduURL = "http://localhost:9090/educacion";
 

  constructor(private httpClient : HttpClient) { }

  // metodo para ver Educacion
  verEducacion():Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.eduURL + '/ver');
  }

  // metodo para agregar Educacion
  agregarEducacion(educacion:Educacion) : Observable<any>{
    return this.httpClient.post<any>(this.eduURL + '/new',educacion);
  }

  // metodo para ver el id de Educacion
  verIdEducacion(idEducacion: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.eduURL + `/ver/${idEducacion}`);
  }

  // metodo para editar educacion
  editarEducacion(idEducacion: number, educacion:Educacion): Observable<any>{
    return this.httpClient.put<any>(this.eduURL + `/editar/${idEducacion}`,educacion);
  }

  //metodo para borrar educacion
  borrarEducacion(idEducacion: number): Observable<any>{
    return this.httpClient.delete<any>(this.eduURL + `/delete/${idEducacion}`);
  }

}
