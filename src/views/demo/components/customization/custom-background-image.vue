<template>
    <div class="block">
        <h3>Custom background image</h3>
        <canvas id="c17" width="200" height="200"></canvas>
    </div>
</template>

<script>
    export default {
        name: "custom-background-image"
        , props: ['canvases'],
        mounted() {
            var canvas = new fabric.Canvas('c17');
            canvas.add(new fabric.Circle({radius: 30, fill: '#f55', top: 100, left: 100}));
            canvas.setBackgroundImage('/public/pug.jpg', canvas.renderAll.bind(canvas));
            this.canvases.push(canvas);
        }
    }
</script>

<style scoped>

</style>
