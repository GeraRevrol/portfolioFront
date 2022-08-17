import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEducacionComponent } from './agregar-educacion/agregar-educacion.component';
import { EducacionComponent } from './educacion/educacion.component';
import { PersonaComponent } from './persona/persona.component';

const routes: Routes = [
{path : 'persona',component:PersonaComponent},
{path : 'educacion',component:EducacionComponent},
{path : 'agregar-educacion',component:AgregarEducacionComponent},
{path:'',redirectTo:'persona',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
