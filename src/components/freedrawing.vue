<template>
	<div style="display: inline-block; margin-left: 10px">
		<button id="drawing-mode" class="btn btn-info" @click="drawingModeEl">{{drawingModeElTitle}}</button><br>
		<button id="clear-canvas" class="btn btn-info" @click="clearEl">Clear</button><br>

		<div id="drawing-mode-options" style="" v-show="drawingMode">
			<label for="drawing-mode-selector">Mode:</label>
			<select id="drawing-mode-selector" v-model="drawing_mode_selector"
				@change="drawingModeSelector(drawing_mode_selector)">
				<option>Pencil</option>
				<option>Circle</option>
				<option>Spray</option>
				<option>Pattern</option>

				<option>hline</option>
				<option>vline</option>
				<option>square</option>
				<option>diamond</option>
				<option>texture</option>
			</select><br>

			<label for="drawing-line-width">Line width:</label>
			<span class="info">{{drawing_line_width}}</span><input type="range"  min="0" max="150" id="drawing-line-width"  v-model="drawing_line_width" 
				@change="drawingLineWidthEl(drawing_line_width)"><br>

			<label for="drawing-color">Line color:</label>
			<input type="color" id="drawing-color" v-model="drawing_color" @change="drawingColorEl(drawing_color)"><br>

			<label for="drawing-shadow-color">Shadow color:</label>
			<input type="color" id="drawing-shadow-color" v-model="drawing_shadow_color" @change="drawingShadowColorEl(drawing_shadow_color)"><br>

			<label for="drawing-shadow-width">Shadow width:</label>
			<span class="info">{{drawing_shadow_width}}</span><input type="range" min="0" max="50" v-model="drawing_shadow_width" id="drawing-shadow-width"
				@change="drawingShadowWidth(drawing_shadow_width)"><br>

			<label for="drawing-shadow-offset">Shadow offset:</label>
			<span class="info">{{drawing_shadow_offset}}</span><input type="range" min="0" max="50" v-model="drawing_shadow_offset" id="drawing-shadow-offset"
				@change="drawingShadowOffset(drawing_shadow_offset)"> <br>
		</div>
	</div>

</template>

<script>
	export default {
		name: "freedrawing",
		props: ['canvas'],
		data() {
			return {
				drawingModeElTitle: 'Cancel drawing mode',
				
				vLinePatternBrush: null,
				hLinePatternBrush: null,
				squarePatternBrush: null,
				diamondPatternBrush: null,
				texturePatternBrush: null,

				drawingMode: true,
				drawing_mode_selector: 'Pencil',

				drawing_line_width: 30,
				drawing_color: "#005E7A",
				drawing_shadow_offset: 0,
				drawing_shadow_width:0,
				drawing_shadow_color: "#005E7A",
			}
		},
		methods: {
			drawingModeEl() {
				var canvas = this.canvas;
				this.drawingMode = canvas.isDrawingMode = !canvas.isDrawingMode;
				if (canvas.isDrawingMode) {
					this.drawingModeElTitle = 'Cancel drawing mode';
				} else {
					this.drawingModeElTitle = 'Enter drawing mode';
				}
			},
			clearEl() {
				var canvas = this.canvas;
				canvas.clear()
			},
			drawingModeSelector(value) {
				var canvas = this.canvas;
				if (value === 'hline') {
					canvas.freeDrawingBrush = this.vLinePatternBrush;
				} else if (value === 'vline') {
					canvas.freeDrawingBrush = this.hLinePatternBrush;
				} else if (value === 'square') {
					canvas.freeDrawingBrush = this.squarePatternBrush;
				} else if (value === 'diamond') {
					canvas.freeDrawingBrush = this.diamondPatternBrush;
				} else if (value === 'texture') {
					canvas.freeDrawingBrush = this.texturePatternBrush;
				} else {
					canvas.freeDrawingBrush = new fabric[value + 'Brush'](canvas);
				}

				if (canvas.freeDrawingBrush) {
					var brush = canvas.freeDrawingBrush;
					brush.color = this.drawing_color;
					if (brush.getPatternSrc) {
						brush.source = brush.getPatternSrc.call(brush);
					}
					brush.width = parseInt(this.drawing_line_width, 10) || 1;
					brush.shadow = new fabric.Shadow({
						blur: parseInt(this.drawingShadowWidth, 10) || 0,
						offsetX: 0,
						offsetY: 0,
						affectStroke: true,
						color: this.drawing_shadow_color,
					});
				}
			},
			drawingColorEl(value) {
				var canvas = this.canvas;
				var brush = canvas.freeDrawingBrush;
				brush.color = value;
				if (brush.getPatternSrc) {
					brush.source = brush.getPatternSrc.call(brush);
				}
			},
			drawingShadowColorEl(value) {
				var canvas = this.canvas;
				canvas.freeDrawingBrush.shadow.color = value;
			},
			drawingLineWidthEl(value) {
				var canvas = this.canvas;
				canvas.freeDrawingBrush.width = parseInt(value, 10) || 1;
			},
			drawingShadowWidth(value) {
				var canvas = this.canvas;
				canvas.freeDrawingBrush.shadow.blur = parseInt(value, 10) || 0;
			},
			drawingShadowOffset(value) {
				var canvas = this.canvas;
				canvas.freeDrawingBrush.shadow.offsetX = parseInt(value, 10) || 0;
				canvas.freeDrawingBrush.shadow.offsetY = parseInt(value, 10) || 0;
			}

		},
		mounted() {
			var canvas = this.canvas;
			canvas.isDrawingMode = true;
			this.drawingModeSelector(this.drawing_mode_selector) 
			fabric.Object.prototype.transparentCorners = false;

			if (fabric.PatternBrush) {
				this.vLinePatternBrush = new fabric.PatternBrush(canvas);
				this.vLinePatternBrush.getPatternSrc = function() {
					var patternCanvas = fabric.document.createElement('canvas');
					patternCanvas.width = patternCanvas.height = 10;
					var ctx = patternCanvas.getContext('2d');
					ctx.strokeStyle = this.color;
					ctx.lineWidth = 5;
					ctx.beginPath();
					ctx.moveTo(0, 5);
					ctx.lineTo(10, 5);
					ctx.closePath();
					ctx.stroke();
					return patternCanvas;
				};

				this.hLinePatternBrush = new fabric.PatternBrush(canvas);
				this.hLinePatternBrush.getPatternSrc = function() {

					var patternCanvas = fabric.document.createElement('canvas');
					patternCanvas.width = patternCanvas.height = 10;
					var ctx = patternCanvas.getContext('2d');
					ctx.strokeStyle = this.color;
					ctx.lineWidth = 5;
					ctx.beginPath();
					ctx.moveTo(5, 0);
					ctx.lineTo(5, 10);
					ctx.closePath();
					ctx.stroke();
					return patternCanvas;
				};

				this.squarePatternBrush = new fabric.PatternBrush(canvas);
				this.squarePatternBrush.getPatternSrc = function() {

					var squareWidth = 10,
						squareDistance = 2;
					var patternCanvas = fabric.document.createElement('canvas');
					patternCanvas.width = patternCanvas.height = squareWidth + squareDistance;
					var ctx = patternCanvas.getContext('2d');
					ctx.fillStyle = this.color;
					ctx.fillRect(0, 0, squareWidth, squareWidth);
					return patternCanvas;
				};

				this.diamondPatternBrush = new fabric.PatternBrush(canvas);
				this.diamondPatternBrush.getPatternSrc = function() {

					var squareWidth = 10,
						squareDistance = 5;
					var patternCanvas = fabric.document.createElement('canvas');
					var rect = new fabric.Rect({
						width: squareWidth,
						height: squareWidth,
						angle: 45,
						fill: this.color
					});

					var canvasWidth = rect.getBoundingRect().width;

					patternCanvas.width = patternCanvas.height = canvasWidth + squareDistance;
					rect.set({
						left: canvasWidth / 2,
						top: canvasWidth / 2
					});

					var ctx = patternCanvas.getContext('2d');
					rect.render(ctx);

					return patternCanvas;
				};

				var img = new Image();
				img.src = '/public/honey_im_subtle.png';

				this.texturePatternBrush = new fabric.PatternBrush(canvas);
				this.texturePatternBrush.source = img;
			}

			if (canvas.freeDrawingBrush) {
				canvas.freeDrawingBrush.color = this.drawing_color;
				if(canvas.freeDrawingBrush.getPatternSrc){
					canvas.freeDrawingBrush.source = canvas.freeDrawingBrush.getPatternSrc.call(this);
				}
				canvas.freeDrawingBrush.width = parseInt(this.drawing_line_width, 10) || 1;
				canvas.freeDrawingBrush.shadow = new fabric.Shadow({
					blur: parseInt(this.drawing_shadow_width, 10) || 0,
					offsetX: 0,
					offsetY: 0,
					affectStroke: true,
					color: this.drawing_shadow_color,
				});
			}



		}
	}
</script>

<style>
</style>
