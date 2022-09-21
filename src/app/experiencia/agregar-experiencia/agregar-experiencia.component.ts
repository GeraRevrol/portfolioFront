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
    this.openPopup();
  }

  postExperiencia() {
    this.experienciaService.agregarExperiencia(this.experiencia).subscribe(data => {
      this.irAHome();
      console.log(data);

    }, error => console.log(error));
  }

  irAHome() {
    this.router.navigate(['']);
  }

  onSubmit(){
    console.log(this.experiencia);
    this.postExperiencia();
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
