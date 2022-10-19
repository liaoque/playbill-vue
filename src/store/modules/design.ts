import {defineStore} from "pinia";
import {store} from "/@/store";
import {designCanvasType, designBackgroundType, designCanvasMapType} from "./types";
import {fabric} from "/@/utils/fabric";
import {markRaw} from "vue";
import {any} from "vue-types";

let background: designBackgroundType = {
  src: ""
};

let canvasMap: designCanvasMapType = {
  width: 375,
  height: 667
};


export const useDesignStore = defineStore({
  id: "design-setting",
  state: (): designCanvasType => ({
    background: background,
    canvasMap: canvasMap,
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
    }
  }
});

export function useDesignStoreHook() {
  return useDesignStore(store);
}
