import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from './educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  //url para ver la educacion
  private verURL = "http://localhost:9090/ver/educacion";
  private newURL = "http://localhost:9090/new/educacion";

  constructor(private httpClient : HttpClient) { }

  // metodo para ver Educacion
  verEducacion():Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(`${this.verURL}`);
  }

  // metodo para agregar Educacion
  agregarEducacion(educacion:Educacion) : Observable<Object>{
    return this.httpClient.post(`${this.newURL}`,educacion);
  }

}
