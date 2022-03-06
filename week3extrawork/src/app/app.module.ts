import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveformmoduleComponent } from './reactiveformmodule/reactiveformmodule.component';
import { PutjsondataintoformComponent } from './putjsondataintoform/putjsondataintoform.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveformmoduleComponent,
    PutjsondataintoformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,HttpClientModule,PutjsondataintoformComponent]
})
export class AppModule { }
