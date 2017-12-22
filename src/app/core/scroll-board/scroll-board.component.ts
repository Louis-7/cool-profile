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
      cssClass: ['active'],
      imgUrl: 'https://i.imgur.com/MV9SvaP.jpg',
    },
    {
      cssClass: [],
      imgUrl: 'https://i.imgur.com/kXUHDn5.jpg',
    },
    {
      cssClass: [],
      imgUrl: 'https://i.imgur.com/Qmz61wo.jpg',
    },
  ];

  scrollIndexHeightCal() {
    return {
      height: `${100 / this.scrollBoard.length}%`
    }
  }

  public currentIndex(): number {
    for (let item of this.scrollBoard) {
      if (item.cssClass.indexOf('active') > -1) {
        return this.scrollBoard.indexOf(item);
      }
    }
  }

  public scrollNext() {
    let currentIndex = this.currentIndex(),
      scrollBoardLength = this.scrollBoard.length;

    this.setActiveTab(this.indexCalculator(this.currentIndex() + 1), 'next');

  }

  public scrollPrev() {
    let currentIndex = this.currentIndex(),
      scrollBoardLength = this.scrollBoard.length;

    this.setActiveTab(this.indexCalculator(this.currentIndex() - 1), 'prev');
  }


  public setActiveTab(index: number, direction?: string) {

    index = this.indexCalculator(index);

    // add animate class
    let directiveClass = "",
      animateClass = "",
      originIndex = -1;

    switch (direction) {
      case "next":
        directiveClass = "scroll-img-container-next";
        animateClass = "scroll-img-container-down";
        originIndex = this.indexCalculator(index - 1);
        break;
      case "prev":
        directiveClass = "scroll-img-container-prev";
        animateClass = "scroll-img-container-up";
        originIndex = this.indexCalculator(index +  1);
        break;
      default:
        break;
    }

    this.scrollBoard[originIndex].cssClass.push(animateClass);
    this.scrollBoard[index].cssClass.push(animateClass);
    this.scrollBoard[index].cssClass.push(directiveClass);

    setTimeout(() => {
      this.scrollBoard[originIndex].cssClass.splice(this.scrollBoard[originIndex].cssClass.indexOf(animateClass), 1);
      this.scrollBoard[index].cssClass.splice(this.scrollBoard[index].cssClass.indexOf(animateClass), 1);
      this.scrollBoard[index].cssClass.splice(this.scrollBoard[index].cssClass.indexOf(directiveClass), 1);

      for (let item of this.scrollBoard) {
        let loopIndex = this.scrollBoard.indexOf(item);

        if (index === loopIndex) {
          item.cssClass.indexOf('active') < 0 ? item.cssClass.push('active') : null;
        } else {
          let activeIndex = item.cssClass.indexOf('active');
          activeIndex > -1 ? item.cssClass.splice(activeIndex, 1) : null;
        }
      }
    }, 1000);
  }

  public indexCalculator(index: number): number {
    let maxIndex = this.scrollBoard.length - 1;
    if (index > maxIndex) {
      return 0;
    } else if (index < 0) {
      return maxIndex;
    } else {
      return index;
    }
  }
}
