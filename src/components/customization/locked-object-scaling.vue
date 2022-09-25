<template>
    <div class="block">
        <h3>Locked object scaling</h3>
        <canvas id="c7" width="200" height="200"></canvas>
    </div>
</template>

<script>
    export default {
        name: "locked-object-scaling"
        , props: ['canvases'],
        mounted() {
            var canvas = new fabric.Canvas('c7');
            canvas.add(new fabric.Rect({ width: 50, height: 50, fill: '#77f', top: 100, left: 100 }));
            canvas.item(0).lockScalingX = canvas.item(0).lockScalingY = true;
            this.canvases.push(canvas);

        }
    }
</script>

<style scoped>

</style>
