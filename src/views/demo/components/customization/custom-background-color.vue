<template>
    <div class="block">
        <h3>Custom background color</h3>
        <canvas id="c5" width="200" height="200"></canvas>
    </div>
</template>

<script>
    export default {
        name: "custom-background-color"
        , props: ['canvases'],
        mounted() {
            var canvas = new fabric.Canvas('c5');
            canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));
            canvas.backgroundColor = 'rgba(0,0,255,0.3)';
            canvas.renderAll();
            this.canvases.push(canvas);
        }
    }
</script>

<style scoped>

</style>
