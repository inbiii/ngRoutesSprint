import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MarkerService } from './marker.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PhlComponent } from './phl/phl.component';
import { DalComponent } from './dal/dal.component';
import { HomeComponent } from './home/home.component';
import { HeadtwoDirective } from './headtwo.directive';
import { SpanDirective } from './span.directive';
import { StartComponent } from './start/start.component';



@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    NavbarComponent,
    PhlComponent,
    DalComponent,
    HomeComponent,
    HeadtwoDirective,
    SpanDirective,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MarkerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
