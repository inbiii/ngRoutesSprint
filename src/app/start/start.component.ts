import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  public btnVis: boolean = true;
  public startVis: boolean = false;
  constructor() { }

  toggleVis() {
    console.log('togging visbility')
    this.btnVis = true;
    this.startVis = false;
  }

  ngOnInit(): void {
  }



}
