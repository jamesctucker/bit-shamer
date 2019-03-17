import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DataService]
})



// @Pipe({ name: 'round' })
// export class RoundPipe {
//   transform(results: number) {
//     return Math.round(results);
//   }
// }
export class HomeComponent implements OnInit {

  results: Object;
  Math = Math;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPrice().subscribe(data => {
      this.results = data
      console.log(this.results);

    }
    );

  }





}
