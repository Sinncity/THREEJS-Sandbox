import * as THREE from "three";
import "./styles.css";

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(3, 3, 3);
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const mesh = new THREE.Mesh(geometry, material);
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 3;

mesh.scale.set(2, 2, 2);
scene.add(mesh);
// Scale
//
// Axes helper
// const axesHelper = new THREE.AxesHelper(5);
// scene.add(axesHelper);
mesh.rotation.reorder("YXZ");

// mesh.rotation.x = Math.PI / 0.01;
// mesh.rotation.y = Math.PI / 0.05;
// mesh.position.set(1, 2, 1);

//

// }
// //
// Sizes;
const sizes = {
  width: 800,
  height: 600
};

// Camera
const camera = new THREE.PerspectiveCamera(85, sizes.width / sizes.height);
camera.position.set(4, 1, 10);
scene.add(camera);
camera.lookAt(mesh.position);
// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("canvas.webgl")
});

const clock = new THREE.Clock();

// let time = Date.now();

/**
 * Animate
 */
const tick = () => {
  // Time
  // const currentTime = Date.now();
  // const deltaTime = currentTime - time;
  // time = currentTime;
  // console.log(deltaTime);
  const elapsedTime = clock.getElapsedTime();
  console.log(elapsedTime);
  // Update objects
  // mesh.rotation.y += 0.004;
  mesh.rotation.x = Math.cos(elapsedTime);
  mesh.position.y = Math.sin(elapsedTime);
  // mesh.position.x = +2;
  camera.lookAt(mesh.position);

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};
tick();
//  tick(window.requestAnimationFrame);
//
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
