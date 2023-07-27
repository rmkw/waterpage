import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { OnePageModule } from './one-page/one-page.module';
import { SharedModule } from './shared/shared.module';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterBarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OnePageModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
