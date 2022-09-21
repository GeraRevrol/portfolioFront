import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from '../proyectos';
import { ProyectosService } from '../proyectos.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

proyectos:Proyectos[];

  constructor(private ProyectosService:ProyectosService, private router:Router, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.getProyectos();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  private getProyectos(){
    this.ProyectosService.verProyectos().subscribe(data =>{
      this.proyectos = data;
    });
  }

  borrarProyectos(idProyectos?: number){
    if(idProyectos !=undefined){
      this.ProyectosService.borrarProyectos(idProyectos).subscribe(data =>{
        this.getProyectos();
      }, error => {

      }
     )
    }
  }

  irAHome() {
    this.router.navigate(['']);
  }

}
