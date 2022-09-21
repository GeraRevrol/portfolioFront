import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from 'src/app/skills';
import { SkillsService } from 'src/app/skills.service';

@Component({
  selector: 'app-agregar-skills',
  templateUrl: './agregar-skills.component.html',
  styleUrls: ['./agregar-skills.component.css']
})
export class AgregarSkillsComponent implements OnInit {

  skills: Skills = new Skills();

  constructor(private SkillsService:SkillsService, private router:Router) { }

  ngOnInit(): void {
    this.openPopup();
  }

  postSkills() {
    this.SkillsService.agregarSkills(this.skills).subscribe(data =>{
      this.irAHome();
      console.log(data);

    },error => console.log(error));
  }

  irAHome() {
    this.router.navigate(['']);
  }

  onSubmit(){
    console.log(this.skills);
    this.postSkills();
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
