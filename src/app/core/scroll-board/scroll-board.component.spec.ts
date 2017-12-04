import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollBoardComponent } from './scroll-board.component';

describe('ScrollBoardComponent', () => {
  let component: ScrollBoardComponent;
  let fixture: ComponentFixture<ScrollBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
