<template>
    <div>
        <p id="info" style="background: #eef; width: 583px; padding: 10px; overflow: scroll; height: 40px" >
            11111111111111
           <span v-for="item in info" > {{item}}</span>
        </p>
    </div>
</template>

<script>
    export default {
        name: "touch-events",
        props: ['canvas'],
        data(){
            return {
                info:[]
            }
        },
        methods: {

        },
        mounted() {
            let self = this;
            let canvas = this.canvas;

            fabric.Image.fromURL('/public/pug_small.jpg', function (img) {
                img.scale(0.5).set({
                    left: 150,
                    top: 150,
                    angle: -15
                });
                canvas.add(img).setActiveObject(img);
            });


            // 事件在vue下好像没用
            canvas.on({
                'touch:gesture': function () {
                    console.log(11111)
                    self.info.push(' Gesture ')
                },
                'touch:drag': function () {
                    console.log(222222)
                    self.info.push(' Dragging ')
                },
                'touch:orientation': function () {
                    console.log(33333)
                    self.info.push(' Orientation ')
                },
                'touch:shake': function () {
                    console.log(44444)
                    self.info.push(' Shaking ')
                },
                'touch:longpress': function () {
                    console.log(55555)
                    self.info.push(' Longpress ')
                }
            });
        }
    }
</script>

<style scoped>

</style>
