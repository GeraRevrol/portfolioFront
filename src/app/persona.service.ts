import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private persoURL = "http://localhost:9090/personas";

  constructor(private httpClient: HttpClient) { }

  verPersona(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(this.persoURL + '/ver');
  }
  // metodo para ver el id de Persona
  verIdPersona(idPersona: number): Observable<Persona> {
    return this.httpClient.get<Persona>(this.persoURL + `/ver/${idPersona}`);
  }

  // metodo para editar Persona
  editarPersona(idPersona: number, persona: Persona): Observable<any> {
    return this.httpClient.put<any>(this.persoURL + `/editar/${idPersona}`, persona);
  }

}
