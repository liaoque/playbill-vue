import {defineStore} from "pinia";
import {store} from "/@/store";
import {designCanvasType, designBackgroundType, designCanvasMapType, canvasLayer} from "./types";
import {fabric, getCanvas, setCanvas} from "/@/utils/fabric/fabric";
import fabricBackground from "/@/utils/fabric/background";
import fabricEl from "/@/utils/fabric/el";
import fabricActiveEl from "/@/utils/fabric/activeEl";
import {markRaw, ref} from "vue";
import {any} from "vue-types";
import {saveAction} from "/@/views/design/utils/Tools/stack";

let background: designBackgroundType = {
  src: ""
};

let canvasMap: designCanvasMapType = {
  width: 375,
  height: 667,
  zoom: 0.5,
  opacity: false,
};

let canvasLayer: canvasLayer = {
  componentSize: 0
}

export const useDesignStore = defineStore({
  id: "design-setting",
  state: (): designCanvasType => ({
    background: background,
    canvasMap: canvasMap,
    canvasLayer: canvasLayer,
  }),
  getters: {
    canvas(){
      return getCanvas()
    }
  },
  actions: {
    setId(id: string) {
      this.id = id;
    },
    setCanvas(canvas: Object) {
      setCanvas(markRaw(canvas));
    },
    setWh() {
      let canvas = getCanvas()
      canvas.setWidth(parseInt(this.canvasMap.width));
      canvas.setHeight(parseInt(this.canvasMap.height));
      canvas.setZoom(this.canvasMap.zoom);
    },
    renderCanvasLayer() {
      let canvasLayer = this.canvasLayer
      canvasLayer.componentSize = 0;
      let hand = null
      if (hand) {
        clearTimeout(hand);
        hand = null
      }
      let canvas = this.canvas
      hand = setTimeout(function () {
        if (canvas) {
          canvasLayer.componentSize = canvas.size()
        }
        hand = null
      }, 100);
    },
    removeSelection() {
      let clipboard2 = this.getActiveObject()
      if (!clipboard2) {
        return;
      }
      this.remove(clipboard2);
    },
    ...fabricBackground,
    ...fabricEl,
    ...fabricActiveEl
  }
});

export function useDesignStoreHook() {
  return useDesignStore(store);
}
