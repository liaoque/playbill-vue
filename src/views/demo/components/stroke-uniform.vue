<template>
    <el-button id="uniform" @click="toggleUniform">Toggle stroke uniform</el-button>
</template>

<script>
    export default {
        name: "stroke-uniform",
        props:['canvas'],
        methods:{
            toggleUniform() {
                let canvas = this.canvas
                let aObject = canvas.getActiveObject();
                if (aObject.type === 'activeSelection') {
                    aObject.getObjects().forEach(function(obj) {
                      // 是否锁定笔触宽度
                        obj.set('strokeUniform', !obj.strokeUniform);
                    });
                } else {
                    aObject.set('strokeUniform', !aObject.strokeUniform);
                }
                canvas.requestRenderAll();
            }
        },
        mounted(){

            fabric.Object.prototype.noScaleCache = false;


            let canvas = this.canvas
// create a rectangle object
            let rect = new fabric.Rect({
                left: 100,
                top: 50,
                fill: '#D81B60',
                width: 50,
                height: 50,
                strokeWidth: 6,
                stroke: "#880E4F",
                rx: 10,
                ry: 10,
                angle: 45,
                scaleX: 3,
                scaleY: 3,
                hasControls: true
            });

            canvas.add(rect);

            let circle1 = new fabric.Circle({
                radius: 65,
                fill: '#039BE5',
                left: 0,
                stroke: 'red',
                strokeWidth: 6
            });

            let circle2 = new fabric.Circle({
                radius: 65,
                fill: '#4FC3F7',
                left: 110,
                opacity: 0.7,
                stroke: 'blue',
                strokeWidth: 6,
                strokeUniform: true
            });

            canvas.add(circle1);
            canvas.add(circle2);

        }
    }
</script>

<style scoped>

</style>
