import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent  } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AddTasksComponent } from "./add-tasks/add-tasks.component";
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path : 'home' , component : HomeComponent },
  { path : 'add-tasks' , component : AddTasksComponent },
  { path : 'about' , component : AboutComponent },
  { path : 'contact' , component : ContactComponent },
  {path:'', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
