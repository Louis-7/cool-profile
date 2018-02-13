import { Injectable, ElementRef } from '@angular/core';
import * as THREE from 'three';

@Injectable()
export class ThreeDrawService {

  constructor() { 
  }

  dashBoardScene(htmlElement: ElementRef): THREE.WebGLRenderer {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    let renderer = new THREE.WebGLRenderer();
    // create a cube
    let cubeGeometry = new THREE.BoxGeometry(1, 1, 1);  // this is a model
    let cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });  // this is what we use to cover the model!
    let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    // draw a line
    let lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });
    let lineGeometry = new THREE.Geometry();
    lineGeometry.vertices.push(new THREE.Vector3(-10, -4, 0));
    lineGeometry.vertices.push(new THREE.Vector3(0, 6, 0));
    lineGeometry.vertices.push(new THREE.Vector3(10, -4, 0));
    lineGeometry.vertices.push(new THREE.Vector3(-10, -4, 0));
    let line = new THREE.Line(lineGeometry, lineMaterial)

    // set size of canvas
    renderer.setSize(htmlElement.nativeElement.clientWidth, htmlElement.nativeElement.clientHeight);
    // add canvas to document
    htmlElement.nativeElement.appendChild(renderer.domElement);
    // add box to scene
    scene.add(cube);
    scene.add(line);
    // pull camera a little far
    camera.position.set(0, 0, 50);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    // execute 
    requestAnimationFrame(function animate() {
      cube.rotation.x += 0.1;
      cube.rotation.y += 0.1;
      renderer.render(scene, camera);

      requestAnimationFrame(animate);
    });

    return renderer;
  }
}
