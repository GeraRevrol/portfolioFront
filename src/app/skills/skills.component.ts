import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from '../skills';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

skills:Skills[];

  constructor(private SkillsService:SkillsService, private router:Router) { }

  ngOnInit(): void {
    this.getSkills();
  }

  private getSkills(){
    this.SkillsService.verSkills().subscribe(data =>{
      this.skills = data;
    })
  }

  borrarSkills(idSkills?:number){
    if(idSkills != undefined){
       this.SkillsService.borrarSkills(idSkills).subscribe(data =>{
         this.getSkills();
        },error => {

        }
      )
    }
  }

}
