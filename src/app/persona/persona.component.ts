import { Persona } from '../persona';
import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  persona:Persona[];

  constructor(private PersonaService:PersonaService) { }

  ngOnInit(): void {
    this.getPersona();
  }

  private getPersona(){
    this.PersonaService.verPersona().subscribe(dato =>{
      this.persona = dato;
    });
  }
}
