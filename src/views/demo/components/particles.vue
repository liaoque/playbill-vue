<template>
</template>

<script>
	export default {
		name: 'particles',
		props: ['canvas'],
		mounted() {
			let total = 1000,
				blobs = new Array(total),
				myfps = 60,
				updateTime = 1000 / myfps,
				mouse_pos = {
					x: 0,
					y: 0
				},
				canvas = this.canvas,
				maxx = canvas.width,
				maxy = canvas.height,
				msg, startTime, prevTime, ms, frames;

			canvas.set({
				renderOnAddRemove: false,
				selection: false
			})

			canvas.setBackgroundImage('/public/bkg.jpeg');
			fabric.Image.fromURL('/public/blob.png', blobLoaded);

			canvas.on('mouse:move', function(options) {
				mouse_pos = canvas.getPointer(options.e);
			});

			function blobLoaded(img) {
				for (let i = 0; i < total; i++) {
					let img2 = new fabric.Image(img.getElement(), {
						left: Math.random() * maxx,
						top: Math.random() * maxy,
						selectable: false
					});
					img2.vx = 0;
					img2.vy = 0;
					canvas.add(img2);
					blobs[i] = img2;
				}

				msg = new fabric.Text('FPS: 0/' + myfps, {
					fontFamily: 'Arial',
					fontSize: 12,
					fill: 'white',
					fontWeight: 'bold',
					left: 50,
					top: 35,
					selectable: false
				});
				canvas.add(msg);

				frames = 0;
				startTime = Date.now(), prevTime = startTime;
				animate();
			}

			function animate() {
				for (let i = 0; i < total; i++) {
					let blob = blobs[i];
					let dx = blob.left - mouse_pos.x;
					let dy = blob.top - mouse_pos.y;
					let vx = blob.vx;
					let vy = blob.vy;

					if (dx * dx + dy * dy <= 10000) {
						vx += dx * 0.01;
						vy += dy * 0.01;
					}
					vx *= 0.95;
					vy *= 0.95;

					vx += Math.random() - 0.5;
					vy += Math.random() - 0.5;

					let x = blob.left += vx;
					let y = blob.top += vy;

					if (x < 0 || x > maxx || y < 0 || y > maxy) {
						let r = Math.atan2(y - maxy / 2, x - maxx / 2);
						vx = -Math.cos(r);
						vy = -Math.sin(r);
					}

					blob.vx = vx;
					blob.vy = vy;
				}

				let time = Date.now();
				frames++;

				if (time > prevTime + 1000) {
					let fps = Math.round((frames * 1000) / (time - prevTime));
					prevTime = time;
					frames = 0;

					msg.set('text', "FPS: " + fps + "/" + myfps);
				}

				fabric.util.requestAnimFrame(animate, canvas.getElement());
				canvas.renderAll();
			}
		}
	}
</script>

<style>
</style>
