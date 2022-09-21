import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skills } from 'src/app/skills';
import { SkillsService } from 'src/app/skills.service';

@Component({
  selector: 'app-editar-skills',
  templateUrl: './editar-skills.component.html',
  styleUrls: ['./editar-skills.component.css']
})
export class EditarSkillsComponent implements OnInit {

skills:Skills = null;

  constructor(private SkillsService:SkillsService, private activatedRouter:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    const idSkills = this.activatedRouter.snapshot.params['idSkills'];
    this.SkillsService.verIdSkills(idSkills).subscribe(data => {
      this.skills = data;
      this.openPopup();
    },error =>{
      alert("Error al modificar Skills");
      this.router.navigate(['']);
    }
   )
  }

  editarskills(){
    const idSkills = this.activatedRouter.snapshot.params['idSkills'];
    this.SkillsService.editarSkills(idSkills,this.skills).subscribe(data =>{
      this.irAHome();
    },error =>{
      alert("Error al editar Skills");
      this.irAHome();
    }
   )
  }

  irAHome() {
    this.router.navigate(['']);
  }

  onSubmit(){
    this.editarskills();
    console.log(this.skills);
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
