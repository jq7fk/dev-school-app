import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddformComponent } from './addform.component';
import { DashboardComponent } from './dashboard.component';
import { DetailsComponent } from './details.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'addEvent', component: AddformComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'details', component: DetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ], 
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
