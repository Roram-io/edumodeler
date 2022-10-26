import { BrowserModule } from '@angular/platform-browser';
import { DiagramComponent } from './diagram/diagram.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { LandingComponent } from './landing/landing.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { DocumentacionComponent } from './documentacion/documentacion.component';
import { MissinglinkComponent } from './missinglink/missinglink.component';
import { ModelerComponent } from './modeler/modeler.component'

@NgModule({
  declarations: [
    AppComponent,
    DiagramComponent,
    LandingComponent,
    NoticiasComponent,
    DocumentacionComponent,
    MissinglinkComponent,
    ModelerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
