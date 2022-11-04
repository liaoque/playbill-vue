import {fabric} from "/@/utils/fabric/fabric";
import {v4 as uuidv4} from 'uuid';
import {useDesignStoreHook} from "/@/store/modules/design";
import {saveAction} from "/@/views/design/utils/Tools/stack";


const useDesignStore = useDesignStoreHook();

const addText = () => {
  let fabricText = new fabric.Textbox("双击修改文字\n双击修改文字", {
    top: 20,
    left: 20,
    // stroke: "#6F3636",
    strokeWidth: 1,
    centeredRotation: true
  });
  fabricText.component_type = 'text'
  fabricText.uuid = uuidv4()
  useDesignStore.add(fabricText);
  saveAction();
}

function addPic() {
  new fabric.Image.fromURL("./public/sun.png", function (image) {
    image.set({

      // objectCaching: false,
      component_type: 'pic',
      // stroke: "lightgreen",
      strokeWidth: 1,
      centeredRotation: true,
      uuid: uuidv4()
    });
    useDesignStore.add(image);
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

    // objectCaching: false,
    // stroke: "lightgreen",
    strokeWidth: 1,
    component_type: 'rect',
    centeredRotation: true,
    uuid: uuidv4()
  });
  useDesignStore.add(rect);
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
    centeredRotation: true,
    strokeWidth: 1,
    uuid: uuidv4()
  });
  useDesignStore.add(rect);
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
    centeredRotation: true,
    // objectCaching: false,
    // stroke: "lightgreen",
    // strokeWidth: 1,
    uuid: uuidv4()
  });
  useDesignStore.add(rect);
  saveAction();
}


export {
  addText,
  addRect,
  addCircular,
  addTriangle,
  addPic
}