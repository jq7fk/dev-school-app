import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { DialogComponent } from './dialog.component';

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
    InfonavbarComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents: [DialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
