import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AddformComponent } from './addform.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './details.component';
import { CardComponent } from './card.component';
import { NavbarComponent } from './navbar.component';
import { CreateComponent } from './create.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AddformComponent,
    DetailsComponent,
    CardComponent,
    NavbarComponent,
    CreateComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
