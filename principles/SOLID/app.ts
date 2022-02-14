import Environment from "./enveronment";
import * as THREE from 'three';

class Game {

    scene: THREE.Scene;

    camera: THREE.PerspectiveCamera;

    renderer: THREE.WebGLRenderer;

    constructor(){

      this.scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1000);

      this.renderer = new THREE.WebGLRenderer({antalias: true});

      this.Start();
    }
    
    Start(): void{
        
        document.body.appendChild(this.renderer.domElement);

        const environment: Environment = new Environment();
    
        environment.Start();
    }
}

new Game()