import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from '../experiencia';
import { ExperienciaService } from '../experiencia.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  experiencia: Experiencia[];

  constructor(private ExperienciaService: ExperienciaService, private router: Router, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.getExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  private getExperiencia() {
    this.ExperienciaService.verExperiencia().subscribe(data => {
      this.experiencia = data;
    });
  }

  borrarExperiencia(idExperiencia?: number) {
    if (idExperiencia != undefined) {
      this.ExperienciaService.borrarExperiencia(idExperiencia).subscribe(data => {
        this.getExperiencia();
        this.irAHome();
      }, err => {
        alert("no se pudo borrar experiencia")
      }
      )
    }
  }

  irAHome() {
    this.router.navigate(['']);
  }

}
