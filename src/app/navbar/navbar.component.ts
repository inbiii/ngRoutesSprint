import { Component, OnInit } from '@angular/core';
import { MapComponent } from '../map/map.component';
import { MarkerService } from '../marker.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public markerServ: MarkerService) {

  }

  ngOnInit(): void {
  }

}
