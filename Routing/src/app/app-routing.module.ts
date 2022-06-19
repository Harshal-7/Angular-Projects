import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatchesComponent } from './batches/batches.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { InvalidComponent } from './invalid/invalid.component';

const routes: Routes = [
  {path:'batches',component:BatchesComponent},
  {path:'subject',component:SubjectsComponent},
  {path:'about',component:AboutusComponent},
  {path:'',component:AboutusComponent},
  {path:'**',component:InvalidComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
