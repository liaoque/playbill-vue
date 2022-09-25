<template>
    <div class="block">
        <h3>Modification on move</h3>
        <canvas id="c12" width="200" height="200"></canvas>
    </div>
</template>

<script>
    export default {
        name: "modification-on-move"
        , props: ['canvases'],
        mounted() {
            var canvas = new fabric.Canvas('c12');
            canvas.add(new fabric.Rect({left: 110, top: 110, fill: '#f0f', width: 50, height: 50}));
            canvas.add(new fabric.Rect({left: 50, top: 50, fill: '#77f', width: 40, height: 40}));

            canvas.forEachObject(function (o) {
                o.hasBorders = o.hasControls = false;
            });

            canvas.hoverCursor = 'pointer';

            function animate(e, dir) {
                if (e.target) {
                    fabric.util.animate({
                        startValue: e.target.angle,
                        endValue: dir ? 10 : 0,
                        duration: 100,
                        onChange: function (value) {
                            e.target.rotate(value);
                            canvas.renderAll();
                        },
                        onComplete: function () {
                            e.target.setCoords();
                        }
                    });
                    fabric.util.animate({
                        startValue: e.target.scaleX,
                        endValue: dir ? 1.2 : 1,
                        duration: 100,
                        onChange: function (value) {
                            e.target.scale(value);
                            canvas.renderAll();
                        },
                        onComplete: function () {
                            e.target.setCoords();
                        }
                    });
                }
            }

            canvas.on('mouse:down', function (e) {
                animate(e, 1);
            });
            canvas.on('mouse:up', function (e) {
                animate(e, 0);
            });
            this.canvases.push(canvas);
        }
    }
</script>

<style scoped>

</style>
