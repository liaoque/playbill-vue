<template>

</template>

<script>
    export default {
        name: "text-on-paths",
        props:['canvas'],
        mounted(){

            fabric.Object.prototype.objectCaching = true;
            let canvas = this.canvas;
            // canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
            canvas.isDrawingMode = true;
            // canvas.set('isDrawingMode', true);
            // canvas.set('freeDrawingBrush', new fabric.PencilBrush({ decimate: 8 }));
            // canvas.requestRenderAll();

            // let canvas = new fabric.Canvas('canvas', {
            //     isDrawingMode: true,
            //     freeDrawingBrush: new fabric.PencilBrush({ decimate: 8 })
            // });

            canvas.on('before:path:created', function(opt) {
                let path = opt.path;
                let pathInfo = fabric.util.getPathSegmentsInfo(path.path);
                path.segmentsInfo = pathInfo;
                let pathLength = pathInfo[pathInfo.length - 1].length;
                let text = 'This is a demo of text on a path. This text should be small enough to fit in what you drawn.';
                let fontSize = 2.5 * pathLength / text.length;
                let fabricText = new fabric.Text(text, { fontSize: fontSize, path: path, top: path.top, left: path.left });
                canvas.add(fabricText);
            });

            canvas.on('path:created', function(opt) {
                canvas.remove(opt.path);
            })

        }
    }
</script>

<style scoped>

</style>
