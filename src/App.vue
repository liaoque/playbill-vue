<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <button v-for="item in [0,1,2,3,4,5,6,7,8,9]" @click="panel_name='panel'+item">panel{{ item }}</button>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    left
                </el-aside>
                <el-main>

                    <canvas id="canvas" width="500" height="650"></canvas>

                    <panel1 :canvas="canvas" v-if="panel_name == 'panel1'" />

                </el-main>
            </el-container>
        </el-container>
    </div>
</template>


<script>

    import panel1 from "./components/panel1.vue";
    import {ref} from "vue"

    export default {
        components: {
            panel1,
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
