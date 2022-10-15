import {markRaw} from "vue";
import {useDesignStoreHook} from "/@/store/modules/design";

const useDesignStore = useDesignStoreHook();

let undoStack = [];
let redoStack = [];

function saveAction(e) {
  console.log(undoStack.push(useDesignStore.canvas.toDatalessJSON(["clipPath", "eraser", "component_type", "uuid"])))
  redoStack = [];
}

function redoAction() {
  doAction(redoStack, undoStack)
}

function doAction(undoStack, redoStack) {
  if (!undoStack.length) {
    return
  }
  let json = undoStack[undoStack.length - 1]
  if (json) {
    useDesignStore.canvas.loadFromJSON(json, () => {
      useDesignStore.canvas.renderAll.bind(useDesignStore.canvas)
    });
    redoStack.push(json)
    undoStack.pop()
  }
}

function undoAction() {
  doAction(undoStack, redoStack)
}

export {
  saveAction,
  redoAction,
  undoAction,
}
