import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skills } from '../skills';
import { SkillsService } from '../skills.service';
import { TokenService } from '../token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skills: Skills[];

  constructor(private SkillsService:SkillsService, private router:Router, private tokenService: TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.getSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
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
