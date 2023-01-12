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
import {v4 as uuidv4} from "uuid";

// 背景图
let background: designBackgroundType = {
    src: ""
};

// 画布基本属性
let canvasMap: designCanvasMapType = {
    width: 375,
    height: 667,
    zoom: 0.5,
    opacity: false,
    filename: uuidv4(),
    title: ""
};

// 图层数量
let canvasLayer: canvasLayer = {
    componentSize: 0
};
let canvasContainer: any;
export const useDesignStore = defineStore({
    id: "design-setting",
    state: (): designCanvasType => ({
        background: background,
        canvasMap: canvasMap,
        canvasLayer: canvasLayer
    }),
    getters: {
        canvas() {
            return getCanvas();
        }
    },
    actions: {
        newCanvas() {
            this.canvasMap = canvasMap;
            this.canvasMap.filename = uuidv4();
            this.background = background;
            this.canvasLayer.componentSize = 0;
            getCanvas().clear();
        },
        load(id, data) {
            this.canvasMap = {
                width: data.width,
                height: data.height,
                zoom: data.zoom,
                opacity: data.opacity,
                filename: data.filename,
                oid: id,
                title: data.title ?? ""
            };

            getCanvas().clear();
            getCanvas().loadFromJSON(data, () => {
                this.requestRenderAll();
                this.renderCanvasLayer();
            });
        },
        amounted() {
            let bool = !!canvasContainer;
            if (bool) {
                document.querySelector(".d-canvas").innerHTML = "";
                document.querySelector(".d-canvas").append(canvasContainer);
            } else {
                canvasContainer = document.querySelector(".d-canvas .canvas-container");
            }
            return bool;
        },
        setId(id: string) {
            this.canvasMap.oid = id;
        },
        setCanvas(canvas: Object) {
            setCanvas(markRaw(canvas));
        },
        setWh() {
            let canvas = getCanvas();
            canvas.setWidth(parseInt(this.canvasMap.width));
            canvas.setHeight(parseInt(this.canvasMap.height));
            canvas.setZoom(this.canvasMap.zoom);
            this.amounted();
        },
        renderCanvasLayer() {
            let canvasLayer = this.canvasLayer;
            canvasLayer.componentSize = 0;
            let hand = null;
            if (hand) {
                clearTimeout(hand);
                hand = null;
            }
            let canvas = this.canvas;
            hand = setTimeout(function () {
                if (canvas) {
                    canvasLayer.componentSize = canvas.size();
                }
                hand = null;
            }, 100);
        },
        removeSelection() {
            let clipboard2 = this.getActiveObject();
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
