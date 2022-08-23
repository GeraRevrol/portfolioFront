import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private baseURL = "http://localhost:9090/personas/ver";

  constructor(private httpClient : HttpClient) { }

  verPersona():Observable<Persona[]>{
    return this.httpClient.get<Persona[]>(`${this.baseURL}`);
  }
}
