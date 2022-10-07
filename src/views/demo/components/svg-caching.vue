<template>
    <div>
        <el-button id="cache" @click="cache">toggle cache</el-button>
    </div>
</template>

<script>
    export default {
        name: "svg-caching",
        props: ['canvas'],
        methods: {

            cache() {
                let canvas = this.canvas;
                fabric.Object.prototype.objectCaching = !fabric.Object.prototype.objectCaching;
                canvas.forEachObject(function (obj, i) {
                    obj.set('dirty', true);
                });
            }

        },
        mounted() {
            let canvas = this.canvas;
            canvas.setHeight(1000);
            fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';
            fabric.Object.prototype.transparentCorners = false;
            fabric.Object.prototype.objectCaching = true;

            fabric.loadSVGFromURL('/public/tiger2.svg', function (objects, options) {
                let obj = fabric.util.groupSVGElements(objects, options);
                obj.scale(0.5);

                // load shapes
                for (let i = 1; i < 4; i++) {
                    for (let j = 1; j < 6; j++) {
                        obj.clone(function (i, j) {
                            return function (clone) {
                                clone.set({
                                    left: i * 200 - 100,
                                    top: j * 200 - 100
                                });
                                canvas.add(clone);
                                animate(clone);
                            };
                        }(i, j));
                    }
                }
            });

            function animate(obj) {
                obj.rotate(0).animate({angle: 360}, {
                    duration: 3000,
                    onComplete: function () {
                        animate(obj)
                    },
                    easing: function (t, b, c, d) {
                        return c * t / d + b
                    }
                });
            }

            (function render() {
                canvas.renderAll();
                fabric.util.requestAnimFrame(render);
            })();

        }
    }
</script>

<style scoped>

</style>
