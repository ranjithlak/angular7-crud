import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/homeComponent";
import { serviceComponent } from './components/Services/service.component';

const routes: Routes = [
  { path:'',component:HomeComponent },
  { path:'Home',component:HomeComponent },
  { path:'Services',component:serviceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
