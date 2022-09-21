import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/proyectos';
import { ProyectosService } from 'src/app/proyectos.service';

@Component({
  selector: 'app-editar-proyecto',
  templateUrl: './editar-proyecto.component.html',
  styleUrls: ['./editar-proyecto.component.css']
})
export class EditarProyectoComponent implements OnInit {

proyectos:Proyectos = null;

  constructor(private proyectosService:ProyectosService, private activatedRouter:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    const idProyectos = this.activatedRouter.snapshot.params['idProyectos'];
    this.proyectosService.verIdProyectos(idProyectos).subscribe(data =>{
     this.proyectos = data;
     this.openPopup();
    }, error =>{
     alert("Error al modificar proyectos");
     this.router.navigate(['']);
    }
   )
  }

  editarProyectos(){
    const idProyectos = this.activatedRouter.snapshot.params['idProyectos'];
     this.proyectosService.editarProyectos(idProyectos, this.proyectos).subscribe(data =>{
      this.irAHome();
     },error =>{
      alert("Error al modificar proyectos")
      this.irAHome();
     }
    )
  }

  onSubmit(){
    this.editarProyectos();
    console.log(this.proyectos);
  }

  irAHome() {
    this.router.navigate(['']);
  }

  displayStyle = "none";

  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
    this.irAHome();
  }
  

}
