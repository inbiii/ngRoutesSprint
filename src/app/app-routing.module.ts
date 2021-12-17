import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PhlComponent } from './phl/phl.component';
import { DalComponent } from './dal/dal.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  { path: "", redirectTo: "/app-start", pathMatch: 'full' },
  { path: "app-start", component: StartComponent },
  { path: "app-map", component: MapComponent },
  { path: "navbar", component: NavbarComponent },
  { path: "app-phl", component: PhlComponent },
  { path: "app-dal", component: DalComponent },
  { path: "app-home", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
