import fabric2 from 'fabric-with-erasing';

let fabricMethod = {
  setBackgroundColor(color: string) {
    this.canvas.setBackgroundColor(color, this.canvas.renderAll.bind(this.canvas));
  },
  setBackground(src: string) {
    // this.removeBackground()
    let self = this
    self.canvas.setBackgroundImage(src, self.canvas.renderAll.bind(this.canvas), {
      originX: 'left',
      originY: 'top',
      scaleX: 0.5,
      scaleY: 0.5,
      crossOrigin: "anonymous"
    });
  },
  removeBackground() {
    this.canvas.setBackgroundImage(null, this.canvas.renderAll.bind(this.canvas));
  },
  add(image) {
    this.canvas.add(image);
    this.renderCanvasLayer()
  },
  discardActiveObject() {
    this.canvas.discardActiveObject();
  },
  setActiveObject(image) {
    this.canvas.setActiveObject(image);
  },
  requestRenderAll() {
    this.canvas.requestRenderAll()
  },
  upSelection() {
    let activeObject = this.canvas.getActiveObject()
    this.canvas.bringForward(activeObject)
    this.renderCanvasLayer()
  },
  downSelection() {
    let activeObject = this.canvas.getActiveObject()
    this.canvas.sendBackwards(activeObject)
    this.renderCanvasLayer()
  },
  bottomSelection() {
    let activeObject = this.canvas.getActiveObject()
    this.canvas.sendToBack(activeObject)
    this.renderCanvasLayer()
  },
  topSelection() {
    let activeObject = this.canvas.getActiveObject()
    this.canvas.bringToFront(activeObject)
    this.renderCanvasLayer()

  },

  removeSelection() {
    let clipboard2 = this.canvas.getActiveObject()
    if (!clipboard2) {
      return;
    }
    this.remove(clipboard2);
  },
  remove(image) {
    this.canvas.remove(image);
    this.renderCanvasLayer()
    this.requestRenderAll()
  },
}

export const fabric = fabric2.fabric;
export const fabric2Method = fabricMethod;
