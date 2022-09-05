<template>
</template>

<script>
	export default {
		name: 'ladybug',
		props: ['canvas'],
		data() {
			return {

			}
		},
		methods() {

		},
		mounted() {
			var canvas = this.canvas;


			fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';

			setInterval(function() {
				fabric.Image.fromURL('/public/ladybug.png', function(img) {
					img.set('left', fabric.util.getRandomInt(200, 600)).set('top', -50);
					img.movingLeft = !!Math.round(Math.random());
					canvas.add(img);
				});
			}, 250);

			(function animate() {
				canvas.getObjects().concat().forEach(function(obj) {
					obj.left += (obj.movingLeft ? -1 : 1);
					obj.top += 1;
					if (obj.left > 900 || obj.left < -100 || obj.top > 500) {
						canvas.remove(obj);
					} else {
						obj.rotate(obj.get('angle') + 2);
					}
				});
				canvas.renderAll();
				fabric.util.requestAnimFrame(animate);
			})();


		}
	}
</script>

<style>
</style>
