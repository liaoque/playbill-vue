<template>
    <div class="block">
        <h3>Transparent corners</h3>
        <canvas id="c19" width="200" height="200"></canvas>
    </div>
</template>

<script>
    export default {
        name: "transparent-corners",
        props: ['canvases'],
        mounted() {
            var canvas = new fabric.Canvas('c19');
            canvas.add(new fabric.Circle({radius: 30, fill: '#f55', top: 100, left: 100}));

            canvas.item(0).set({
                borderColor: 'gray',
                cornerColor: 'black',
                cornerSize: 12,
                transparentCorners: true
            });
            canvas.setActiveObject(canvas.item(0));
            this.canvases.push(canvas);
        }
    }
</script>

<style scoped>

</style>
