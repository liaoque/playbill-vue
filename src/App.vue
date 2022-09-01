<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <button v-for="item in [
                    'panel0','erasing','custom-filter-swap-color','duotone-filter','text-on-paths',
                    'build-minimap','custom-controls-polygon','stroke-uniform','super-sub-script',9
                    ]" @click="panel_name=item">{{ item }}</button>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    left
                </el-aside>
                <el-main>

                    <canvas id="canvas" width="500" height="650"></canvas>

                    <!-- 添加 -->
                    <panel0 :canvas="canvas" v-if="panel_name == 'panel0'" />

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
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script>

    import panel0 from "./components/panel0.vue";
    import erasing from "./components/erasing.vue";
    import customFilterSwapColor from "./components/custom-filter-swap-color.vue";
    import duotoneFilter from "./components/duotone-filter.vue";
    import textOnPaths from "./components/text-on-paths.vue";
    import buildMinimap from "./components/build-minimap.vue";
    import customControlsPolygon from "./components/custom-controls-polygon.vue";
    import strokeUniform from "./components/stroke-uniform.vue";
    import superSubScript from "./components/super-sub-script.vue";

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
        },
        data: () => {
            return {
                panel_name: '',
                canvas: null
            }
        },
        methods: {

        },
        mounted() {
            let canvas = this.canvas = new fabric.Canvas('canvas');
            // console.log(canvas)





        }

    }

</script>
