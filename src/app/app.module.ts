import * as platformBrowser from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FileSelectDirective } from 'ng2-file-upload';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home/homeComponent";
import { serviceComponent } from './components/Services/service.component';
import { HttpClientModule } from '@angular/common/http';
import { AdunitService } from './adunit.service';
import { FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    serviceComponent,
    FileSelectDirective
  ],
  imports: [
    platformBrowser.BrowserModule,
    AppRoutingModule,HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AdunitService,FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
