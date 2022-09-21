import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/persona';
import { PersonaService } from 'src/app/persona.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit {

  persona: Persona = null;

  constructor(private personaService: PersonaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const idPersona = this.activatedRouter.snapshot.params['idPersona'];
    this.personaService.verIdPersona(idPersona).subscribe(data => {
      this.persona = data;
      this.openPopup();
    }, error => {
      alert("Error al modificar persona");
      this.router.navigate(['']);
    }
    )
  }

  editarPersona() {
    const idPersona = this.activatedRouter.snapshot.params['idPersona'];
    this.personaService.editarPersona(idPersona, this.persona).subscribe(data => {
      this.irAHome();
    }, error => {
      alert("Error al editar persona, Revisá si contas con los accesos requeridos");
      this.irAHome();
    }
    )
  }

  irAHome() {
    this.router.navigate(['']);
  }

  onSubmit() {
    this.editarPersona();
    console.log(this.persona);
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