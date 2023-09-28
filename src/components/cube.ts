export function generateCubeFaces() {
  const faces = [];
  for (let i = 1; i <= 4; i++) {
    faces.push(`<div class="cube-3d-face"><h1>${i}</h1></div>`);
  }
  return faces.join("");
}
