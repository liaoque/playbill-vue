<template>

    <div class="block">
        <h3>Unselectable object</h3>
        <canvas id="c4" width="200" height="200"></canvas>
    </div>
</template>

<script>
    export default {
        name: "unselectable-object"
        , props: ['canvases'],
        mounted() {
            var canvas = new fabric.Canvas('c4');
            canvas.add(new fabric.Circle({ radius: 30, fill: '#f55', top: 100, left: 100 }));
            canvas.add(new fabric.Rect({ left: 50, top: 50, fill: 'green', width: 30, height: 30 }));
            canvas.add(new fabric.Rect({ left: 150, top: 50, fill: 'green', width: 30, height: 30 }));
            canvas.add(new fabric.Rect({ left: 150, top: 150, fill: 'green', width: 30, height: 30 }));
            canvas.add(new fabric.Rect({ left: 50, top: 150, fill: 'green', width: 30, height: 30 }));

            canvas.item(0).selectable = false;
            this.canvases.push(canvas);
        }
    }
</script>

<style scoped>

</style>
