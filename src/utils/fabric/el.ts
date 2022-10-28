import {getCanvas} from "./fabric"

export default {

  requestRenderAll() {
    let canvas = getCanvas()
    canvas.requestRenderAll()
  },

  //
  upSelection() {
    let canvas = getCanvas()
    let activeObject = canvas.getActiveObject()
    canvas.bringForward(activeObject)
    this.renderCanvasLayer()
  },
  downSelection() {
    let canvas = getCanvas()
    let activeObject = canvas.getActiveObject()
    canvas.sendBackwards(activeObject)
    this.renderCanvasLayer()
  },
  bottomSelection() {
    let canvas = getCanvas()
    let activeObject = canvas.getActiveObject()
    canvas.sendToBack(activeObject)
    this.renderCanvasLayer()
  },
  topSelection() {
    let canvas = getCanvas()
    let activeObject = canvas.getActiveObject()
    canvas.bringToFront(activeObject)
    this.renderCanvasLayer()

  },

  add(image) {
    let canvas = getCanvas()
    canvas.add(image);
    this.renderCanvasLayer()
  },
  remove(image) {
    let canvas = getCanvas()
    canvas.remove(image);
    this.renderCanvasLayer()
    this.requestRenderAll()
  },
}
