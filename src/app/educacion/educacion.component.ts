import { Educacion } from '../educacion';
import { Component, OnInit } from '@angular/core';
import { EducacionService } from '../educacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

educacion:Educacion[];

  constructor(private EducacionService:EducacionService, private router:Router) { }

  ngOnInit(): void {
    this.getEducacion();
  }
  
  private getEducacion(){
    this.EducacionService.verEducacion().subscribe(data =>{
      this.educacion = data;
    });
  }

  borrarEducacion(idEducacion?: number){
    if(idEducacion != undefined){
      this.EducacionService.borrarEducacion(idEducacion).subscribe( data => {
        this.getEducacion();
      },error => {
        
       }
      )
    }
  }
}
