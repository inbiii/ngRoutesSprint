import { Component, OnInit } from '@angular/core';
import { MarkerService } from '../marker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lat: any = this.mrkr.lat;
  lng: any = this.mrkr.lng;

  constructor(public mrkr: MarkerService) { }

  ngOnInit(): void {
    if (!this.mrkr.flag) this.mrkr.start();
    this.mrkr.goHome();
    this.mrkr.makeYourMarkers(this.lat, this.lng, 'Where the heart is!')

  }

}
