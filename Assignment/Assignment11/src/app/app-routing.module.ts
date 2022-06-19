import { invalid } from '@angular/compiler/src/render3/view/util';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { InvalidComponent } from './invalid/invalid.component';

const routes: Routes = [
  {path: 'technologies',component: TechnologiesComponent},
  {path: 'books',component: BooksComponent},
  // {path: '',component: TechnologiesComponent},
  // {path: '**',component: InvalidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
