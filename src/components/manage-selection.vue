<template>
    <div style="display: inline-block; margin-left: 10px">
        <button id="group" class="btn btn-info" @click="groupC">Group selected objecs  创建选择分组</button>
        <br>
        <button id="ungroup" class="btn btn-info" @click="ungroupC">Ungroup selected objects  解锁分组</button>
        <br>
        <button id="multiselect" class="btn btn-info" @click="multiselectC">Make a multiselection  选取全部</button>
        <br>
        <button id="addmore" class="btn btn-info" @click="addC">Add more shapes 增加</button>
        <br>
        <button id="discard" class="btn btn-info" @click="discardC">Discard selection  取消选择</button>
        <br>
    </div>
</template>

<script>
    export default {
        name: "manage-selection",
        props: ['canvas'],
        methods: {
            groupC() {
                let canvas = this.canvas;
                if (!canvas.getActiveObject()) {
                    return;
                }
                if (canvas.getActiveObject().type !== 'activeSelection') {
                    return;
                }
                canvas.getActiveObject().toGroup();
                canvas.requestRenderAll();
            },
            addC() {
                let canvas = this.canvas;
                let red = new fabric.Rect({
                    top: Math.random() * canvas.height,
                    left: Math.random() * canvas.width,
                    width: 80,
                    height: 50,
                    fill: 'red'
                });
                let blue = new fabric.Rect({
                    top: Math.random() * canvas.height,
                    left: Math.random() * canvas.width,
                    width: 50,
                    height: 70,
                    fill: 'blue'
                });
                let green = new fabric.Rect({
                    top: Math.random() * canvas.height,
                    left: Math.random() * canvas.width,
                    width: 60,
                    height: 60,
                    fill: 'green'
                });
                canvas.add(red, blue, green);
            },
            ungroupC() {
                let canvas = this.canvas;
                if (!canvas.getActiveObject()) {
                    return;
                }
                if (canvas.getActiveObject().type !== 'group') {
                    return;
                }
                canvas.getActiveObject().toActiveSelection();
                canvas.requestRenderAll();
            },
            multiselectC() {
                let canvas = this.canvas;
                canvas.discardActiveObject();
                let sel = new fabric.ActiveSelection(canvas.getObjects(), {
                    canvas: canvas,
                });
                canvas.setActiveObject(sel);
                canvas.requestRenderAll();
            },
            discardC() {
                let canvas = this.canvas;
                canvas.discardActiveObject();
                canvas.requestRenderAll();
            }

        },
        mounted() {
            let canvas = this.canvas;
            let red = new fabric.Rect({
                top: 100, left: 0, width: 80, height: 50, fill: 'red'
            });
            let blue = new fabric.Rect({
                top: 0, left: 100, width: 50, height: 70, fill: 'blue'
            });
            let green = new fabric.Rect({
                top: 100, left: 100, width: 60, height: 60, fill: 'green'
            });
            fabric.Object.prototype.transparentCorners = false;
            canvas.add(red, blue, green)
        }
    }
</script>

<style scoped>

</style>
