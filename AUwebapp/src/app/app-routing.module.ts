import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TrendsComponent} from './trends/trends.component';
import {OpportunityComponent} from './opportunity/opportunity.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  { path: '' ,redirectTo:'/login', pathMatch:'full'},
    {path:'login',component:LoginComponent},
   { path: 'trends', component: TrendsComponent },
   { path: 'opportunity', component: OpportunityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
