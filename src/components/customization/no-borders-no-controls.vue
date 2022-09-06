<template>
    <div class="block">
        <h3>No borders, no controls</h3>
        <canvas id="c10" width="200" height="200"></canvas>
    </div>
</template>

<script>
    export default {
        name: "no-borders-no-controls"
        , props: ['canvases'],
        mounted() {
            var canvas = new fabric.Canvas('c10');
            canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));
            canvas.item(0).hasControls = canvas.item(0).hasBorders = false;

            canvas.on({
                'mouse:down': function(e) {
                    if (e.target) {
                        e.target.opacity = 0.5;
                        canvas.renderAll();
                    }
                },
                'mouse:up': function(e) {
                    if (e.target) {
                        e.target.opacity = 1;
                        canvas.renderAll();
                    }
                },
                'object:moved': function(e) {
                    e.target.opacity = 0.5;
                },
                'object:modified': function(e) {
                    e.target.opacity = 1;
                }
            });
            this.canvases.push(canvas);
        }
    }
</script>

<style scoped>

</style>
