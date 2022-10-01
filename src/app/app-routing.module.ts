import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentacionComponent } from './documentacion/documentacion.component';
import { LandingComponent } from './landing/landing.component';
import { MissinglinkComponent } from './missinglink/missinglink.component';
import { ModelerComponent } from './modeler/modeler.component';
import { NoticiasComponent } from './noticias/noticias.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'modeler', component: ModelerComponent},
  { path: 'documentacion', component: DocumentacionComponent},
  { path: 'noticias', component: NoticiasComponent},
  { path: '**', pathMatch: 'full', 
        component:  MissinglinkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
