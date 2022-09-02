<template>
    <div>
        <div class="controls">
            <form id="numbers">
                <table>
                    <tbody>
                    <tr>
                        <td><span>a:</span><input type="number" step="0.02" id="a" @input="a" v-model="aVal">
                        </td>
                        <td><span>b:</span><input type="number" step="0.02" id="b" @input="b" v-model="bVal">
                        </td>
                    </tr>
                    <tr>
                        <td><span>c:</span><input type="number" step="0.02" id="c" @input="c" v-model="cVal">
                        </td>
                        <td><span>d:</span><input type="number" step="0.02" id="d" @input="d" v-model="dVal">
                        </td>
                    </tr>
                    <tr>
                        <td><span>tx:</span><input type="number" step="1" id="tx" @input="tx" v-model="txVal">
                        </td>
                        <td><span>ty:</span><input type="number" step="1" id="ty" @input="ty" v-model="tyVal">
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
            <button id="merge" @click="merge">Merge transform</button>
            <code>
                transformMatrix == [
                <span id="a-val">{{aVal}}</span>,
                <span id="b-val">{{bVal}}</span>,
                <span id="c-val">{{cVal}}</span>,
                <span id="d-val">{{dVal}}</span>,
                <span id="tx-val">{{txVal}}</span>,
                <span id="ty-val">{{tyVal}}</span>
                ]<br>
                mergedProperties:<br>
                ScaleX: <span id="scaleX">{{scaleX}}</span>,<br>
                ScaleY: <span id="scaleY">{{scaleY}}</span>,<br>
                SkewX: <span id="skewX">{{skewX}}</span>,<br>
                SkewY: <span id="skewY">{{skewY}}</span>,<br>
                top: <span id="top">{{top}}</span>,<br>
                left: <span id="left">{{left}}</span>,<br>
                flipX: <span id="flipX">{{flipX}}</span>,<br>
                flipY: <span id="flipY">{{flipY}}</span>,<br>
                angle: <span id="angle">{{angle}}</span>
            </code>
        </div>
    </div>
</template>

<script>
    export default {
        name: "matrix-transformation",
        props: ['canvas'],
        methods: {
            update() {
                let self = this
                let canvas = this.canvas
                canvas.requestRenderAll();
                let matrix = canvas.item(0).transformMatrix;
                self.aVal = matrix[0];
                self.bVal = matrix[1];
                self.cVal = matrix[2];
                self.dVal = matrix[3];
                self.txVal = matrix[4];
                self.tyVal = matrix[5];

                self.scaleX = canvas.item(0).scaleX;
                self.scaleY = canvas.item(0).scaleY;
                self.skewX = canvas.item(0).skewX;
                self.skewY = canvas.item(0).skewY;

                self.top = canvas.item(0).top;
                self.left = canvas.item(0).left;
                self.flipX = canvas.item(0).flipX;
                self.flipY = canvas.item(0).flipY;
                self.angle = canvas.item(0).angle;

            },
            merge() {
                let canvas = this.canvas
                let obj = canvas.item(0);
                let currentT = obj.calcTransformMatrix();
                let transformMatrix = obj.transformMatrix;
                let mT = fabric.util.multiplyTransformMatrices(currentT, transformMatrix);
                let options = fabric.util.qrDecompose(mT);
                let newCenter = {x: options.translateX, y: options.translateY};
                obj.transformMatrix = [1, 0, 0, 1, 0, 0];
                obj.flipX = false;
                obj.flipY = false;
                obj.set(options);
                obj.setPositionByOrigin(newCenter, 'center', 'center');
                document.getElementById('numbers').reset();
                this.update();
            },
            a() {
                let canvas = this.canvas
                canvas.item(0).transformMatrix[0] = parseFloat(this.aVal, 10);
                this.update();
            },
            b() {
                let canvas = this.canvas
                canvas.item(0).transformMatrix[1] = parseFloat(this.bVal, 10);
                this.update();
            },
            c() {
                let canvas = this.canvas
                canvas.item(0).transformMatrix[2] = parseFloat(this.cVal, 10);
                this.update();
            },
            d() {
                let canvas = this.canvas
                canvas.item(0).transformMatrix[3] = parseFloat(this.dVal, 10);
                this.update();
            },
            tx() {
                let canvas = this.canvas
                canvas.item(0).transformMatrix[4] = parseFloat(this.txVal, 10);
                this.update();
            },
            ty() {
                let canvas = this.canvas
                canvas.item(0).transformMatrix[5] = parseFloat(this.tyVal, 10);
                this.update();
            },
        },
        data() {
            return {
                aVal: 1,
                bVal: 0,
                cVal: 0,
                dVal: 1,
                txVal: 0,
                tyVal: 0,
                scaleX: 1,
                scaleY: 1,
                skewX: 0,
                skewY: 0,
                top: 0,
                left: 0,
                flipX: 0,
                flipY: 0,
                angle: 0,
            }
        },
        mounted() {
            let canvas = this.canvas
            fabric.Image.fromURL('/public/printio.png', function (image) {
                canvas.add(image);
                image.transformMatrix = [1, 0, 0, 1, 0, 0];
            });
        }
    }
</script>

<style scoped>

</style>
