import {fabric} from "/@/utils/fabric";
import {v4 as uuidv4} from 'uuid';
import {useDesignStoreHook} from "/@/store/modules/design";
const useDesignStore = useDesignStoreHook();

const addText = () => {
  let fabricText = new fabric.IText("双击修改文字", {
    top: 20,
    left: 20,
    // stroke: "#6F3636",
    strokeWidth: 1,
  });
  fabricText.component_type = 'text'
  fabricText.uuid = uuidv4()
  useDesignStore.canvas.add(fabricText);
}

function addPic() {
  new fabric.Image.fromURL("./public/sun.png", function (image) {
    image.set({
      scaleX: 0.5,
      scaleY: 0.5,
      objectCaching: false,
      component_type: 'pic',
      // stroke: "lightgreen",
      strokeWidth: 1,
      uuid: uuidv4()
    });
    useDesignStore.canvas.add(image);
  });
}

function addRect() {
  let rect = new fabric.Rect({
    left: 100,
    top: 50,
    fill: "yellow",
    width: 200,
    height: 100,
    scaleX: 0.5,
    scaleY: 0.5,
    // objectCaching: false,
    // stroke: "lightgreen",
    strokeWidth: 1,
    component_type: 'rect',
    uuid: uuidv4()
  });
  useDesignStore.canvas.add(rect);
}

function addCircular() {
  let rect = new fabric.Circle({
    radius: 50,
    left: 100,
    top: 50,
    fill: "green",
    component_type: 'circle',
    // objectCaching: false,
    // stroke: "lightgreen",
    strokeWidth: 1,
    uuid: uuidv4()
  });
  useDesignStore.canvas.add(rect);
}


function addTriangle() {
  let rect = new fabric.Triangle({
    width: 100,
    height: 100,
    left: 100,
    top: 50,
    fill: "red",
    component_type: 'triangle',
    // objectCaching: false,
    // stroke: "lightgreen",
    // strokeWidth: 1,
    uuid: uuidv4()
  });
  useDesignStore.canvas.add(rect);
}





export {
  addText,
  addRect,
  addCircular,
  addTriangle,
  addPic
}
