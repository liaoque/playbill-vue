<template>
	<div style="display: inline-block">
		<p>
			Pattern:
			<select id="patterns" v-model="patterns" @change="patternsC(patterns)">
				<option>honey_im_subtle.png</option>
				<option>nasty_fabric.png</option>
				<option>retina_wood.png</option>
				<option>greyfloral.png</option>
				<option>escheresque.png</option>
				<option>escheresque_ste.png</option>
				<option>bedge_grunge.png</option>
				<option>ladybug.png</option>
				<option>dragon2.jpeg</option>
				<option>pug.jpg</option>
			</select>
		</p>
		<p>
			Repeat:
			<select id="repeat" v-model="repeat" @change="repeatC(repeat)">
				<option>repeat</option>
				<option>repeat-x</option>
				<option>repeat-y</option>
				<option>no-repeat</option>
			</select>
		</p>
	</div>
</template>

<script>
	export default {
		name: 'patterns',
		props: ['canvas'],
		data() {
			return {
				patterns: 'honey_im_subtle.png',
				repeat: 'repeat',
				shape: null,
				text: null,
			}
		},
		methods: {
			patternsC(value) {
				this.loadPattern('/public/' + value);
			},
			repeatC(value) {
				var canvas = this.canvas;
				this.text.fill.repeat = value;
				canvas.renderAll();
			},
			loadPattern(url) {
				let text = this.text
				let shape = this.shape
				var canvas = this.canvas;
				fabric.util.loadImage(url, function(img) {
					text.set('fill', new fabric.Pattern({
						source: img,
						repeat: document.getElementById('repeat').value
					}));
					shape.set('fill', new fabric.Pattern({
						source: img,
						repeat: document.getElementById('repeat').value
					}));
					canvas.renderAll();
				});
			}
		},
		mounted() {
			var canvas = this.canvas;
			fabric.Object.prototype.transparentCorners = false;

			var text = this.text = new fabric.Text('Honey,\nI\'m subtle', {
				fontSize: 250,
				left: 0,
				top: 0,
				lineHeight: 1,
				originX: 'left',
				fontFamily: 'Helvetica',
				fontWeight: 'bold',
				statefullCache: true,
				scaleX: 0.4,
				scaleY: 0.4
			});
			var shape = this.shape = new fabric.Rect({
				width: 200,
				height: 100,
				left: 10,
				top: 300,
			});
			canvas.add(text, shape);

			this.loadPattern('/public/honey_im_subtle.png');

		}
	}
</script>

<style>
</style>
