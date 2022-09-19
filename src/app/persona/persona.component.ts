import { Persona } from '../persona';
import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../persona.service';
import { Router } from '@angular/router';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  isLogged = false;

  persona: Persona[];

  constructor(private PersonaService: PersonaService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  private getPersona() {
    this.PersonaService.verPersona().subscribe(dato => {
      this.persona = dato;
    });
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/login'])
  }

  irAHome() {
    this.router.navigate(['']);
  }

}
