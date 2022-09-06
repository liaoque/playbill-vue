<template>
    <div class="block">
        <h3>No group selection</h3>
        <canvas id="c2" width="200" height="200"></canvas>
    </div>
</template>

<script>
    export default {
        name: "no-group-selection"
        , props: ['canvases'],
        mounted() {
            var canvas = new fabric.Canvas('c2');
            canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));
            canvas.selection = false;
            this.canvases.push(canvas);
        }
    }
</script>

<style scoped>

</style>
