<template>

</template>

<script>
	export default {
		name: 'per-pixel-drag-drop',
		props: ['canvas'],
		mounted() {
			var canvas = this.canvas;

			canvas.set({
				hoverCursor: 'pointer',
				selection: false,
				targetFindTolerance: 2
			})

			canvas.on({
				'object:moving': function(e) {
					e.target.opacity = 0.5;
				},
				'object:modified': function(e) {
					e.target.opacity = 1;
				}
			});

			for (var i = 0, len = 15; i < len; i++) {
				fabric.Image.fromURL('/public/ladybug.png', function(img) {
					img.set({
						left: fabric.util.getRandomInt(0, 600),
						top: fabric.util.getRandomInt(0, 500),
						angle: fabric.util.getRandomInt(0, 90)
					});

					img.perPixelTargetFind = true;
					img.hasControls = img.hasBorders = false;

					img.scale(fabric.util.getRandomInt(50, 100) / 100);

					canvas.add(img);
				});
			}
		}
	}
</script>

<style>
</style>
