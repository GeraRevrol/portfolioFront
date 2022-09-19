import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/experiencia';
import { ExperienciaService } from 'src/app/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

 experiencia:Experiencia = null;

  constructor(private experienciaService:ExperienciaService,private activatedRouter:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    const idExperiencia = this.activatedRouter.snapshot.params['idExperiencia'];
    this.experienciaService.verIdExperiencia(idExperiencia).subscribe( data => {
      this.experiencia = data;
      this.openPopup();
      }, error =>{
       alert("Error al modificar experiencia");
       this.router.navigate(['']);
      }
    )
  }

  editarExperiencia(){
    const idExperiencia = this.activatedRouter.snapshot.params['idExperiencia'];
     this.experienciaService.editarExperiencia(idExperiencia, this.experiencia).subscribe(data => {
      this.irAHome();
     }, error =>{
        alert("Error al modificar experiencia");
        this.irAHome();
     }
   )
  }

  irAHome() {
    this.router.navigate(['']);
  }

  onSubmit(){
    this.editarExperiencia();
    console.log(this.experiencia);
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
