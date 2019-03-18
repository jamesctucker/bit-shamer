import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [DataService]
})




export class HomeComponent implements OnInit {

  //this enables you to utilize math methods such as Math.ceil in Angular html
  Math = Math;

  results: Object;

  bitcoinCount: number;

  constructor(private data: DataService) {
    this.bitcoinCount = 0;
  }

  ngOnInit() {
    this.data.getPrice().subscribe(data => {
      this.results = data
      console.log(this.results);

    }
    );

  }





}
