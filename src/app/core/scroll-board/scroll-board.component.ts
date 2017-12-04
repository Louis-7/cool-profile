import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-board',
  templateUrl: './scroll-board.component.html',
  styleUrls: ['./scroll-board.component.scss']
})
export class ScrollBoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollBoard: any[] = [
    {
      imgUrl: './assets/img/s4714930.jpg',
    },
    {
      imgUrl: './assets/img/s4714930.jpg',
    },
    {
      imgUrl: './assets/img/s4714930.jpg',
    },
  ];

  scrollIndexHeightCal() {
    return {
      height: `${100 / this.scrollBoard.length}%`
    }
  }

}
