import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RxReactiveDynamicFormsModule } from "@rxweb/reactive-dynamic-forms"
import {  RxReactiveFormsModule } from "@rxweb/reactive-form-validators"

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule, RxReactiveDynamicFormsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
