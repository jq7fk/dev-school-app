import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddformComponent } from './addform.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './details.component';
import { CardComponent } from './card.component';
import { NavbarComponent } from './navbar.component';
import { CreateComponent } from './create.component';
import { DashboardComponent } from './dashboard.component';
import { InfocardComponent } from './infocard.component';
import { InfocommentComponent } from './infocomment.component';
import { InfonavbarComponent } from './infonavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AddformComponent,
    DetailsComponent,
    CardComponent,
    NavbarComponent,
    CreateComponent,
    DashboardComponent,
    InfocardComponent,
    InfocommentComponent,
    InfonavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
