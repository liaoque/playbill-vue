<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <button v-for="item in ['panel0','erasing','custom-filter-swap-color',3,4,5,6,7,8,9]" @click="panel_name=item">{{ item }}</button>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    left
                </el-aside>
                <el-main>

                    <canvas id="canvas" width="500" height="650"></canvas>

                    <erasing :canvas="canvas" v-if="panel_name == 'erasing'" />
                    <custom-filter-swap-color :canvas="canvas" v-if="panel_name == 'custom-filter-swap-color'" />

                </el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script>

    import erasing from "./components/erasing.vue";
    import customFilterSwapColor from "./components/custom-filter-swap-color.vue";
    import {ref} from "vue"

    export default {
        components: {
            customFilterSwapColor,
            erasing,
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
