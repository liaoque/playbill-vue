<template>
    <div class="controls">
        <p>
            <label><span>Angle:</span>
                <input type="range" id="angle-control" min="0" max="360" v-model="angle" @change="angleControl(angle)"></label>
        </p>
        <p>
            <label><span>Left:</span>
                <input type="range" id="left-control" min="0" max="300" v-model="left" @change="leftControl(left)"></label>
        </p>
        <p>
            <label><span>Top:</span>
                <input type="range" id="top-control" min="0" max="300" v-model="top" @change="topControl(top)"></label>
        </p>
        <p>
            <label><span>Scale:</span>
                <input type="range" id="scale-control" min="0.1" max="3" step="0.1" v-model="scale" @change="scaleControl(scale)"></label>
        </p>
        <p>
            <label><span>SkewX:</span>
                <input type="range" id="skewX-control" min="0" max="80" step="1" v-model="skewX"  @change="skewXControl(skewX)"></label>
        </p>
        <p>
            <label><span>SkewY:</span>
                <input type="range" id="skewY-control" min="0" max="80" step="1" v-model="skewY"  @change="skewYControl(skewY)"></label>
        </p>
    </div>
</template>

<script>
    export default {
        name: 'controls',
        props: ['canvas'],
        data() {
            return {
                rect: null,
                angle: 0,
                left: 150,
                top: 150,
                scale: 0,
                skewX: 0,
                skewY: 0,
            }
        },
        methods: {
            angleControl(value) {
                let canvas = this.canvas;
                this.rect.set('angle', parseInt(value, 10)).setCoords();
                canvas.requestRenderAll();
            },

            scaleControl(value) {
                let canvas = this.canvas;
                this.rect.scale(parseFloat(value)).setCoords();
                canvas.requestRenderAll();
            },

            topControl(value) {
                let canvas = this.canvas;
                this.rect.set('top', parseInt(value, 10)).setCoords();
                canvas.requestRenderAll();
            },

            leftControl(value) {
                let canvas = this.canvas;
                this.rect.set('left', parseInt(value, 10)).setCoords();
                canvas.requestRenderAll();
            },

            skewXControl(value) {
                let canvas = this.canvas;
                this.rect.set('skewX', parseInt(value, 10)).setCoords();
                canvas.requestRenderAll();
            },

            skewYControl(value) {
                let canvas = this.canvas;
                this.rect.set('skewY', parseInt(value, 10)).setCoords();
                canvas.requestRenderAll();
            },
        },
        mounted() {
            let canvas = this.canvas;
            fabric.Object.prototype.transparentCorners = false;


            let rect = this.rect = new fabric.Rect({
                width: 100,
                height: 100,
                top: 100,
                left: 100,
                fill: 'rgba(255,0,0,0.5)'
            });

            canvas.add(rect);


            function updateControls() {
                this.scale = rect.scaleX;
                this.angle = rect.angle;
                this.left = rect.left;
                this.top = rect.top;
                this.skewX = rect.skewX;
                this.skewY = rect.skewY;

            }

            canvas.on({
                'object:moving': updateControls,
                'object:scaling': updateControls,
                'object:resizing': updateControls,
                'object:rotating': updateControls,
                'object:skewing': updateControls
            });

        }
    }
</script>

<style>
</style>
