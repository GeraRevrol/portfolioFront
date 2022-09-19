import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from '../educacion';
import { EducacionService } from '../educacion.service';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent implements OnInit {

  educacion: Educacion = new Educacion();
  constructor(private educacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {
    this.openPopup();
  }

  postEducacion() {
    this.educacionService.agregarEducacion(this.educacion).subscribe(data => {
      this.irAHome();
      console.log(data);

    }, err => {
      alert("no fue posible agregar educacion, Revisá si contas con los accesos requeridos");
      this.irAHome();
    }
    )
  }

  irAHome() {
    this.router.navigate(['']);
  }

  onSubmit() {
    console.log(this.educacion);
    this.postEducacion();
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
