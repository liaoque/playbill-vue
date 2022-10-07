<template>
    <div class="block">
        <h3>Custom cursor on object hover</h3>
        <canvas id="c11" width="200" height="200"></canvas>
    </div>
</template>

<script>
    export default {
        name: "custom-cursor-on-object-hover"
        , props: ['canvases'],
        mounted() {
            var canvas = new fabric.Canvas('c11');
            canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));
            canvas.hoverCursor = 'pointer';
            this.canvases.push(canvas);
        }
    }
</script>

<style scoped>

</style>
