import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('dashContainerDOM') private dashContainerDOM: ElementRef;

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer();
  geometry = new THREE.BoxGeometry(1, 1, 1);
  material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  cube = new THREE.Mesh(this.geometry, this.material);

  constructor() { }

  ngOnInit() {

    this.renderer.setSize(this.dashContainerDOM.nativeElement.clientWidth, this.dashContainerDOM.nativeElement.clientHeight);
    this.dashContainerDOM.nativeElement.appendChild(this.renderer.domElement);
    this.scene.add(this.cube);
    this.camera.position.z = 5;

    requestAnimationFrame(function animate() {
      this.cube.rotation.x += 0.1;
      this.cube.rotation.y += 0.1;
      this.renderer.render(this.scene, this.camera);

      requestAnimationFrame(animate.bind(this));
    }.bind(this));
  }

  @HostListener('window:resize', ['$event']) onResize($event) {
    this.renderer.setSize(this.dashContainerDOM.nativeElement.clientWidth, this.dashContainerDOM.nativeElement.clientHeight);
  }
}
