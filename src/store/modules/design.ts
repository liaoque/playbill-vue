import { defineStore } from "pinia";
import { store } from "/@/store";
import { designCanvasType, designBackgroundType, designCanvasMapType } from "./types";
import { fabric } from "/@/utils/fabric";
import { markRaw } from "vue";

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
    canvasMap: canvasMap
  }),
  getters: {
    getBackground(): designBackgroundType {
      return this.background;
    },
    getCanvasMap(): designCanvasMapType {
      return this.canvasMap;
    },

    getHiddenSideBar() {
      return this.HiddenSideBar;
    }
  },
  actions: {
    setCanvas(canvas: Object) {
      this.canvas = canvas;
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
      self.canvas.setBackgroundImage(src, (obj)=>{
        self.canvas.renderAll(obj)
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
