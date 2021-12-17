import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { getParseErrors, Position } from '@angular/compiler';
import * as L from 'leaflet';
import { Observable } from 'rxjs';

let loc: [any, any];

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  flag: boolean = false;
  map: any;
  lat: any;
  lng: any;

  constructor() { }

  ////////////////////////////////////////// GETS YOUR CURRENT POSITION
  getPos() {
    return new Promise((resolve: any, reject: any) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position: any) => {
          if (position) {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
          }
          resolve();

        }, (res) => console.log(res))
      }
    })

  }

  /////////////////////////////////////// TAKES YOU TO CITY POSITIONS

  goToPhilly() {
    console.log('Im going to philly')
    this.map.flyTo([39.9526, -75.1652], 12)
  }

  goHome() {
    console.log(`I'm going home!`)
    this.map.flyTo([this.lat, this.lng], 12);
  }

  goToDallas() {
    console.log('Im going to dallas');
    this.map.flyTo([32.7767, -96.7970], 12);
  }

  start = async () => {
    await this.getPos().then(res => {
      this.initMap()
      this.flag = true;
    })
  }

  /////////////////////////////////LEAFLET INIT MAP FUNCTION AT YOUR LOCATION

  public initMap() {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      // center: [this.markerService.lat, this.markerService.lng],
      // center: [this.lat, this.lng],
      zoom: 4
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }


  /////////////////////////////////MARKER GENERATOR FUNCTION
  makeYourMarkers(lati: number, longi: number, name: string): void {
    const marker = L.marker([lati, longi]);
    marker.bindPopup(name);
    marker.addTo(this.map);

  }


}
