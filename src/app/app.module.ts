import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {GoogleplaceDirective} from "./directives/google-place.directive";

@NgModule({
  declarations: [
    AppComponent, GoogleplaceDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  exports: [GoogleplaceDirective],
  providers: [],
  bootstrap: [AppComponent]
})
export class GooglePlaceModule { }
