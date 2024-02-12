import "./style.scss";

import * as THREE from "three";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  antialias: true,
});

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.domElement.id = "threejs_scene";

document.querySelector("#app").appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({
  wireframe: true,
  wireframeLinecap: "round",
  color: 0x00ff00,
});
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

camera.position.z = 5;

renderer.render(scene, camera);

cube.rotation.x = 0.5;

cube.rotation.y = 0.5;

const handle = setInterval(() => {
  cube.rotation.x += 0.5;
  cube.rotation.y += 0.5;
  cube.rotation.z += 0.5;

  renderer.render(scene, camera);
}, 200);

// function animate() {
//   requestAnimationFrame(animate);
//   cube.rotation.x += 0.5;
//   cube.rotation.y += 0.5;
//   cube.rotation.z += 0.5;

//   renderer.render(scene, camera);
// }

animate();
