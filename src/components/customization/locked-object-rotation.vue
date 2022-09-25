<template>

    <div class="block">
        <h3>Locked object rotation</h3>
        <canvas id="c6" width="200" height="200"></canvas>
    </div>
</template>

<script>
    export default {
        name: "locked-object-rotation"
        , props: ['canvases'],
        mounted() {
            var canvas = new fabric.Canvas('c6');
            canvas.add(new fabric.Rect({ width: 50, height: 50, fill: '#77f', top: 100, left: 100 }));
            canvas.item(0).lockRotation = true;
            this.canvases.push(canvas);
        }
    }
</script>

<style scoped>

</style>
