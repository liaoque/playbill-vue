<template>
    <div class="block">
        <h3>Locked X movement</h3>
        <canvas id="c8" width="200" height="200"></canvas>
    </div>
</template>

<script>
    export default {
        name: "locked-x-movement"
        , props: ['canvases'],
        mounted() {
            var canvas = new fabric.Canvas('c8');
            canvas.add(new fabric.Rect({ width: 50, height: 50, fill: '#77f', top: 100, left: 100 }));
            canvas.item(0).lockMovementX = true;
            this.canvases.push(canvas);
        }
    }
</script>

<style scoped>

</style>
