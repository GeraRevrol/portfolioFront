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

  educacion : Educacion = new Educacion();
  constructor(private educacionService:EducacionService,private router:Router){ }

  ngOnInit(): void {
    
  }

  postEducacion() {
    this.educacionService.agregarEducacion(this.educacion).subscribe(data => {
      this.irAEducacion();
      console.log(data);      

    },error => console.log(error));
  }

  irAEducacion(){
    this.router.navigate(['/educacion']);
  }

  onSubmit(){
    console.log(this.educacion);
    this.postEducacion();
  }

}
