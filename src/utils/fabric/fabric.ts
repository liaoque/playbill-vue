import fabric2 from 'fabric-with-erasing';

let canvas;

export const fabric = fabric2.fabric;

export function getCanvas() {
  return canvas;
};

export function setCanvas(canvas2) {
  return canvas = canvas2;
};
