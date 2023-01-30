<template>
</template>

<script>
	export default {
		name: 'clipping',
		props: ['canvas'],
		mounted() {
			let canvas = this.canvas;
			fabric.Object.prototype.transparentCorners = false;
			let radius = 300;
			canvas.preserveObjectStacking = true;

			// 狗
			fabric.Image.fromURL('/public/pug_small.jpg', function(img) {
				img.scale(0.5).set({
					left: 100,
					top: 100,
					// 角度？？
					angle: -15,
					// 中心点裁切
					clipPath: new fabric.Circle({
						radius: radius,
						originX: 'center',
						originY: 'center',
					}),
				});

				(function animate() {
					// startValue， 开始
					// endValue， 结束
					// duration 速度
					fabric.util.animate({
						startValue: Math.round(radius) === 50 ? 50 : 300,
						endValue: Math.round(radius) === 50 ? 300 : 50,
						duration: 3000,
						onChange: function(value) {
							radius = value;
							// 设置图片的半径
							img.clipPath.set('radius', value);
							img.set('dirty', true);
							canvas.renderAll();
						},
						onComplete: animate
					});
				})();

				canvas.insertAt(img, 0);
			});

			fabric.Image.fromURL('/public/mononoke.jpg', function(img) {
				let scalar = 1,
					abort;
				let path = 'M 230 230 A 45 45, 0, 1, 1, 275 275 L 275 230 Z';
				let shell = new fabric.Path(path, {
					fill: '',
					stroke: 'blue',
					strokeWidth: 5,
					scaleX: 2,
					scaleY: 2,
					lockScalingX: true,
					lockScalingY: true,
					lockSkewingX: true,
					lockSkewingY: true,
					originX: 'center',
					originY: 'center',
				});

				let clipPath = new fabric.Path(path, {
					absolutePositioned: true,
					originX: 'center',
					originY: 'center',
					scaleX: 2,
					scaleY: 2
				});

				function animate() {
					abort = fabric.util.animate({
						startValue: 0,
						endValue: 360 * scalar,
						duration: 1000,
						easing: fabric.util.ease.easeInOutSine,
						onChange: function(value) {
							// 设置相同的角度
							shell.set('angle', value);
							clipPath.set('angle', value);
							img.set('dirty', true);
						},
						onComplete: function() {
							scalar += Math.sign(scalar);
							scalar *= -1;
							animate();
						}
					});
				}

				img.scale(0.5).set({
					left: 200,
					top: 180,
					clipPath: clipPath
				});

				shell.on('moving', ({
					e,
					transform,
					pointer
				}) => {
					//  only because they are absolutePositioned
					clipPath.setPositionByOrigin(shell.getCenterPoint(), 'center', 'center');
					img.set('dirty', true);
				});
				shell.on('rotating', () => {
					// 这个事件好像没用到
					clipPath.set({
						angle: shell.angle
					});
					img.set('dirty', true);
				});
				shell.on('selected', () => {
					// 停止
					abort();
				});
				shell.on('deselected', () => {
					scalar = 1;
					animate()
				});
				img.clipPath = clipPath;
				canvas.add(img, shell);
				canvas.setActiveObject(img);

				animate();
			});

		}
	}
</script>

<style>
</style>
