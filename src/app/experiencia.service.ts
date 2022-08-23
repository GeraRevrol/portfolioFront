import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from './experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {


  // Url para ver la experiencia
  private expURL = "http://localhost:9090/experiencia";

  constructor(private httpClient : HttpClient) { }

  //metodo para ver Experiencia
  verExperiencia():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.expURL + '/ver');
  }

  // metodo para agregar Experiencia
  agregarExperiencia(experiencia:Experiencia): Observable<any>{
    return this.httpClient.post<any>(this.expURL + '/new',experiencia);
  }

  //metodo para ver el id de Experiencia 
  verIdExperiencia(idExperiencia: number): Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.expURL + `/ver/${idExperiencia}`);
  }

  // metodo para editar Experiencia
  editarExperiencia(idExperiencia: number, experiencia:Experiencia): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `/editar/${idExperiencia}`,experiencia);
  }

  // metodo para borrar Experiencia
  borrarExperiencia(idExperiencia: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `/delete/${idExperiencia}`);
  }

}
