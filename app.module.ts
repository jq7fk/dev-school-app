import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card.component';
import { NavbarComponent } from './navbar.component';
import { CreateComponent } from './create.component';
import { InfocardComponent } from './infocard.component';
import { InfocommentComponent } from './infocomment.component';
import { InfonavbarComponent } from './infonavbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    CreateComponent,
    InfocardComponent,
    InfocommentComponent,
    InfonavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
