import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from '../experiencia';
import { ExperienciaService } from '../experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

experiencia:Experiencia[];

  constructor(private ExperienciaService:ExperienciaService, private router:Router) { }

  ngOnInit(): void {
    this.getExperiencia();
  }

  private getExperiencia(){
    this.ExperienciaService.verExperiencia().subscribe(data =>{
      this.experiencia = data;
    });
  }

  borrarExperiencia(idExperiencia?: number){
    if(idExperiencia != undefined){
      this.ExperienciaService.borrarExperiencia(idExperiencia).subscribe( data => {
        this.getExperiencia();
      },error => { 

       }
      )
    }
  }
}
