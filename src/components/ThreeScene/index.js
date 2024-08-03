import React, { useEffect } from "react";
import * as THREE from "three";
import * as dat from "dat.gui";
import Stats from "stats.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Lensflare, LensflareElement } from "three/examples/jsm/objects/Lensflare";

const ThreeJSComponent = () => {
  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0.5, 0, 3);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.shadowMap.enabled = true;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxDistance = 12;
    controls.minDistance = 2;
    controls.enablePan = false;
    controls.autoRotate = false;
    controls.autoRotateSpeed = 0.75;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.2);
    pointLight.position.set(-5, 2, 0);
    scene.add(pointLight);

    // Lensflare
    const lensflare = new Lensflare();
    const lensflareElement = new LensflareElement(new THREE.TextureLoader().load("https://s3.amazonaws.com/jsfiddle1234/lensflare0.png"), 300 * pointLight.intensity, 0, new THREE.Color(0xffffff));
    lensflare.addElement(lensflareElement);
    pointLight.add(lensflare);

    // Objects
    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(1, 64, 64),
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        map: new THREE.TextureLoader().load("https://i.imgur.com/crQ0ESd.jpg"),
        bumpMap: new THREE.TextureLoader().load("https://i.imgur.com/crQ0ESd.jpg"),
        bumpScale: 0.018,
        metalness: 0.3,
        roughness: 0.7
      })
    );
    scene.add(earth);

    const cloud = new THREE.Mesh(
      new THREE.SphereGeometry(1, 64, 64),
      new THREE.MeshStandardMaterial({
        map: new THREE.TextureLoader().load("https://i.imgur.com/7NLKWFb.jpg"),
        alphaMap: new THREE.TextureLoader().load("https://i.imgur.com/uz92tq5.jpg"),
        bumpScale: 0.015,
        transparent: true,
        depthWrite: false,
        opacity: 0.2
      })
    );
    cloud.scale.set(1.025, 1.025, 1.025);
    scene.add(cloud);

    // GUI
    const gui = new dat.GUI();

    // Stats
    const stats = new Stats();
    document.body.appendChild(stats.dom);

    // Animation
    const clock = new THREE.Clock();

    const animate = () => {
      stats.begin();
      const elapsedTime = clock.getElapsedTime();

      earth.rotation.y = elapsedTime / 10;
      cloud.rotation.y = elapsedTime / 10;
      controls.update();
      renderer.render(scene, camera);

      stats.end();
      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    const toggleFullScreen = () => {
      const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement;

      if (!fullscreenElement) {
        if (document.body.requestFullscreen) {
          document.body.requestFullscreen();
        } else if (document.body.webkitRequestFullscreen) {
          document.body.webkitRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    };

    gui.add({ fullscreen: toggleFullScreen }, "fullscreen").name("Toggle Fullscreen");

    // Clean up
    return () => {
      gui.destroy();
      document.body.removeChild(renderer.domElement);
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return null; // No need to render anything from this component
};

export default ThreeJSComponent;
