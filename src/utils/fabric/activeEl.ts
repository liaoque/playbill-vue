import {getCanvas} from "/@/utils/fabric/fabric";
import {markRaw} from "vue";

let activeSelection = null;

export default {
  getActiveObject() {
    let canvas = getCanvas()
    return canvas.getActiveObject()
  },
  discardActiveObject() {
    let canvas = getCanvas()
    canvas.discardActiveObject();
  },
  setActiveObject(image) {
    let canvas = getCanvas()
    canvas.setActiveObject(image);
  },
  getActiveSelection() {
    return activeSelection;
  },
  setActiveSelection(activeSelection?: any) {
    activeSelection = markRaw(activeSelection || this.getActiveObject());
  },
}
