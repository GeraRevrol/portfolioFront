import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEducacionComponent } from './agregar-educacion/agregar-educacion.component';
import { EditarEducacionComponent } from './editar-educacion/editar-educacion.component';
import { EducacionComponent } from './educacion/educacion.component';
import { AgregarExperienciaComponent } from './experiencia/agregar-experiencia/agregar-experiencia.component';
import { EditarExperienciaComponent } from './experiencia/editar-experiencia/editar-experiencia.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { GuardsGuard } from './guards.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EditarPersonaComponent } from './persona/editar-persona/editar-persona.component';
import { PersonaComponent } from './persona/persona.component';
import { AgregarProyectoComponent } from './proyectos/agregar-proyecto/agregar-proyecto.component';
import { EditarProyectoComponent } from './proyectos/editar-proyecto/editar-proyecto.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { AgregarSkillsComponent } from './skills/agregar-skills/agregar-skills.component';
import { EditarSkillsComponent } from './skills/editar-skills/editar-skills.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
{path : 'persona',component:PersonaComponent, canActivate:[GuardsGuard]},
{path : 'editar-persona/:idPersona',component:EditarPersonaComponent, canActivate:[GuardsGuard]},
{path : 'educacion',component:EducacionComponent, canActivate:[GuardsGuard]},
{path : 'agregar-educacion',component:AgregarEducacionComponent, canActivate:[GuardsGuard]},
{path : 'editar-educacion/:idEducacion',component:EditarEducacionComponent, canActivate:[GuardsGuard]},
{path : 'experiencia',component:ExperienciaComponent, canActivate:[GuardsGuard]},
{path : 'agregar-experiencia',component:AgregarExperienciaComponent, canActivate:[GuardsGuard]},
{path : 'editar-experiencia/:idExperiencia',component:EditarExperienciaComponent, canActivate:[GuardsGuard]},
{path : 'proyectos',component:ProyectosComponent, canActivate:[GuardsGuard]},
{path : 'agregar-proyectos',component:AgregarProyectoComponent, canActivate:[GuardsGuard]},
{path : 'editar-proyectos/:idProyectos',component:EditarProyectoComponent, canActivate:[GuardsGuard]},
{path : 'skills',component:SkillsComponent, canActivate:[GuardsGuard]},
{path : 'agregar-skills',component:AgregarSkillsComponent, canActivate:[GuardsGuard]},
{path : 'editar-skills/:idSkills',component:EditarSkillsComponent, canActivate:[GuardsGuard]},
{path : 'login',component:LoginComponent},
{path:'',component:HomeComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
