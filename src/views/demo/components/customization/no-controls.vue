<template>
    <div class="block">
        <h3>No controls</h3>
        <canvas id="c16" width="200" height="200"></canvas>
    </div>
</template>

<script>
    export default {
        name: "no-controls",
        props: ['canvases'],
        mounted() {
            var canvas = new fabric.Canvas('c16');
            canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));
            canvas.item(0).hasControls = false;
            canvas.setActiveObject(canvas.item(0));
            this.canvases.push(canvas);
        }
    }
</script>

<style scoped>

</style>
