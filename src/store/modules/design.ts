import { defineStore } from "pinia";
import { store } from "/@/store";
import { designCanvasType, designBackgroundType, designCanvasMapType } from "./types";
import { fabric } from "/@/utils/fabric";

let background: designBackgroundType = {
  src: ''
}

let canvasMap: designCanvasMapType = {
  width: 375,
  height: 667,
}

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
      this.canvas.setWidth(parseInt(this.canvasMap.width))
      this.canvas.setHeight(parseInt(this.canvasMap.height))
    },
    setBackground(src: string) {
      let self = this
      this.background.instance = new fabric.Image.fromURL(src, function(image: any) {
        // image.
        image.set({
          // width: 200,
          // height: 100,
          // radius: 200,
          //
          scaleX: 0.5,
          scaleY: 0.5,
          objectCaching: false,
          stroke: 'lightgreen',
          strokeWidth: 4,
        })
        // image.scaleToWidth(200);
        self.canvas.add(image);

      }, {
        crossOrigin: 'anonymous',
      })
    }
  }
});

export function useDesignStoreHook() {
  return useDesignStore(store);
}
