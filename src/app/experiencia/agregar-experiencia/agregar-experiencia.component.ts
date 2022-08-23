import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/experiencia';
import { ExperienciaService } from 'src/app/experiencia.service';

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {

  experiencia : Experiencia = new Experiencia();
  constructor(private experienciaService:ExperienciaService, private router:Router) { }

  ngOnInit(): void {
  }

  postExperiencia() {
    this.experienciaService.agregarExperiencia(this.experiencia).subscribe(data => {
      this.irAExperiencia();
      console.log(data);

    }, error => console.log(error));
  }

  irAExperiencia(){
    this.router.navigate(['/experiencia']);
  }

  onSubmit(){
    console.log(this.experiencia);
    this.postExperiencia();
  }

}
