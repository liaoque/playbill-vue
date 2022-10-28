import {defineStore} from "pinia";
import {store} from "/@/store";
import {designCanvasType, designBackgroundType, designCanvasMapType, canvasLayer} from "./types";
import {fabric, fabric2Method} from "/@/utils/fabric";
import {markRaw, ref} from "vue";
import {any} from "vue-types";
import {saveAction} from "/@/views/design/utils/Tools/stack";

let background: designBackgroundType = {
  src: ""
};

let canvasMap: designCanvasMapType = {
  width: 375,
  height: 667
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
    getBackground(): designBackgroundType {
      return this.background;
    },
    getCanvasMap(): designCanvasMapType {
      return this.canvasMap;
    },
    getActiveSelection() {
      return this.activeSelection;
    },
    getCanvas() {
      return this.canvas;
    },
  },
  actions: {
    setId(id: string) {
      this.id = id;
    },
    setCanvas(canvas: Object) {
      this.canvas = markRaw(canvas);
    },
    setActiveSelection(activeSelection?: any) {
      this.activeSelection = markRaw(activeSelection || this.canvas.getActiveObject());
    },
    setWh() {
      this.canvas.setWidth(parseInt(this.canvasMap.width));
      this.canvas.setHeight(parseInt(this.canvasMap.height));
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
        if(canvas){
          canvasLayer.componentSize = canvas.size()
        }
        hand = null
      }, 100);
    },
    ...fabric2Method
  }
});

export function useDesignStoreHook() {
  return useDesignStore(store);
}
