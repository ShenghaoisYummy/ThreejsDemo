import * as THREE from "three";

class CircularSector {
  geometry = new THREE.CircleGeometry(5, 32, 0, 3);
  material = new THREE.MeshBasicMaterial({
    color: 0xffff00,
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

export default CircularSector;
