import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEducacionComponent } from './agregar-educacion/agregar-educacion.component';
import { EditarEducacionComponent } from './editar-educacion/editar-educacion.component';
import { EducacionComponent } from './educacion/educacion.component';
import { AgregarExperienciaComponent } from './experiencia/agregar-experiencia/agregar-experiencia.component';
import { EditarExperienciaComponent } from './experiencia/editar-experiencia/editar-experiencia.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PersonaComponent } from './persona/persona.component';
import { AgregarProyectoComponent } from './proyectos/agregar-proyecto/agregar-proyecto.component';
import { EditarProyectoComponent } from './proyectos/editar-proyecto/editar-proyecto.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { AgregarSkillsComponent } from './skills/agregar-skills/agregar-skills.component';
import { EditarSkillsComponent } from './skills/editar-skills/editar-skills.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
{path : 'persona',component:PersonaComponent},
{path : 'educacion',component:EducacionComponent},
{path : 'agregar-educacion',component:AgregarEducacionComponent},
{path : 'editar-educacion/:idEducacion',component:EditarEducacionComponent},
{path : 'experiencia',component:ExperienciaComponent},
{path : 'agregar-experiencia',component:AgregarExperienciaComponent},
{path : 'editar-experiencia/:idExperiencia',component:EditarExperienciaComponent},
{path : 'proyectos',component:ProyectosComponent},
{path : 'agregar-proyectos',component:AgregarProyectoComponent},
{path : 'editar-proyectos/:idProyectos',component:EditarProyectoComponent},
{path : 'skills',component:SkillsComponent},
{path : 'agregar-skills',component:AgregarSkillsComponent},
{path : 'editar-skills/:idSkills',component:EditarSkillsComponent},
{path : 'login',component:LoginComponent},
{path:'',component:HomeComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
