import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from '../app/app-routing.module'; //'./app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common'; 

import { FormsModule } from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent
    //FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,    
    HttpClientModule,
    CommonModule
    //ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
