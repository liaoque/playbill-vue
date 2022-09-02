<template>
    <div style="display: inline-block; background: #f5f2f0; padding: 0 10px; margin-top: .5em; margin-left: 10px; margin-right: -5px">
        <p>
            <label>
                <input type="checkbox" id="hasControls" v-model="hasControls" @change="observeRadio(hasControls)">
                <code>hasControls</code>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" id="hasBorders" v-model="hasBorders" @change="observeRadio(hasBorders)">
                <code>hasBorders</code>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" id="visible" v-model="visible" @change="observeRadio(visible)">
                <code>visible</code>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" id="selectable" v-model="selectable" @change="observeRadio(selectable)">
                <code>selectable</code>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" id="evented" v-model="evented" @change="observeRadio(evented)">
                <code>evented</code>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" id="transparentCorners"  v-model="transparentCorners" @change="observeRadio(transparentCorners)">
                <code>transparentCorners</code>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" id="centeredScaling"  v-model="centeredScaling" @change="observeRadio(centeredScaling)">
                <code>centeredScaling</code>
            </label>
        </p>
        <p>
            <label>
                <input type="checkbox" id="centeredRotation"  v-model="centeredRotation" @change="observeRadio(centeredRotation)">
                <code>centeredRotation</code>
            </label>
        </p>
        <p>
            <label>
                <code>cornerStyle</code>
                <input type="radio" name="cornerStyle" value="rect" id="cornerStyle1">
                <input type="radio" name="cornerStyle" value="circle" id="cornerStyle2">
            </label>
        </p>
        <p>
            <label>
                <code>padding</code>
                <input type="range" id="padding" value="0" min="0" max="50" style="display: block">
            </label>
        </p>
        <p>
            <label>
                <code>cornerSize</code>
                <input type="range" id="cornerSize" value="12" min="1" max="50" style="display: block">
            </label>
        </p>
        <p>
            <label>
                <code>rotatingPointOffset</code>
                <input type="range" id="rotatingPointOffset" v-model="rotatingPointOffset" @input="rotatingPointOffsetC" min="5" max="150" style="display: block">
            </label>
        </p>
        <p>
            <code>setControlVisible</code>
        </p><p id="setControlVisible">
        <label>
            TL<input type="checkbox" title="top-left control" name="tl" checked="">
        </label>
        <label>
            BL<input type="checkbox" title="bottom-left control" name="bl" checked="">
        </label>
        <label>
            TR<input type="checkbox" title="top-right control" name="tr" checked="">
        </label>
        <label>
            BR<input type="checkbox" title="bottom-right control" name="br" checked="">
        </label>
        <br>
        <label>
            ML<input type="checkbox" title="middle-left control" name="ml" checked="">
        </label>
        <label>
            MB<input type="checkbox" title="middle-bottom control" name="mb" checked="">
        </label>
        <label>
            MR<input type="checkbox" title="middle-right control" name="mr" checked="">
        </label>
        <label>
            MT<input type="checkbox" title="middle-top control" name="mt" checked="">
        </label>
        <label>
            MTR<input type="checkbox" title="middle-top-rotate control" name="mtr" checked="">
        </label>
    </p>
        <p></p>
        <p>
            <label>
                <code>borderColor</code>
                <input type="color" id="borderColor" style="display: block">
            </label>
        </p>
        <p>
            <label>
                <code>cornerColor</code>
                <input type="color" id="cornerColor" style="display: block">
            </label>
        </p>
        <p>
            <label>
                <code>cornerStrokeColor</code>
                <input type="color" id="cornerStrokeColor" style="display: block">
            </label>
        </p>
    </div>
</template>

<script>
    export default {
        name: "controls-customization",
        props: ['canvas'],
        data(){
          return {
              hasControls: false,
              hasBorders: false,
              visible: false,
              selectable: false,
              evented: false,
              transparentCorners: false,
              centeredScaling: false,
              centeredRotation: false,



              rotatingPointOffset: 40,
          }
        },
        methods:{
            observeRadio(value){
                var canvas = this.canvas;
                canvas.item(0)[property] = value;
                canvas.renderAll();
            },
            rotatingPointOffsetC(){
                canvas.item(0).controls.mtr.offsetY = -parseFloat(this.rotatingPointOffset);
                canvas.requestRenderAll();
            }
        },
        mounted(){
            (function() {
                var canvas = this.canvas;

                var rect = new fabric.Rect({
                    left: 150,
                    top: 200,
                    originX: 'left',
                    originY: 'top',
                    width: 150,
                    height: 120,
                    angle: -10,
                    fill: 'rgba(255,0,0,0.5)',
                    transparentCorners: false
                });

                canvas.add(rect).setActiveObject(rect);



                function observeNumeric(property) {
                    document.getElementById(property).oninput = function() {
                        canvas.item(0)[property] = parseFloat(this.value);
                        if (property === 'padding') {
                            canvas.item(0).setCoords();
                        }
                        canvas.requestRenderAll();
                    };
                }

                function observeValue(property) {
                    document.getElementById(property).oninput = function() {
                        canvas.item(0)[property] = this.value;
                        canvas.requestRenderAll();
                    };
                }

                function observeRadio(property) {
                    document.getElementById(property).onchange = function() {
                        var name = document.getElementById(this.id).name;
                        canvas.item(0)[name] = this.value;
                        canvas.renderAll();
                    };
                }

                function observeOptionsList(property) {
                    var list = document.querySelectorAll('#' + property +
                        ' [type="checkbox"]');
                    for (var i = 0, len = list.length; i < len; i++) {
                        list[i].onchange = function() {
                            canvas.item(0)[property](this.name, this.checked);
                            canvas.renderAll();
                        };
                    };
                }



                observeNumeric('padding');
                observeNumeric('cornerSize');
                observeValue('borderColor');
                observeValue('cornerColor');
                observeValue('cornerStrokeColor');
                observeRadio('cornerStyle1');
                observeRadio('cornerStyle2');

                observeOptionsList('setControlVisible');
            })();
        }
    }
</script>

<style scoped>

</style>
