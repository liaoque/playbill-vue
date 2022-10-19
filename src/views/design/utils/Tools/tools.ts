import {fabric} from "/@/utils/fabric";
import {v4 as uuidv4} from 'uuid';
import {useDesignStoreHook} from "/@/store/modules/design";
import {saveAction} from "/@/views/design/utils/Tools/stack";


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
  saveAction();
}

function addPic() {
  new fabric.Image.fromURL("./public/sun.png", function (image) {
    image.set({
      scaleX: 0.5,
      scaleY: 0.5,
      // objectCaching: false,
      component_type: 'pic',
      // stroke: "lightgreen",
      strokeWidth: 1,
      uuid: uuidv4()
    });
    useDesignStore.canvas.add(image);
    saveAction();
  });
}

function addRect() {
  let rect = new fabric.Rect({
    left: 100,
    top: 50,
    fill: "#CBCD2A",
    width: 200,
    height: 100,
    // scaleX: 0.5,
    // scaleY: 0.5,
    // objectCaching: false,
    // stroke: "lightgreen",
    strokeWidth: 1,
    component_type: 'rect',
    uuid: uuidv4()
  });
  useDesignStore.canvas.add(rect);
  saveAction();
}

function addCircular() {
  let rect = new fabric.Circle({
    radius: 50,
    left: 100,
    top: 50,
    fill: "#CBCD2A",
    component_type: 'circle',
    // objectCaching: false,
    // stroke: "lightgreen",
    strokeWidth: 1,
    uuid: uuidv4()
  });
  useDesignStore.canvas.add(rect);
  saveAction();
}


function addTriangle() {
  let rect = new fabric.Triangle({
    width: 100,
    height: 100,
    left: 100,
    top: 50,
    fill: "#CBCD2A",
    component_type: 'triangle',
    // objectCaching: false,
    // stroke: "lightgreen",
    // strokeWidth: 1,
    uuid: uuidv4()
  });
  useDesignStore.canvas.add(rect);
  saveAction();
}


export {
  addText,
  addRect,
  addCircular,
  addTriangle,
  addPic
}
