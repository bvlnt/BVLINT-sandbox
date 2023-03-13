import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Component({
  selector: 'app-threejsrenderer',
  templateUrl: './threejsrenderer.component.html',
  styleUrls: ['./threejsrenderer.component.scss'],
})
export class ThreejsrendererComponent implements AfterViewInit {
  constructor() {}

  //this component will render a threejs gltf model

  @ViewChild('container', { static: true }) containerRef!: ElementRef;
  container!: HTMLDivElement;
  scene!: THREE.Scene;
  camera!: THREE.PerspectiveCamera;
  renderer!: THREE.WebGLRenderer;
  loader = new GLTFLoader();

  ngAfterViewInit() {
    this.container = this.containerRef.nativeElement;
    this.initScene();
    this.loadModel('assets/scene.gltf');
    this.render();
  }

  initScene() {
    // Create the Three.js scene
    this.scene = new THREE.Scene();

    // Create the camera
    const aspectRatio = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    this.camera.position.z = 5;
    this.camera.position.y = 1.3;

    // Create the renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setClearColor(0xffffff);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.container.appendChild(this.renderer.domElement);
  }

  loadModel(modelPath: string) {
    this.loader.load(
      modelPath,
      (gltf: { scene: any }) => {
        // Add the model to the scene
        this.scene.add(gltf.scene);
      },
      (xhr: { loaded: number; total: number }) => {
        console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  render() {
    requestAnimationFrame(() => this.render());

    // Rotate the model
    if (this.scene.children.length > 0) {
      const model = this.scene.children[0];
      model.rotation.y += 0.005;
    }

    this.renderer.render(this.scene, this.camera);
  }
}
