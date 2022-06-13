import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcercadeComponent } from './acercade/acercade.component';
import { DatosComponent } from './datos/datos.component';
import { MihomeComponent } from './mihome/mihome.component';
import { PersonajesComponent } from './personajes/personajes.component';

import { AddPersonajeComponent } from './components/add-personaje/add-personaje.component';
import { PersonajeDetailsComponent } from './components/personaje-details/personaje-details.component';
import { PersonajeListComponent } from './components/personaje-list/personaje-list.component';

const routes: Routes = [
  {
    path: 'mihome',
    component: MihomeComponent,
  },

  {
    path: 'acercade',
    component: AcercadeComponent,
  },

  {
    path: 'personajes',
    component: PersonajesComponent,
  },
  {
    path: 'datos',
    component: DatosComponent,
  },
  { path:'', redirectTo:'personajes', pathMatch: 'full' },
  { path: 'personajes', component: PersonajeListComponent },
  { path: 'personajes/:id', component: PersonajeDetailsComponent },
  { path: 'add', component: AddPersonajeComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
