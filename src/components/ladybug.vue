<template>
</template>

<script>
	export default {
		name: 'opacity_mouse_move',
		props: ['canvas'],
		data() {
			return {

			}
		},
		methods() {

		}
		mounted() {
			var canvas = this.canvas;

			fabric.Object.prototype.transparentCorners = false;
			fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';



			fabric.loadSVGFromURL('/public/135.svg', function(objects) {

				var obj = objects[0].scale(0.25);
				obj.originX = 'center';
				obj.originY = 'center';
				canvas.centerObject(obj);
				canvas.add(obj);

				obj.clone(function(c) {
					canvas.add(c.set({
						left: 100,
						top: 100,
						angle: -15
					}));
				});
				obj.clone(function(c) {
					canvas.add(c.set({
						left: 480,
						top: 100,
						angle: 15
					}));
				});
				obj.clone(function(c) {
					canvas.add(c.set({
						left: 100,
						top: 400,
						angle: -15
					}));
				});
				obj.clone(function(c) {
					canvas.add(c.set({
						left: 480,
						top: 400,
						angle: 15
					}));
				});

				canvas.on('mouse:move', function(options) {

					var p = canvas.getPointer(options.e);

					canvas.forEachObject(function(obj) {
						var distX = Math.abs(p.x - obj.left),
							distY = Math.abs(p.y - obj.top),
							dist = Math.round(Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2)));

						obj.set('opacity', 1 / (dist / 20));
					});

					canvas.renderAll();
				});
			});

		}
	}
</script>

<style>
</style>
