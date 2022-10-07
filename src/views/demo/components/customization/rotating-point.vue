<template>
    <div class="block">
        <h3>Rotating point</h3>
        <canvas id="c18" width="200" height="200"></canvas>
    </div>
</template>

<script>
    export default {
        name: "rotating-point"
        , props: ['canvases'],
        mounted() {
            var canvas = new fabric.Canvas('c18');

            canvas.add(new fabric.Rect({ width: 50, height: 50, fill: '#77f', top: 75, left: 75 }));
            canvas.item(0).hasRotatingPoint = true;

            canvas.add(new fabric.Circle({ radius: 40, fill: '#f55', top: 125, left: 125, scaleY: 0.5, flipY: true }));
            canvas.item(1).hasRotatingPoint = true;

            this.canvases.push(canvas);
        }
    }
</script>

<style scoped>

</style>
