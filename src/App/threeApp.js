import * as THREE from "three";
import Stats from "three/examples/jsm/libs/stats.module.js";
import { GUI } from "dat.gui";
class Three_App {
  renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  static instance = null;
  scene = new THREE.Scene();
  gui = null;

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  modelList = [];

  stats = new Stats();

  constructor() {
    if (Three_App.instance) return Three_App.instance;
    Three_App.instance = this;
    this.init();
    this.animate();
    this.modelAnimate();
  }

  init = () => {
    this.rendererSetting();
    this.statsSetting();
    this.cameraSetting();
  };

  rendererSetting = () => {
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.domElement.id = "threejs_scene";
    document.querySelector("#app")?.appendChild(this.renderer.domElement);

    window.addEventListener("resize", (e) => {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });

    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
  };

  statsSetting = () => {
    this.stats.showPanel(1);
    document.querySelector("#app")?.appendChild(this.stats.dom);
  };

  cameraSetting = () => {
    this.camera.position.z = 3;
  };

  render = () => {
    this.renderer.render(this.scene, this.camera);
  };

  animate = () => {
    this.stats.begin();
    requestAnimationFrame(this.animate);
    this.modelAnimate();
    this.render();
    this.stats.end();
    this.stats.update();
  };

  modelAnimate = () => {
    this.modelList.forEach((model) => {
      if (model?.animate) model.animate();
    });
  };

  addMesh = (mesh) => {
    this.scene.add(mesh);
  };

  addModel = (model, name) => {
    this.modelList.push(model);
    if (model?.mesh) this.scene.add(model.mesh);

    this.gui = model.guiInteractive(this.gui, name);
  };

  addModelList = (list = []) => {
    if (Array.isArray(list) && list.length > 0) {
      list.forEach((element) => {
        this.addModel(element.model, element.name);
      });
    }
  };
}

export default Three_App;
