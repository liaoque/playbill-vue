<template>
	<input type="button" value="Some button" id="inline-btn" style="position:absolute" :style="{left: btn.left,top:btn.top }">
</template>

<script>
	export default {
		name: "interaction-with-objects-outside-canvas",
		props: ['canvas'],
		data() {
			return {
				btn: {
					left: 0,
					top: 0,
				},
			}
		},
		mounted() {
			let canvas = this.canvas;
			fabric.Object.prototype.transparentCorners = false;
			fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';

			fabric.Canvas.prototype.getAbsoluteCoords = function(object) {
				return {
					left: object.left + this._offset.left,
					top: object.top + this._offset.top
				};
			}

			let btnWidth = 85,
				btnHeight = 18;

			let self = this;

			function positionBtn(obj) {
				let absCoords = canvas.getAbsoluteCoords(obj);

				self.btn.left = (absCoords.left - btnWidth / 2) + 'px';
				self.btn.top = (absCoords.top - btnHeight / 2) + 'px';
			}

			fabric.Image.fromURL('/public/pug.jpg', function(img) {

				canvas.add(img.set({
					left: 250,
					top: 250,
					angle: 30
				}).scale(0.25));

				img.on('moving', function() {
					positionBtn(img)
				});
				img.on('scaling', function() {
					positionBtn(img)
				});
				positionBtn(img);
			});

		}
	}
</script>

<style>
</style>
