<template>
</template>

<script>
	export default {
		name: 'polaroid',
		props: ['canvas'],
		data() {
			return {

			}
		},
		methods() {

		},
		mounted() {
			let canvas = this.canvas;
			canvas.set({
				backgroundColor: '#333',
				HOVER_CURSOR: 'pointer'
			})

			let PolaroidPhoto = fabric.util.createClass(fabric.Image, {
				H_PADDING: 20,
				V_PADDING: 50,
				originX: 'center',
				originY: 'center',
				initialize: function(src, options) {
					this.callSuper('initialize', options);
					this.image = new Image();
					this.image.src = src;
					this.image.onload = (function() {
						this.width = this.image.width;
						this.height = this.image.height;
						this.loaded = true;
						this.setCoords();
						this.fire('image:loaded');
					}).bind(this);
				},
				_render: function(ctx) {
					if (this.loaded) {
						ctx.fillStyle = '#fff';
						ctx.fillRect(
							-(this.width / 2) - this.H_PADDING,
							-(this.height / 2) - this.H_PADDING,
							this.width + this.H_PADDING * 2,
							this.height + this.V_PADDING * 2);
						ctx.drawImage(this.image, -this.width / 2, -this.height / 2);
					}
				}
			});
			let photo = new PolaroidPhoto('/public/pug.jpg', {
				top: 200,
				left: 200,
				scaleX: 0.2,
				scaleY: 0.2
			});
			photo.on('image:loaded', canvas.renderAll.bind(canvas));
			photo.drawBorders = photo.drawCorners = function() {
				return this
			};

			function makeHandler(arg) {
				return function(e) {
					if (e.target) {
						e.target.animate('angle', arg, {
							duration: 100,
							onChange: canvas.renderAll.bind(canvas)
						});
					}
				};
			}
			canvas.on({
				'mouse:down': makeHandler('+10'),
				'mouse:up': makeHandler('-10')
			});
			canvas.add(photo);
		}
	}
</script>

<style>
</style>
