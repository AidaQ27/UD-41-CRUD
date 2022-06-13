import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { MihomeComponent } from './mihome/mihome.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { HttpClientModule } from '@angular/common/http';
import { DatosComponent } from './datos/datos.component';
import { AddPersonajeComponent } from './components/add-personaje/add-personaje.component';
import { PersonajeDetailsComponent } from './components/personaje-details/personaje-details.component';
import { PersonajeListComponent } from './components/personaje-list/personaje-list.component';

import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    MihomeComponent,
    PersonajesComponent,
    DatosComponent,
    AddPersonajeComponent,
    PersonajeDetailsComponent,
    PersonajeListComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
