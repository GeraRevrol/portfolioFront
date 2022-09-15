import { Educacion } from '../educacion';
import { Component, OnInit } from '@angular/core';
import { EducacionService } from '../educacion.service';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

educacion:Educacion[];

  constructor(private EducacionService:EducacionService, private router:Router, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.getEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
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
      },err => {
        alert("No es posible borrar, Revisá si contas con los accesos requeridos")
       }
      )
    }
  }
}
