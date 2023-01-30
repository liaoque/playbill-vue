<template>
	<div>
		<p>
			<label>Repeat pattern?</label>
			<input type="checkbox" id="img_repeat" v-model="img_repeat" @change="imgRepeat(img_repeat)">
		</p>
		<p>
			<label>Pattern image width</label>
			<input type="range" min="50" max="1000" v-model="img_width" id="img_width" @change="imgWidth(img_width)">
		</p>
		<p>
			<label>Pattern left offset</label>
			<input type="range" min="0" max="500" v-model="img_offset_x" id="img_offset_x" @change="imgOffsetx(img_offset_x)">
		</p>
		<p>
			<label>Pattern top offset</label>
			<input type="range" min="0" max="500" v-model="img_offset_y" id="img_offset_y" @change="imgOffsety(img_offset_y)">
		</p>
		<br>
		<p>
			<label>Pattern image angle</label>
			<input type="range" min="-90" max="90" v-model="img_angle"  id="img_angle" @change="imgAngle(img_angle)">
		</p>
		<p>
			<label>Pattern image padding</label>
			<input type="range" min="-50" max="50" v-model="img_padding"  id="img_padding" @change="imgPadding(img_padding)">
		</p>
	</div>
</template>

<script>
	export default {
		name: 'dynamic-patterns',
		props: ['canvas'],
		data() {
			return {
				img: null,
				pattern: null,
				patternSourceCanvas: null,
				img_repeat: true,
				img_width: 100,
				img_offset_x: 0,
				img_offset_y: 0,
				img_angle: 0,
				img_padding: 0,
			}
		},
		methods: {
			imgWidth(value) {
				let canvas = this.canvas;
				this.img.scaleToWidth(parseInt(value, 10));
				this.patternSourceCanvas.setDimensions({
					width: this.img.getScaledWidth() + this.img_padding,
					height: this.img.getScaledHeight() + this.img_padding,
				});
				canvas.requestRenderAll();
			},
			imgAngle(value) {
				let canvas = this.canvas;
				this.img.set('angle', value);
				this.patternSourceCanvas.renderAll();
				canvas.requestRenderAll();
			},
			imgPadding(value) {
				let canvas = this.canvas;
				let padding = parseInt(value, 10);
				this.patternSourceCanvas.setDimensions({
					width: this.img.getScaledWidth() + padding,
					height: this.img.getScaledHeight() + padding,
				});
				canvas.requestRenderAll();
			},
			imgOffsetx(value) {
				let canvas = this.canvas;
				this.pattern.offsetX = parseInt(value, 10);
				canvas.requestRenderAll();
			},
			imgOffsety(value) {
				let canvas = this.canvas;
				this.pattern.offsetY = parseInt(value, 10);
				canvas.requestRenderAll();
			},
			imgRepeat(value) {
				let canvas = this.canvas;
				this.pattern.repeat = value ? 'repeat' : 'no-repeat';
				canvas.requestRenderAll();
			}
		},

		mounted() {
			let canvas = this.canvas;

			fabric.Object.prototype.transparentCorners = false;

			let padding = 0;
			let self = this
			fabric.Image.fromURL('/public/pug.jpg', function(img) {
				self.img = img
				img.scaleToWidth(100);
				self.patternSourceCanvas = new fabric.StaticCanvas();
				self.patternSourceCanvas.add(img);
				self.patternSourceCanvas.renderAll();
				self.pattern = new fabric.Pattern({
					source: self.patternSourceCanvas.getElement(),
					repeat: 'repeat',
				});

				canvas.add(new fabric.Polygon([{
					x: 185,
					y: 0
				}, {
					x: 250,
					y: 100
				}, {
					x: 385,
					y: 170
				}, {
					x: 0,
					y: 245
				}, ], {
					left: 0,
					top: 200,
					angle: -30,
					fill: self.pattern,
					objectCaching: false,
				}));
			});
		}
	}
</script>

<style>
</style>
