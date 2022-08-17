import { Educacion } from '../educacion';
import { Component, OnInit } from '@angular/core';
import { EducacionService } from '../educacion.service';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

educacion:Educacion[];

  constructor(private EducacionService:EducacionService) { }

  ngOnInit(): void {
    this.getEducacion();
  }

  private getEducacion(){
    this.EducacionService.verEducacion().subscribe(dato =>{
      this.educacion = dato;
    });
  }

}
