import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/proyectos';
import { ProyectosService } from 'src/app/proyectos.service';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {

proyectos:Proyectos = new Proyectos();

  constructor(private proyectosService:ProyectosService,private router:Router) { }

  ngOnInit(): void {

  }

  postProyectos(){
    this.proyectosService.agregarProyectos(this.proyectos).subscribe(data =>{
      this.irAProyectos();
      console.log(data);

    },error => console.log(error));
  }

  irAProyectos(){
    this.router.navigate(['/proyectos']);
  }

  onSubmit(){
    console.log(this.proyectos);
    this.postProyectos();
  }

}
