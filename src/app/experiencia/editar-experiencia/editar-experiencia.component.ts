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
      }, error =>{
       alert("Error al modificar experiencia");
       this.router.navigate(['']);
      }
    )
  }

  editarExperiencia(){
    const idExperiencia = this.activatedRouter.snapshot.params['idExperiencia'];
     this.experienciaService.editarExperiencia(idExperiencia, this.experiencia).subscribe(data => {
      this.irAExperiencia();
     }, error =>{
        alert("Error al modificar experiencia");
        this.irAExperiencia();
     }
   )
  }

  irAExperiencia(){
    this.router.navigate(['/experiencia']);
  }

  onSubmit(){
    this.editarExperiencia();
    console.log(this.experiencia);
  }

}
