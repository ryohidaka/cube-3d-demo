import "./style.css";
import { generateCubeFaces } from "./components/cube";
import { init, onRotate, getFaceByIndex } from "cube-3d-js";
import { Config } from "cube-3d-js/dist/utils/types";

// Get the HTML container element
const appElement = document.querySelector<HTMLDivElement>("#app");

// Generate Cube-3D container element
const cube3DElement = document.createElement("div");
cube3DElement.id = "cube-3d";
cube3DElement.innerHTML = generateCubeFaces();

// Initialize Cube-3D within the container element
appElement!.appendChild(cube3DElement);

const config: Config = {
  width: 500,
  height: 500,
};

init("cube-3d", config);

// Set up event listener for rotation
onRotate((index, previousIndex) => {
  console.log(`Face index changed from: ${previousIndex} to: ${index}`);

  // Change the current face to red
  getFaceByIndex(index).style.color = "red";

  // If there was a previous face, change it to blue
  if (previousIndex) {
    getFaceByIndex(previousIndex).style.color = "blue";
  }
});
