<template>

    <div class="block">
        <h3>Overlay image</h3>
        <canvas id="c13" width="200" height="200"></canvas>
    </div>
</template>

<script>
    export default {
        name: "overlay-image"
        , props: ['canvases'],
        mounted() {
            var canvas = new fabric.Canvas('c13');
            canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));
            canvas.setOverlayImage('/public/jail_cell_bars.png', canvas.renderAll.bind(canvas));
            this.canvases.push(canvas);
        }
    }
</script>

<style scoped>

</style>
