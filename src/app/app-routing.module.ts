import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddformComponent } from './addform.component';
import { DashboardComponent } from './dashboard.component';
import { DetailsComponent } from './details.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'addEvent', component: AddformComponent},
  { path: 'editEvent/:id', component: AddformComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'details/:id', component: DetailsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
