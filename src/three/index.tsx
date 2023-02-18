"use client"

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ThreeJS = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (canvasRef.current) {
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
      });
      
      renderer.outputEncoding = THREE.sRGBEncoding;
      const camera = new THREE.PerspectiveCamera(5, 2);
      camera.position.set(0, 0, 5);
      const loader = new GLTFLoader();
      scene.background = new THREE.Color("white");
   
      loader.load("/scene.gltf", (object) => {        
        scene.add(object.scene);

        function animate() {
          requestAnimationFrame(animate)

          object.scene.rotation.x += 0.1 
          renderer.render(scene, camera);

        }
        animate()
      });
    }
  }, [canvasRef]);

  return (
  <div>
    asdas
    <canvas ref={canvasRef} id="canvas" width={600} height="400"></canvas>
  </div>)
};

export default ThreeJS;