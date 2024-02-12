import * as THREE from "three";

class Cube {
  geometry = new THREE.BoxGeometry(1, 1, 1);
  material = new THREE.MeshBasicMaterial({
    wireframe: true,
    wireframeLinecap: "round",
    color: 0x00ff00,
  });

  constructor(geometry, material) {
    this.init(geometry, material);
  }

  init = (geometry, material) => {
    if (geometry) this.geometry = geometry;
    if (material) this.material = material;
    this.mesh = new THREE.Mesh(this.geometry, this.material);
  };

  animate = () => {
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.01;
    this.mesh.rotation.z += 0.01;
  };
}

export default Cube;
