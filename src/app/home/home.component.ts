import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DataService]
})
export class HomeComponent implements OnInit {

  results: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPrice().subscribe(data => {
      this.results = data
      console.log(this.results);
    }
    );
  }



}
