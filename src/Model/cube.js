import * as THREE from "three";

class Cube {
  geometry = new THREE.BoxGeometry(1, 1, 1);

  material = new THREE.MeshBasicMaterial({
    wireframe: true,
    wireframeLinecap: "round",
    color: 0x00ff00,
  });

  animateSwitch = true;
  guiInteractiveSwitch = true;

  constructor(props) {
    this.geometry = props?.geometry || this.geometry;
    this.material = props?.material || this.material;
    if (props?.animateSwitch != undefined) {
      this.animateSwitch = !!props.animateSwitch;
    }
    if (props?.guiInteractiveSwitch != undefined) {
      this.guiInteractiveSwitch = !!props.guiInteractiveSwitch;
    }
    this.init();
  }

  init = () => {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
  };

  animate = () => {
    if (this.animateSwitch) {
      this.mesh.rotation.x += 0.01;
      this.mesh.rotation.y += 0.01;
      this.mesh.rotation.z += 0.01;
    }
  };
}

export default Cube;
