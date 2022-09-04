<template>
</template>

<script>
	export default {
		name: 'bounding-rectangle',
		props: ['canvas'],
		mounted() {
			var canvas = this.canvas;
			fabric.Object.prototype.transparentCorners = false;

			var rect = new fabric.Rect({
				left: 100,
				top: 50,
				width: 100,
				height: 100,
				fill: 'green',
				angle: 20,
				padding: 10
			});
			canvas.add(rect);

			fabric.loadSVGFromURL('/public/15.svg', function(objects, options) {

				var shape = fabric.util.groupSVGElements(objects, options);
				canvas.add(shape.scale(0.6));
				shape.set({
					left: 200,
					top: 100
				}).setCoords();
				canvas.renderAll();

				canvas.forEachObject(function(obj) {
					var setCoords = obj.setCoords.bind(obj);
					obj.on({
						moving: setCoords,
						scaling: setCoords,
						rotating: setCoords
					});
				})
			});

			canvas.on('after:render', function() {
				canvas.contextContainer.strokeStyle = '#555';

				canvas.forEachObject(function(obj) {
					var bound = obj.getBoundingRect();

					canvas.contextContainer.strokeRect(
						bound.left + 0.5,
						bound.top + 0.5,
						bound.width,
						bound.height
					);
				})
			});
		}
	}
</script>

<style>
</style>
