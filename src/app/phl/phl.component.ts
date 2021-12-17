import { Component, OnInit } from '@angular/core';
import { MarkerService } from '../marker.service';

@Component({
  selector: 'app-phl',
  templateUrl: './phl.component.html',
  styleUrls: ['./phl.component.css']
})
export class PhlComponent implements OnInit {
  phlList: any = [
    {
      id: 0,
      name: 'Reading Terminal Market',
      desc: 'A collection of different food stands that serve a variety of global cuisines',
      author: 'Omaid Karimi',
      lat: 39.9533,
      lng: -75.1594
    },
    {
      id: 1,
      name: 'Eastern State Penitentiary',
      desc: 'Jail is bad, do not collect parking, do not pass go',
      author: 'Megan Marchetti',
      lat: 39.9683,
      lng: -75.1727
    },
    {
      id: 2,
      name: 'Thirsty Dice',
      desc: 'Pretty chill board game cafe, pay like 5 bucks for 2 hours',
      author: 'Omaid Karimi',
      lat: 39.966922882876815,
      lng: -75.16532335307382
    }

  ];
  phlLat: number = 39.9526;
  phlLng: number = -75.1652;
  constructor(public mrkr: MarkerService) { }

  ngOnInit(): void {
    this.phlList.forEach((el: any) => {
      if (!this.mrkr.flag) this.mrkr.start();
      this.mrkr.makeYourMarkers(el.lat, el.lng, el.name)
    }
    );
  }

}
