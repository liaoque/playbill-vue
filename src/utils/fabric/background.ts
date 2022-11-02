import {getCanvas} from "./fabric"

export default {
  setBackgroundColor(color: string) {
    let canvas = getCanvas()
    canvas.setBackgroundColor(color, canvas.renderAll.bind(canvas));
  },
  setBackground(src: string) {
    // this.removeBackground()
    let canvas = getCanvas()
    canvas.setBackgroundImage(src, canvas.renderAll.bind(canvas), {
      originX: 'left',
      originY: 'top',
      crossOrigin: "anonymous"
    });
  },
  removeBackground() {
    let canvas = getCanvas()
    canvas.setBackgroundImage(null, canvas.renderAll.bind(canvas));
  },
}
