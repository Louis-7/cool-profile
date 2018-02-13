import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ThreeDrawService } from '../shared/three-draw/three-draw.service';
import { ParticlesService } from '../shared/particles/particles.service';

import * as THREE from 'three';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('dashContainerDOM') private dashContainerDOM: ElementRef;

  public renderer: THREE.WebGLRenderer;

  constructor(private threeDrawService: ThreeDrawService, private particlesService: ParticlesService) { }

  ngOnInit() {

    // this.renderer = this.threeDrawService.dashBoardScene(this.dashContainerDOM);
    // this.particlesService.load('particles-background','./assets/config/particles.json');
  }

  // @HostListener('window:resize', ['$event']) onResize($event) {
  //   this.renderer.setSize(this.dashContainerDOM.nativeElement.clientWidth, this.dashContainerDOM.nativeElement.clientHeight);
  // }
}
