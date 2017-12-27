import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { throttle } from 'lodash/function';

@Component({
  selector: 'app-scroll-board',
  templateUrl: './scroll-board.component.html',
  styleUrls: ['./scroll-board.component.scss']
})
export class ScrollBoardComponent implements OnInit, AfterViewInit {

  options = {
    triggerTime: 1,
    animateTime: 600,
  }

  scrollBoard: any[] = [
    {
      cssClass: ['active'],
      imgUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg',
    },
    {
      cssClass: [],
      imgUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg',
    },
    {
      cssClass: [],
      imgUrl: 'https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg',
    },
  ];

  constructor() {

    this.options.animateTime += this.options.triggerTime;
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }

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

  public setActiveTab(index: number, direction?: string) {

    index = this.indexCalculator(index);

    // add animate class
    let directiveClass = "",
      animateClass = "",
      originIndex = -1;

    switch (direction) {
      case "next":
        directiveClass = "scroll-board-next";
        animateClass = "scroll-board-up";
        originIndex = this.indexCalculator(index - 1);
        break;
      case "prev":
        directiveClass = "scroll-board-prev";
        animateClass = "scroll-board-down";
        originIndex = this.indexCalculator(index + 1);
        break;
      default:
        break;
    }

    // push class prepare next item's animation
    this.scrollBoard[index].cssClass.push(directiveClass); // prev | next
    this.scrollBoard[index].cssClass.push(animateClass);   // up | down

    // trigger animation
    setTimeout(() => {
      this.scrollBoard[originIndex].cssClass.push(animateClass);
      this.scrollBoard[index].cssClass.splice(this.scrollBoard[index].cssClass.indexOf(animateClass), 1);
    }, this.options.triggerTime)



    // wait for animation over
    setTimeout(() => {
      for (let item of this.scrollBoard) {
        let loopIndex = this.scrollBoard.indexOf(item);

        if (index === loopIndex) {
          item.cssClass.indexOf('active') < 0 ? item.cssClass.push('active') : null;
        } else {
          let activeIndex = item.cssClass.indexOf('active');
          activeIndex > -1 ? item.cssClass.splice(activeIndex, 1) : null;
        }
      }
      this.scrollBoard[index].cssClass.splice(this.scrollBoard[index].cssClass.indexOf(directiveClass), 1);
      this.scrollBoard[originIndex].cssClass.splice(this.scrollBoard[originIndex].cssClass.indexOf(animateClass), 1);
    }, this.options.animateTime);
  }


  onWheelHandler = throttle((event: WheelEvent): void => {
    // scroll up & scroll down
    if (event.wheelDeltaY > 0) {
      this.scrollPrev();
    } else if (event.wheelDeltaY < 0) {
      this.scrollNext();
    }   
  }, this.options.animateTime);
}
