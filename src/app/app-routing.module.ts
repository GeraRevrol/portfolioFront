import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEducacionComponent } from './agregar-educacion/agregar-educacion.component';
import { EditarEducacionComponent } from './editar-educacion/editar-educacion.component';
import { EducacionComponent } from './educacion/educacion.component';
import { AgregarExperienciaComponent } from './experiencia/agregar-experiencia/agregar-experiencia.component';
import { EditarExperienciaComponent } from './experiencia/editar-experiencia/editar-experiencia.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { PersonaComponent } from './persona/persona.component';

const routes: Routes = [
{path : 'persona',component:PersonaComponent},
{path : 'educacion',component:EducacionComponent},
{path : 'agregar-educacion',component:AgregarEducacionComponent},
{path : 'editar-educacion/:idEducacion',component:EditarEducacionComponent},
{path : 'experiencia',component:ExperienciaComponent},
{path : 'agregar-experiencia',component:AgregarExperienciaComponent},
{path : 'editar-experiencia/:idExperiencia',component:EditarExperienciaComponent},
{path:'',redirectTo:'persona',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
