import "./style.scss";

import Three_App from "./src/App/threeApp";
import Cube from "./src/Model/cube";
import CircularSector from "./src/Model/circularSector";

const app = new Three_App();
const cube = new Cube({ animateSwitch: true });
const cube2 = new Cube({ animateSwitch: true, name: "Cube2" });

const circular_sector = new CircularSector();

app.addModel(cube, "Cube1");
app.addModel(cube2);
