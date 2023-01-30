<template>
    <div>
        <div class="controls">
            <el-button id="select" type="el-button" @click="changeAction('select')">select</el-button>
            <el-button id="erase" type="el-button" @click="changeAction('erase')">erase</el-button>
            <el-button id="undo" type="el-button" @click="changeAction('undo')">undo erasing</el-button>
            <el-button id="draw" type="el-button" @click="changeAction('draw')">draw</el-button>
            <el-button id="spray" type="el-button" @click="changeAction('spray')">spray</el-button>
        </div>
        <div>
            <div>
                <label for="a">
                    background image <code>erasable</code>
                </label>
                <input id="a" type="checkbox" @change="setBgImageErasableProp(this)">
            </div>
            <div>
                <label for="b">
                    remove erased objects on <code>erasing:end</code>
                </label>
                <input id="b" type="checkbox" @change="setErasingRemovesErasedObjects(this)">
            </div>
        </div>

        <div style="margin:0 1rem;">
            <code>erasing:end</code><br>
            <code id="output">N/A</code>
        </div>
    </div>

</template>

<script>
    export default {
        name: "erasing",
        props: ['canvas'],
        methods: {
            changeAction(target) {
                console.log(target)
                let canvas = this.canvas;
                ['select', 'erase', 'undo', 'draw', 'spray'].forEach(action => {
                    const t = document.getElementById(action);
                    t.classList.remove('active');
                });
                if (typeof target === 'string') target = document.getElementById(target);
                target.classList.add('active');
                switch (target.id) {
                    case "select":
                        canvas.isDrawingMode = false;
                        break;
                    case "erase":
                        canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
                        canvas.freeDrawingBrush.width = 10;
                        canvas.isDrawingMode = true;
                        break;
                    case "undo":
                        canvas.freeDrawingBrush = new fabric.EraserBrush(canvas);
                        canvas.freeDrawingBrush.width = 10;
                        canvas.freeDrawingBrush.inverted = true;
                        canvas.isDrawingMode = true;
                        break;
                    case "draw":
                        canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
                        canvas.freeDrawingBrush.width = 35;
                        canvas.isDrawingMode = true;
                        break;
                    case "spray":
                        canvas.freeDrawingBrush = new fabric.SprayBrush(canvas);
                        canvas.freeDrawingBrush.width = 35;
                        canvas.isDrawingMode = true;
                        break;
                    default:
                        break;
                }
            },
            init() {
                let self = this;
                let canvas = this.canvas;
                canvas.setOverlayColor("rgba(0,0,255,0.4)", undefined, {erasable: false});
                const t = new fabric.Triangle({
                    top: 300,
                    left: 210,
                    width: 100,
                    height: 100,
                    fill: "blue",
                    erasable: false
                });

                canvas.add(
                    new fabric.Rect({
                        top: 50,
                        left: 100,
                        width: 50,
                        height: 50,
                        fill: "#f55",
                        opacity: 0.8
                    }),
                    new fabric.Rect({
                        top: 50,
                        left: 150,
                        width: 50,
                        height: 50,
                        fill: "#f55",
                        opacity: 0.8
                    }),
                    new fabric.Group([
                        t,
                        new fabric.Circle({top: 140, left: 230, radius: 75, fill: "green"})
                    ], {erasable: 'deep'})
                );
                fabric.Image.fromURL("/public/1.png", function (img) {
                        // img.set("erasable", false);
                        img.scaleToWidth(480);
                        img.clone((img) => {
                            canvas.add(
                                img.set({
                                        left: 400,
                                        top: 350,
                                        clipPath: new fabric.Circle({
                                            radius: 200,
                                            originX: "center",
                                            originY: "center"
                                        }),
                                        angle: 30
                                    }).scale(0.25)
                            );
                            canvas.renderAll();
                        });

                        img.set({opacity: 0.7});

                        function animate() {
                            img.animate("opacity", img.get("opacity") === 0.7 ? 0.4 : 0.7, {
                                duration: 1000,
                                onChange: canvas.renderAll.bind(canvas),
                                onComplete: animate
                            });
                        }

                        animate();
                        canvas.setBackgroundImage(img);
                        img.set({erasable: false});
                        canvas.on("erasing:end", ({targets, drawables}) => {
                            console.log(targets, drawables)
                            let output = document.getElementById("output");
                            output.innerHTML = JSON.stringify({
                                objects: targets.map((t) => t.type),
                                drawables: Object.keys(drawables)
                            }, null, '\t');
                            if (self.erasingRemovesErasedObjects) {
                                targets.forEach(obj => obj.group?.removeWithUpdate(obj) || canvas.remove(obj));
                            }
                        })
                        canvas.renderAll();
                    }, {crossOrigin: "anonymous"});

                function animate() {
                    // try {
                        canvas
                            .item(0)
                            .animate("top", canvas.item(0).get("top") == 500 ? "100" : "500", {
                                duration: 1000,
                                onChange: canvas.renderAll.bind(canvas),
                                onComplete: animate
                            });
                    // } catch (error) {
                    //
                    //     setTimeout(animate, 500);
                    // }
                }

                animate();
            },
            setDrawableErasableProp(drawable, value) {
                canvas.get(drawable)?.set({erasable: value});
                changeAction('erase');
            },

            setBgImageErasableProp(input) {
                setDrawableErasableProp("backgroundImage", input.checked)
            },

            setErasingRemovesErasedObjects(input) {
                this.erasingRemovesErasedObjects = input.checked
            },


        },
        data: () => {
            return {
                erasingRemovesErasedObjects:false
            }
        },
        mounted() {


            this.init();
            this.changeAction('erase');


        }
    }
</script>

<style scoped>

</style>
