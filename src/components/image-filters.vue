<template>
	<div class="controls">
		<h3>Filters:</h3>
		<label>Use WebGl<input type="checkbox" id="webgl" :checked="webgl" @change="webglC(webgl)"></label>
		<div id="bench">{{bench}}</div>
		<p>
			<label><span>Grayscale:</span> <input type="checkbox" id="grayscale" v-model="grayscale.value"
					:disabled="grayscale.disabled" @change="grayscaleC(grayscale.value)"></label><br>
			<label><span>Avg.</span> <input type="radio" id="average" name="grayscale"
					@change="averageC('average')"></label>
			<label><span>Lum.</span> <input type="radio" id="lightness" name="grayscale"
					@change="averageC('luminosity')"></label>
			<label><span>Light.</span> <input type="radio" id="luminosity" name="grayscale"
					@change="averageC('lightness')"></label>
		</p>
		<p>
			<label><span>Invert:</span> <input type="checkbox" id="invert" :disabled="invert.disabled"
					v-model="invert.value" @change="invertC(invert.value)"></label>
		</p>
		<p>
			<label>Colormatrix filters:</label>
		</p>
		<p>
			<label><span>Sepia:</span> <input type="checkbox" id="sepia" :disabled="sepia.disabled"
					v-model="sepia.value" @change="sepiaC(sepia.value)"></label>
		</p>
		<p>
			<label><span>Black/White:</span> <input type="checkbox" id="blackwhite" :disabled="blackwhite.disabled"
					v-model="blackwhite.value" @change="blackwhiteC(blackwhite.value)"></label>
		</p>
		<p>
			<label><span>Brownie:</span> <input type="checkbox" id="brownie" :disabled="brownie.disabled"
					v-model="brownie.value" @change="brownieC(brownie.value)"></label>
		</p>
		<p>
			<label><span>Vintage:</span> <input type="checkbox" id="vintage" :disabled="vintage.disabled"
					v-model="vintage.value" @change="vintageC(vintage.value)"></label>
		</p>
		<p>
			<label><span>Kodachrome:</span> <input type="checkbox" id="kodachrome" :disabled="kodachrome.disabled"
					v-model="kodachrome.value" @change="kodachromeC(kodachrome.value)"></label>
		</p>
		<p>
			<label><span>Technicolor:</span> <input type="checkbox" id="technicolor" :disabled="technicolor.disabled"
					v-model="technicolor.value" @change="technicolorC(technicolor.value)"></label>
		</p>
		<p>
			<label><span>Polaroid:</span> <input type="checkbox" id="polaroid" :disabled="polaroid.disabled"
					v-model="polaroid.value" @change="polaroidC(polaroid.value)"></label>
		</p>
		<p>
			<label><span>Remove color:</span> <input type="checkbox" id="remove_color" :disabled="remove_color.disabled"
					v-model="remove_color.value" @change="remove_colorC(remove_color.value)"></label><br>
			<label>Color: <input type="color" id="remove_color-color" v-model="remove_color.color"  @change="remove_color_colorC(remove_color.remove_color)"></label><br>
			<br>
			<label>Distance: <input type="range" id="remove_color-distance" min="0" max="1" step="0.01"
					:disabled="remove_color.disabled" v-model="remove_color.distance" @change="remove_color_distanceC(remove_color.distance)"></label>
		</p>
		<p>
			<label><span>Brightness:</span> <input type="checkbox" id="brightness" :disabled="brightness.disabled"
					v-model="brightness.brightness"  @change="brightnessC(brightness.brightness)"></label>
			<br>
			<label>Value: <input type="range" id="brightness-value" min="-1" max="1" step="0.003921"
					:disabled="brightness.disabled" v-model="brightness.value"
					@change="brightnessValueC(brightness.value)"></label>
		</p>
		<p>
			<label><span>Gamma:</span> <input type="checkbox" id="gamma" :disabled="gamma.disabled"
					v-model="gamma.value" @change="gammaC(gamma.value)"></label>
			<br>
			<label>Red: <input type="range" id="gamma-red" min="0.2" max="2.2" step="0.003921"
					:disabled="gamma.disabled" v-model="gamma.red" @change="gammaColorC(0, gamma.red)"></label>
			<br>
			<label>Green: <input type="range" id="gamma-green" min="0.2" max="2.2" step="0.003921"
					:disabled="gamma.disabled" v-model="gamma.green" @change="gammaColorC(1, gamma.green)"></label>
			<br>
			<label>Blue: <input type="range" id="gamma-blue" min="0.2" max="2.2" step="0.003921"
					:disabled="gamma.disabled" v-model="gamma.blue" @change="gammaColorC(2, gamma.blue)"></label>

		</p>
		<p>
			<label><span>Contrast:</span> <input type="checkbox" id="contrast" :disabled="contrast.disabled" v-model="contrast.contrast"  @change="contrastC(contrast.contrast)"></label>
			<br>
			<label>Value: <input type="range" id="contrast-value"  min="-1" max="1" step="0.003921"
					:disabled="contrast.disabled" v-model="contrast.value" @change="contrastValueC(contrast.value)"></label>
		</p>
		<p>
			<label><span>Saturation:</span> <input type="checkbox" id="saturation"
					:disabled="saturation.disabled" v-model="saturation.saturation" @change="saturationC(saturation.saturation)"></label>
			<br>
			<label>Value: <input type="range" id="saturation-value" min="-1" max="1" step="0.003921"
					:disabled="saturation.disabled" v-model="saturation.value" @change="saturationValueC(saturation.value)"></label>
		</p>
		<p>
			<label><span>Vibrance:</span> <input type="checkbox" id="vibrance" :disabled="vibrance.disabled" v-model="vibrance.vibrance" @change="vibranceC(vibrance.vibrance)"></label>
			<br>
			<label>Value: <input type="range" id="vibrance-value"  min="-1" max="1" step="0.003921"
					:disabled="vibrance.disabled" v-model="vibrance.value" @change="vibranceValueC(vibrance.value)"></label>
		</p>
		<p>
			<label><span>Hue:</span> <input type="checkbox" id="hue" :disabled="hue.disabled"  v-model="hue.hue" @change="hueC(hue.hue)"></label>
			<br>
			<label>Value: <input type="range" id="hue-value" min="-2" max="2" step="0.002"
					:disabled="hue.disabled"  v-model="hue.value" @change="hueValueC(hue.value)"></label>
		</p>
		<p>
			<label><span>Noise:</span> <input type="checkbox" id="noise" :disabled="noise.disabled"  v-model="noise.noise" @change="noiseC(noise.noise)"></label>
			<br>
			<label>Value: <input type="range" id="noise-value" min="0" max="1000"
					:disabled="noise.disabled"  v-model="noise.value" @change="noiseValueC(noise.value)"></label>
		</p>
		<p>
			<label><span>Pixelate</span> <input type="checkbox" id="pixelate" :disabled="pixelate.disabled" v-model="pixelate.pixelate" @change="pixelateC(pixelate.pixelate)"></label>
			<br>
			<label>Value: <input type="range" id="pixelate-value" min="2" max="20"
					:disabled="pixelate.disabled" v-model="pixelate.value" @change="pixelateValueC(pixelate.value)"></label>
		</p>
		<p>
			<label><span>Blur:</span> <input type="checkbox" id="blur" :disabled="blur.disabled" v-model="blur.blur" @change="blurC(blur.blur)"></label>
			<br>
			<label>Value: <input type="range" id="blur-value" min="0" max="1" step="0.01"
					:disabled="blur.disabled" v-model="blur.value" @change="blurValueC(blur.value)"></label>
		</p>
		<p>
			<label><span>Sharpen:</span> <input type="checkbox" id="sharpen" :disabled="sharpen.disabled"  v-model="sharpen.value" @change="sharpenC(sharpen.value)"></label>
		</p>
		<p>
			<label><span>Emboss:</span> <input type="checkbox" id="emboss" :disabled="emboss.disabled"  v-model="emboss.value" @change="embossC(emboss.value)"></label>
		</p>
		<p>
			<label><span>Blend Color:</span> <input type="checkbox" id="blend" :disabled="blend.disabled"  v-model="blend.value" @change="blendC(blend.value)"></label>
			<br>
			<label>Mode:</label>
			<select id="blend-mode" name="blend-mode" v-model="blend.mode" @change="blendModeC('mode',blend.mode)">
				<option  value="add">Add</option>
				<option value="diff">Diff</option>
				<option value="subtract">Subtract</option>
				<option value="multiply">Multiply</option>
				<option value="screen">Screen</option>
				<option value="lighten">Lighten</option>
				<option value="darken">Darken</option>
				<option value="overlay">Overlay</option>
				<option value="exclusion">Exclusion</option>
				<option value="tint">Tint</option>
			</select>
			<br>
			<label>Color: <input type="color" id="blend_color" v-model="blend.color" @change="blendModeC('color',blend.color)"></label><br>
			<label>Alpha: <input type="range" id="blend-alpha" min="0" max="1"  step="0.01" v-model="blend.alpha" @change="blendModeC('alpha',blend.alpha)"></label><br>
		</p>
		<label><span>Blend Image:</span> <input type="checkbox" id="blend_image"
				:disabled="blend.disabled" v-model="blend.image" @change="blendImageC(blend.image)"></label>
		<br>
		<label>Mode:</label>
		<select id="blend_image-mode" name="blend_image-mode" v-model="blend.imageMode" @change="blendImageModeC(blend.imageMode)">
			<option value="multiply">Multiply</option>
			<option value="mask">Mask</option>
		</select>
		<br>
		<label>Alpha: <input type="range" id="blend_image-alpha" min="0" max="1"  step="0.01" v-model="blend.imageAlpha" @change="blendImageAlphaC(blend.imageAlpha)"></label><br>
	</div>
</template>

<script>
	export default {
		name: 'image-filters',
		props: ['canvas'],
		data() {
			return {
				webglBackend: null,
				canvas2dBackend: null,
				fImage: null,
				bench: '',
				webgl: true,
				filters: [
					'grayscale', 'invert', 'remove_color', 'sepia', 'brownie',
					'brightness', 'contrast', 'saturation', 'vibrance', 'noise', 'vintage',
					'pixelate', 'blur', 'sharpen', 'emboss', 'technicolor',
					'polaroid', 'blend_color', 'gamma', 'kodachrome',
					'blackwhite', 'blend_image', 'hue', 'resize', 'blend'
				],
				grayscale: {
					value: '',
					disabled: true
				},
				invert: {
					value: '',
					disabled: true
				},
				'remove_color': {
					value: '',
					color: '#00f900',
					distance: 0.02,
					disabled: true
				},
				'sepia': {
					value: '',
					disabled: true
				},
				'brownie': {
					value: '',
					disabled: true
				},
				'brightness': {
					value: '0.1',
					brightness: true,
					disabled: true
				},
				'contrast': {
					value: '0',
					contrast: '',
					disabled: true
				},
				'saturation': {
					value: '0',
					saturation: '',
					disabled: true
				},
				'vibrance': {
					value: '0',
					vibrance: '',
					disabled: true
				},
				'noise': {
					value: '0',
					noise: '',
					disabled: true
				},
				'vintage': {
					value: '0',
					vintage: '',
					disabled: true
				},
				'pixelate': {
					value: '4',
					pixelate: '',
					disabled: true
				},
				'blur': {
					value: '0.1',
					blur: '',
					disabled: true
				},
				'sharpen': {
					value: '',
					disabled: true
				},
				'emboss': {
					value: '',
					disabled: true
				},
				'technicolor': {
					value: '',
					disabled: true
				},
				'polaroid': {
					value: '',
					disabled: true
				},
				blend: {
					value: '',
					color: '#00f900',
					mode: 'add',
					image: '',
					imageMode: 'multiply',
					alpha: '1',
					imageAlpha: '1',
					disabled: true
				},
				'blend_color': {
					value: '',
					disabled: true
				},
				'gamma': {
					red: '1',
					green: '1',
					blue: '1',
					value: '',
					disabled: true
				},
				'kodachrome': {
					value: '',
					disabled: true
				},
				'blackwhite': {
					value: '',
					disabled: true
				},
				'blend_image': {
					value: '',
					disabled: true
				},
				'hue': {
					value: '',
					disabled: true
				},
				'resize': {
					value: '',
					disabled: true
				}
			}
		},
		methods: {
			getFilter(index) {
				let canvas = this.canvas
				let obj = canvas.getActiveObject();
				return obj.filters[index];
			},
			applyFilterValue(index, prop, value) {
				let canvas = this.canvas
				let obj = canvas.getActiveObject();
				if (obj.filters[index]) {
					obj.filters[index][prop] = value;
					let timeStart = +new Date();
					obj.applyFilters();
					let timeEnd = +new Date();
					let dimString = canvas.getActiveObject().width + ' x ' +
						canvas.getActiveObject().height;
					this.bench = dimString + 'px ' + parseFloat(timeEnd - timeStart) + 'ms';
					canvas.renderAll();
				}
			},
			applyFilter(index, filter) {
				let canvas = this.canvas
				let obj = canvas.getActiveObject();
				obj.filters[index] = filter;
				let timeStart = +new Date();
				obj.applyFilters();
				let timeEnd = +new Date();
				let dimString = canvas.getActiveObject().width + ' x ' +
					canvas.getActiveObject().height;
				this.bench = dimString + 'px ' + parseFloat(timeEnd - timeStart) + 'ms';
				canvas.renderAll();
			},
			webglC(value) {
				if (value) {
					fabric.filterBackend = this.webglBackend;
				} else {
					fabric.filterBackend = this.canvas2dBackend;
				}
			},
			grayscaleC(value) {
				let f = fabric.Image.filters;
				this.applyFilter(0, value && new f.Grayscale());
			},
			invertC(value) {
				let f = fabric.Image.filters;
				this.applyFilter(1, value && new f.Invert());
			},
			sepiaC(value) {
				let f = fabric.Image.filters;
				this.applyFilter(3, value && new f.Sepia());
			},
			blackwhiteC(value) {
				let f = fabric.Image.filters;
				this.applyFilter(19, value && new f.BlackWhite());
			},
			averageC(value) {
				this.applyFilterValue(0, 'mode', value)
			},
			brownieC(value) {
				let f = fabric.Image.filters;
				this.applyFilter(4, value && new f.Brownie());
			},
			vintageC(value) {
				let f = fabric.Image.filters;
				this.applyFilter(9, value && new f.Vintage());
			},
			kodachromeC(value) {
				let f = fabric.Image.filters;
				this.applyFilter(18, value && new f.Kodachrome());
			},
			technicolorC(value) {
				let f = fabric.Image.filters;
				this.applyFilter(14, value && new f.Technicolor());
			},
			polaroidC(value) {
				let f = fabric.Image.filters;
				this.applyFilter(15, value && new f.Polaroid());
			},
			remove_colorC(value) {
				let f = fabric.Image.filters;
				this.applyFilter(2, value && new f.RemoveColor({
					distance: this.remove_color.distance,
					color: this.remove_color.color,
				}));
			},
			remove_color_colorC(value) {
				this.applyFilterValue(2, 'color', value);

			},
			remove_color_distanceC(value) {
				let f = fabric.Image.filters;
				this.applyFilterValue(2, 'distance', value);

			},
			brightnessC(value) {
				let f = fabric.Image.filters;
				this.applyFilter(5, value && new f.Brightness({
					brightness: this.brightness.value
				}));
			},
			brightnessValueC(value) {
				this.applyFilterValue(5, 'brightness', parseFloat(value));
			},
			gammaC(value) {
				let f = fabric.Image.filters;
				let v1 = parseFloat(this.gamma.red);
				let v2 = parseFloat(this.gamma.green);
				let v3 = parseFloat(this.gamma.blue);
				this.applyFilter(17, value && new f.Gamma({
					gamma: [v1, v2, v3]
				}));
			},
			gammaColorC(index, value) {
				let current = this.getFilter(17).gamma;
				current[index] = parseFloat(value);
				this.applyFilterValue(17, 'gamma', current);
			},
			contrastC(value) {
				let f = fabric.Image.filters;
				this.applyFilter(6, value && new f.Contrast({
					contrast: parseFloat(this.contrast.value)
				}));
			},
			contrastValueC(value) {
				let f = fabric.Image.filters;
				this.applyFilterValue(6, 'contrast', parseFloat(value));
			},
			saturationC(value){
				let f = fabric.Image.filters;
				this.applyFilter(7, value && new f.Saturation({
				      saturation: parseFloat(this.saturation.value)
				    }));
			},
			saturationValueC(value){
				this.applyFilterValue(7, 'saturation', parseFloat(value));
			},
			vibranceC(value){
				let f = fabric.Image.filters;
				this.applyFilter(8, value && new f.Vibrance({
					vibrance: parseFloat(this.vibrance.value)
				    }));
			},
			vibranceValueC(value){
				this.applyFilterValue(8, 'vibrance', parseFloat(value));
			},
			hueC(value){
				let f = fabric.Image.filters;
				this.applyFilter(21, value && new f.HueRotation({
				      rotation: parseFloat(this.vibrance.value)
				    }));
			},
			hueValueC(value){
				this.applyFilterValue(21, 'rotation', parseFloat(value));
			},
			noiseC(value){
				let f = fabric.Image.filters;
				this.applyFilter(9, value && new f.Noise({
				      noise: parseFloat(this.vibrance.value)
				    }));
			},
			noiseValueC(value){
				this.applyFilterValue(9, 'noise', parseFloat(value));
			},
			pixelateC(value){
				let f = fabric.Image.filters;
				this.applyFilter(10, value && new f.Pixelate({
				      blocksize: parseFloat(this.pixelate.value)
				    }));
			},
			pixelateValueC(value){
				this.applyFilterValue(10, 'blocksize', parseFloat(value));
			},
			blurC(value){
				let f = fabric.Image.filters;
				this.applyFilter(11, value && new f.Blur({
					blur: parseFloat(this.pixelate.value)
				    }));
			},
			blurValueC(value){
				this.applyFilterValue(11, 'blur', parseFloat(value));
			},
			sharpenC(value){
				let f = fabric.Image.filters;
				this.applyFilter(12, value && new f.Convolute({
				      matrix: [  0, -1,  0,
				                -1,  5, -1,
				                 0, -1,  0 ]
				    }));
			},
			embossC(value){
				let f = fabric.Image.filters;
				this.applyFilter(13, value && new f.Convolute({
					  matrix: [ 1,   1,  1,
								1, 0.7, -1,
							   -1,  -1, -1 ]
					}));

			},
			blendC(value){
				let f = fabric.Image.filters;
				this.applyFilter(16, value && new f.BlendColor({
				      color:  this.blend.color,
				      mode: this.blend.mode,
				      alpha:  this.blend.alpha,
				    }));
			},
			blendModeC(mode, value){
				this.applyFilterValue(16, mode, value);
			},
			blendImageC(value){
				let f = fabric.Image.filters;
				this.applyFilter(20, value && new f.BlendImage({
				      image: this.fImage,
				    }));
			},
			blendImageModeC(value){
				this.applyFilterValue(20, 'mode', value);
			},
			blendImageAlphaC(value){
				this.applyFilterValue(20, 'mode', value);
			}
		},
		mounted() {
			try {
				this.webglBackend = new fabric.WebglFilterBackend();
			} catch (e) {
				console.log(e)
			}
			this.canvas2dBackend = new fabric.Canvas2dFilterBackend()

			fabric.filterBackend = fabric.initFilterBackend();
			fabric.Object.prototype.transparentCorners = false;

			let self = this

			fabric.Object.prototype.padding = 5;
			fabric.Object.prototype.transparentCorners = false;


			let canvas = this.canvas,
				f = fabric.Image.filters;
			let filters = self.filters

			canvas.on({
				'selection:created': function() {
					for (let i = 0; i < filters.length; i++) {
						if (self[filters[i]]) {
							self[filters[i]].disabled = false
							self[filters[i]].checked = !!canvas.getActiveObject().filters[i]
						}
					}
				},
				'selection:cleared': function() {
					for (let i = 0; i < filters.length; i++) {
						if (self[filters[i]]) {
							self[filters[i]].disabled = true
						}
					}

				}
			});


			fabric.Image.fromURL('/public/pug.jpg', function(img) {
				let oImg = img.set({
					left: 0,
					top: 0
				}).scale(0.25);
				canvas.add(oImg);
			});
			fabric.Image.fromURL('/public/printio.png', function(img) {
				let oImg = img.set({
					left: 150,
					top: 0
				}).scale(0.4);
				canvas.add(oImg);
			});
			fabric.Image.fromURL('/public/dragon.jpg', function(img) {
				let oImg = img.set({
					left: 0,
					top: 270
				}).scale(0.2);
				canvas.add(oImg);
			});
			fabric.Image.fromURL('/public/dragon2.jpeg', function(img) {
				let oImg = img.set({
					left: 0,
					top: 500
				}).scale(0.2);
				canvas.add(oImg);
			});



			let imageElement = document.createElement('img');
			imageElement.src = '/public/printio.png';
			let fImage = this.fImage = new fabric.Image(imageElement);
			fImage.scaleX = 1;
			fImage.scaleY = 1;
			fImage.top = 15;
			fImage.left = 15;

		},
	}
</script>

<style>
</style>
