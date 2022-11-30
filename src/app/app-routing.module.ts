import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstitutionComponent } from './school/institution/institution.component';

const routes: Routes = [
  { path: "institution", component: InstitutionComponent },
  ///:whereYou
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
