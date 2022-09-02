<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <button v-for="item in [
                    'panel0','erasing','custom-filter-swap-color','duotone-filter','text-on-paths',
                    'build-minimap','custom-controls-polygon','stroke-uniform','super-sub-script','events'
                    ,'lanczos-webgl'  ,'loadfonts'  ,'copypaste', 'manage-selection', 'touch-events'
                    ]" @click="panel_name=item">{{ item }}</button>

                <div>
                    <button type="button" @click="toJSON()">toJSON</button>
                    <button type="button" @click="downloadImage()">to Image</button>
                    <button type="button" @click="downloadSVG()">toSVG</button>
                </div>
            </el-header>
            <el-container>
                <el-aside width="100px">
                    left
                </el-aside>
                <el-main style="display: flex">

                    <canvas id="canvas" width="500" height="650" ></canvas>

                    <!-- 添加 -->
                    <panel0 :canvas="canvas" v-if="panel_name == 'panel0'"  />

                    <!-- 橡皮擦 -->
                    <erasing :canvas="canvas" v-if="panel_name == 'erasing'" />

                    <!-- 替换颜色 -->
                    <custom-filter-swap-color :canvas="canvas" v-if="panel_name == 'custom-filter-swap-color'" />

                    <!-- 蒙版 -->
                    <duotone-filter :canvas="canvas" v-if="panel_name == 'duotone-filter'" />

                    <!-- 添加文字 -->
                    <text-on-paths :canvas="canvas" v-if="panel_name == 'text-on-paths'" />

                    <!-- 添加文字 -->
                    <build-minimap :canvas="canvas" v-if="panel_name == 'build-minimap'" />

<!--                    自定义形状-->
                    <custom-controls-polygon :canvas="canvas" v-if="panel_name == 'custom-controls-polygon'" />

<!--                    控制 stroke 宽度，锁定或者自定义-->
                    <stroke-uniform :canvas="canvas" v-if="panel_name == 'stroke-uniform'" />

                    <!--      选中文字后，点击按钮，对应文字会上移或者下移              -->
                    <super-sub-script :canvas="canvas" v-if="panel_name == 'super-sub-script'" />

                    <!-- 打印事件 -->
                    <events :canvas="canvas" v-if="panel_name == 'events'" />

<!--                    缩略图-->
                    <lanczos-webgl :canvas="canvas" v-if="panel_name == 'lanczos-webgl'" />

<!--                    字体-->
                    <loadfonts :canvas="canvas" v-if="panel_name == 'loadfonts'" />

                    <!--                    复制，黏贴-->
                    <copypaste :canvas="canvas" v-if="panel_name == 'copypaste'" />

                    <!--           选择管理         -->
                    <manage-selection :canvas="canvas" v-if="panel_name == 'manage-selection'" />

                    <!--           触摸事件 ：目前vue        -->
                    <touch-events :canvas="canvas" v-if="panel_name == 'touch-events'" />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<style>
    .el-header{
        --el-header-height:100%
    }
</style>


<script>
    import { markRaw } from 'vue'

    import panel0 from "./components/panel0.vue";
    import erasing from "./components/erasing.vue";
    import customFilterSwapColor from "./components/custom-filter-swap-color.vue";
    import duotoneFilter from "./components/duotone-filter.vue";
    import textOnPaths from "./components/text-on-paths.vue";
    import buildMinimap from "./components/build-minimap.vue";
    import customControlsPolygon from "./components/custom-controls-polygon.vue";
    import strokeUniform from "./components/stroke-uniform.vue";
    import superSubScript from "./components/super-sub-script.vue";
    import events from "./components/events.vue";
    import lanczosWebgl from "./components/lanczos-webgl.vue";
    import loadfonts from "./components/loadfonts.vue";
    import copypaste from "./components/copypaste.vue";
    import manageSelection from "./components/manage-selection.vue";
    import touchEvents from "./components/touch-events.vue";

    export default {
        components: {
            panel0,
            customFilterSwapColor,
            erasing,
            duotoneFilter,
            textOnPaths,
            buildMinimap,
            customControlsPolygon,
            strokeUniform,
            superSubScript,
            events,
            lanczosWebgl,
            loadfonts,
            copypaste,
            manageSelection,
            touchEvents,
        },
        data: () => {
            return {
                panel_name: '',
                canvas: null
            }
        },
        methods: {
            downloadImage() {
                const ext = "png";
                let canvas = this.canvas;
                const base64 = canvas.toDataURL({
                    format: ext,
                    enableRetinaScaling: true
                });
                const link = document.createElement("a");
                link.href = base64;
                link.download = `eraser_example.${ext}`;
                link.click();
            },

            downloadSVG() {
                let canvas = this.canvas;
                const svg = canvas.toSVG();
                const a = document.createElement("a");
                const blob = new Blob([svg], {type: "image/svg+xml"});
                const blobURL = URL.createObjectURL(blob);
                a.href = blobURL;
                a.download = "eraser_example.svg";
                a.click();
                URL.revokeObjectURL(blobURL);
            },

            toJSON() {
                let canvas = this.canvas;
                const json = canvas.toDatalessJSON(["clipPath", "eraser"]);
                const out = JSON.stringify(json, null, "\t");
                const blob = new Blob([out], {type: "text/plain"});
                const clipboardItemData = {[blob.type]: blob};
                try {
                    navigator.clipboard &&
                    (navigator.clipboard.write([
                        new ClipboardItem(clipboardItemData)
                    ]));
                } catch (error) {
                    console.log(error);
                }
                const blobURL = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = blobURL;
                a.download = "eraser_example.json";
                a.click();
                URL.revokeObjectURL(blobURL);
            }
        },
        mounted() {
            let canvas = this.canvas = markRaw(new fabric.Canvas('canvas'));
            // console.log(canvas)





        }

    }

</script>
