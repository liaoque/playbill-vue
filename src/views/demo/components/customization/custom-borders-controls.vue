<template>
    <div class="block">
        <h3>Custom borders, controls</h3>
        <canvas id="c3" width="200" height="200"></canvas>
    </div>
</template>

<script>
    export default {
        name: "custom-borders-controls",
        props: ['canvases'],
        mounted() {
            var canvas = new fabric.Canvas('c3');
            canvas.add(new fabric.Circle({radius: 30, fill: '#f55', top: 100, left: 100}));

            canvas.item(0).set({
                borderColor: 'red',
                cornerColor: 'green',
                cornerSize: 6,
                transparentCorners: false
            });
            canvas.setActiveObject(canvas.item(0));
            this.canvases.push(canvas);
        }
    }
</script>

<style scoped>

</style>
