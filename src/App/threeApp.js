import * as THREE from "three";

class Three_App {
  renderer = new THREE.WebGLRenderer({
    antialias: true,
  });
  static instance = null;
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  constructor() {
    if (Three_App.instance) return Three_App.instance;
    Three_App.instance = this;
    this.init();
    this.animate();
  }

  init = () => {
    this.rendererSetting();
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

  cameraSetting = () => {
    this.camera.position.z = 5;
  };

  render = () => {
    this.renderer.render(this.scene, this.camera);
  };

  animate = () => {
    requestAnimationFrame(this.animate);
    if (this.model?.animate) this.model.animate();
    this.render();
  };

  addModel = (model) => {
    this.model = model;
    if (model?.mesh) this.scene.add(model.mesh);
  };
}

export default Three_App;
