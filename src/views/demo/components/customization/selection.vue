<template>
    <div class="block">
        <h3>Custom selection style</h3>
        <canvas id="c1" width="200" height="200"></canvas>
    </div>
</template>

<script>
    export default {
        name: "selection",
        props: ['canvases'],
        mounted() {
            var canvas = new fabric.Canvas('c1');
            canvas.add(new fabric.Circle({radius: 30, fill: '#f55', top: 100, left: 100}));

            canvas.selectionColor = 'rgba(0,255,0,0.3)';
            canvas.selectionBorderColor = 'red';
            canvas.selectionLineWidth = 5;
            this.canvases.push(canvas);
        }
    }
</script>

<style scoped>

</style>
