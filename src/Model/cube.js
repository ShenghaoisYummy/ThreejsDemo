import * as THREE from "three";
import { GUI } from "dat.gui";

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

  guiInteractive = (gui, name = "Cube") => {
    if (!this.guiInteractiveSwitch) return;

    gui ||= new GUI();
    const cuberFolder = gui.addFolder(name);
    this.setScale(cuberFolder);
    this.setSwitchOnOff(cuberFolder);
    cuberFolder.open();
    return gui;
  };

  setScale = (folder) => {
    folder?.add(this.mesh.scale, "x", 1, 2);
    folder?.add(this.mesh.scale, "y", 1, 2);
    folder?.add(this.mesh.scale, "z", 1, 2);
  };

  setSwitchOnOff = (folder) => {
    this.switchName = folder
      ?.add(this.buttonFunc, "setSwitchOnOff")
      .name("SWITCH: ON");
  };

  buttonFunc = {
    setSwitchOnOff: () => {
      this.animateSwitch = !this.animateSwitch;
      if (this.animateSwitch) {
        this.mesh.material.color.set("#36cfc9");
        this.switchName.name("SWITCH: ON");
      } else {
        this.mesh.material.color.set("#f5222d");
        this.switchName.name("SWITCH: OFF");
      }
    },
  };
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
