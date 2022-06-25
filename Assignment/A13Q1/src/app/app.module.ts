import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompSuccessDirective } from './comp-success.directive';
import { CompFailuerDirective } from './comp-failuer.directive';
import { CustomStyleDirective } from './custom-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    CompSuccessDirective,
    CompFailuerDirective,
    CustomStyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
