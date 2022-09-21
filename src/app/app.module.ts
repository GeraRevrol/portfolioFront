import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonaComponent } from './persona/persona.component';
import { HttpClientModule } from '@angular/common/http';
import { EducacionComponent } from './educacion/educacion.component';
import { AgregarEducacionComponent } from './agregar-educacion/agregar-educacion.component';
import { FormsModule } from '@angular/forms';
import { EditarEducacionComponent } from './editar-educacion/editar-educacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { AgregarExperienciaComponent } from './experiencia/agregar-experiencia/agregar-experiencia.component';
import { EditarExperienciaComponent } from './experiencia/editar-experiencia/editar-experiencia.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { AgregarProyectoComponent } from './proyectos/agregar-proyecto/agregar-proyecto.component';
import { EditarProyectoComponent } from './proyectos/editar-proyecto/editar-proyecto.component';
import { SkillsComponent } from './skills/skills.component';
import { EditarSkillsComponent } from './skills/editar-skills/editar-skills.component';
import { AgregarSkillsComponent } from './skills/agregar-skills/agregar-skills.component';
import { LoginComponent } from './login/login.component';
import { interceptorProvider } from './interceptor-service';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    EducacionComponent,
    AgregarEducacionComponent,
    EditarEducacionComponent,
    ExperienciaComponent,
    AgregarExperienciaComponent,
    EditarExperienciaComponent,
    ProyectosComponent,
    AgregarProyectoComponent,
    EditarProyectoComponent,
    SkillsComponent,
    EditarSkillsComponent,
    AgregarSkillsComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
