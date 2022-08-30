<template>
    <div>
        <div class="controls">
            <button id="select" type="button" @click="changeAction('select')">select</button>
            <button id="erase" type="button" @click="changeAction('erase')">erase</button>
            <button id="undo" type="button" @click="changeAction('undo')">undo erasing</button>
            <button id="draw" type="button" @click="changeAction('draw')">draw</button>
            <button id="spray" type="button" @click="changeAction('spray')">spray</button>
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
        <div>
            <button type="button" @click="toJSON()">toJSON</button>
            <button type="button" @click="downloadImage()">to Image</button>
            <button type="button" @click="downloadSVG()">toSVG</button>
        </div>
        <div style="margin:0 1rem;">
            <code>erasing:end</code><br>
            <code id="output">N/A</code>
        </div>
    </div>

</template>

<script>
    export default {
        name: "panel0",
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
                            var output = document.getElementById("output");
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

            downloadImage() {
                const ext = "png";
                let canvas = this.canvas;
                const base64 = canvas.toDataURL({
                    format: ext,
                    enableRetinaScaling: true
                });
                const link = document.createElement("a");
                link.href = base64;
                link.download = `eraser_example.${ext}`;
                link.click();
            },

            downloadSVG() {
                let canvas = this.canvas;
                const svg = canvas.toSVG();
                const a = document.createElement("a");
                const blob = new Blob([svg], {type: "image/svg+xml"});
                const blobURL = URL.createObjectURL(blob);
                a.href = blobURL;
                a.download = "eraser_example.svg";
                a.click();
                URL.revokeObjectURL(blobURL);
            },

            toJSON() {
                let canvas = this.canvas;
                const json = canvas.toDatalessJSON(["clipPath", "eraser"]);
                const out = JSON.stringify(json, null, "\t");
                const blob = new Blob([out], {type: "text/plain"});
                const clipboardItemData = {[blob.type]: blob};
                try {
                    navigator.clipboard &&
                    (navigator.clipboard.write([
                        new ClipboardItem(clipboardItemData)
                    ]));
                } catch (error) {
                    console.log(error);
                }
                const blobURL = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = blobURL;
                a.download = "eraser_example.json";
                a.click();
                URL.revokeObjectURL(blobURL);
            }
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
