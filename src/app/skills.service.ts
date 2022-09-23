import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from './skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  //url para ver las skills
  private skiURL = "https://backendportfoliogera.herokuapp.com/skills";


  constructor(private httpClient : HttpClient) { }

  // metodo para ver Skills
  verSkills():Observable<Skills[]>{
    return this.httpClient.get<Skills[]>(this.skiURL + '/ver');
  }

  //metodo para agregar Skills
  agregarSkills(skills:Skills):Observable<any>{
    return this.httpClient.post<any>(this.skiURL + '/new',skills);
  }

  //metodo para ver el id de Skills
  verIdSkills(idSkills:number):Observable<Skills>{
    return this.httpClient.get<Skills>(this.skiURL + `/ver/${idSkills}`);
  }

  //metodo para editar Skills
  editarSkills(idSkills:number, skills:Skills):Observable<any>{
    return this.httpClient.put<any>(this.skiURL + `/editar/${idSkills}`,skills);
  }

  //metodo para borrar Skills
  borrarSkills(idSkills: number):Observable<any>{
    return this.httpClient.delete<any>(this.skiURL + `/delete/${idSkills}`);
  }
  
}
