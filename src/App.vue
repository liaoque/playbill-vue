<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <button v-for="item in [
                    'panel0','erasing','custom-filter-swap-color','duotone-filter','text-on-paths',
                    5,6,7,8,9
                    ]" @click="panel_name=item">{{ item }}</button>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    left
                </el-aside>
                <el-main>

                    <canvas id="canvas" width="500" height="650"></canvas>

                    <!-- 橡皮擦 -->
                    <erasing :canvas="canvas" v-if="panel_name == 'erasing'" />

                    <!-- 替换颜色 -->
                    <custom-filter-swap-color :canvas="canvas" v-if="panel_name == 'custom-filter-swap-color'" />

                    <!-- 蒙版 -->
                    <duotone-filter :canvas="canvas" v-if="panel_name == 'duotone-filter'" />

                    <!-- 添加文字 -->
                    <text-on-paths :canvas="canvas" v-if="panel_name == 'text-on-paths'" />

                </el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script>

    import erasing from "./components/erasing.vue";
    import customFilterSwapColor from "./components/custom-filter-swap-color.vue";
    import duotoneFilter from "./components/duotone-filter.vue";
    import textOnPaths from "./components/text-on-paths.vue";

    export default {
        components: {
            customFilterSwapColor,
            erasing,
            duotoneFilter,
            textOnPaths,
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
            this.canvas = new fabric.Canvas('canvas');
            // console.log(canvas)

        }

    }

</script>
