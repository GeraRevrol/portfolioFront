import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from '../proyectos';
import { ProyectosService } from '../proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

proyectos:Proyectos[];

  constructor(private ProyectosService:ProyectosService, private router:Router) { }

  ngOnInit(): void {
    this.getProyectos();
  }

  private getProyectos(){
    this.ProyectosService.verProyectos().subscribe(data =>{
      this.proyectos = data;
    });
  }

  borrarProyectos(idProyectos?: number){
    if(idProyectos !=undefined){
      this.ProyectosService.borrarProyectos(idProyectos).subscribe(data =>{
        this.getProyectos();
      }, error => {

      }
     )
    }
  }

}
