import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {EncodingComponent} from './encoding/encoding.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {Step1Component} from './step1/step1.component';
import {Step2Component} from './step2/step2.component';
import {Step3Component} from './step3/step3.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'encoding',
    component: EncodingComponent,
    children: [
      {path:'step1', component: Step1Component},
      {path:'step2', component: Step2Component},
      {path:'step3', component: Step3Component}
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
