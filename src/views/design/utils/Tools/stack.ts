import {ref} from "vue";
import {useDesignStoreHook} from "/@/store/modules/design";

const useDesignStore = useDesignStoreHook();

let undoStack = [];
let redoStack = [];
let saveHandle = null;
let beforeAction = null;
let maxLength = 20;
let undoStackLength = ref(0);
let stackIndex = ref(0);

function saveAction(e?: any) {
  clearTimeout(saveHandle)
  let beforeAction = useDesignStore.canvas.toDatalessJSON(["clipPath", "eraser", "component_type", "uuid"])
  saveHandle = setTimeout(() => {
    undoStack.push(beforeAction)
    if (undoStack.length > maxLength) {
      undoStack.shift();
    }
    undoStackLength.value = stackIndex.value = undoStack.length
    redoStack = [];
  },0)
}

function redoAction() {
  if (!redoStack.length) {
    return
  }
  let json = redoStack[redoStack.length - 1]
  useDesignStore.canvas.loadFromJSON(json, useDesignStore.canvas.renderAll.bind(useDesignStore.canvas));
  undoStack.push(json)
  redoStack.pop()
  stackIndex.value = undoStack.length
}

function undoAction() {
  if (undoStack.length == 1) {
    return
  }
  let json = undoStack.pop()
  redoStack.push(json)
  json = undoStack[undoStack.length - 1]
  useDesignStore.canvas.loadFromJSON(json, useDesignStore.canvas.renderAll.bind(useDesignStore.canvas));
  stackIndex.value = undoStack.length
}


function doAction(i) {
  if (i > undoStack.length || i < 0) {
    return;
  }
  stackIndex.value = i;
  let json = undoStack[stackIndex.value - 1]
  useDesignStore.canvas.loadFromJSON(json, useDesignStore.canvas.renderAll.bind(useDesignStore.canvas));
}

export {
  saveAction,
  redoAction,
  undoAction,
  doAction,
  stackIndex,
  undoStackLength,
}
