import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from '../educacion';
import { EducacionService } from '../educacion.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  educacion: Educacion = null;

  constructor(private educacionService: EducacionService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const idEducacion = this.activatedRouter.snapshot.params['idEducacion'];
    this.educacionService.verIdEducacion(idEducacion).subscribe(data => {
      this.educacion = data;
      this.openPopup();
    }, error => {
      alert("Error al modificar educacion");
      this.router.navigate(['']);
    }
    )
  }

  editarEducacion() {
    const idEducacion = this.activatedRouter.snapshot.params['idEducacion'];
    this.educacionService.editarEducacion(idEducacion, this.educacion).subscribe(data => {
      this.irAHome();
    }, error => {
      alert("Error al editar educacion, Revisá si contas con los accesos requeridos");
      this.irAHome();
    }
    )
  }

  irAHome() {
    this.router.navigate(['']);
  }

  onSubmit() {
    this.editarEducacion();
    console.log(this.educacion);
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
