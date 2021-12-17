import { Component, getModuleFactory, OnInit } from '@angular/core';
import { MarkerService } from '../marker.service';

@Component({
  selector: 'app-dal',
  templateUrl: './dal.component.html',
  styleUrls: ['./dal.component.css']
})
export class DalComponent implements OnInit {
  dalList: any = [
    {
      id: 0,
      name: 'The Dallas World Aquarium',
      desc: 'just keep swimming just keep swimming',
      author: 'Shalom Lee',
      lat: 32.7833,
      lng: -96.8051
    },
    {
      id: 1,
      name: 'Mesquite Championship Rodeo',
      desc: 'Yee (and i cannot stress this enough) haw',
      author: 'Megan Marchetti',
      lat: 32.7616,
      lng: -96.6258
    },
    {
      id: 2,
      name: 'Reunion Tower',
      desc: 'A tall boi',
      author: 'Megan Marchetti',
      lat: 32.7752,
      lng: -96.8091
    }
  ];

  dalLat: number = 32.7767;
  dalLng: number = -96.7970;
  constructor(public mrkr: MarkerService) {
  }



  ngOnInit(): void {
    this.dalList.forEach((el: any) => {
      if (!this.mrkr.flag) this.mrkr.start();
      this.mrkr.makeYourMarkers(el.lat, el.lng, el.name)
    }
    );
  }

}
