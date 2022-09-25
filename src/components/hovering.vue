<template>
</template>

<script>
	export default {
		name: 'hovering',
		props: ['canvas'],
		data() {
			return {

			}
		},
		methods() {

		},
		mounted() {
			let canvas = this.canvas;

			fabric.Object.prototype.transparentCorners = false;

			canvas.on('mouse:over', function(e) {
			    if(e.target){
                    e.target.set('fill', 'red');
                }
				canvas.renderAll();
			});

			canvas.on('mouse:out', function(e) {
                if(e.target){
                    e.target.set('fill', 'green');
                }
				canvas.renderAll();
			});

			// add random objects
			for (let i = 15; i--;) {
				let dim = fabric.util.getRandomInt(30, 60);
				let klass = ['Rect', 'Triangle', 'Circle'][fabric.util.getRandomInt(0, 2)];
				let options = {
					top: fabric.util.getRandomInt(0, 600),
					left: fabric.util.getRandomInt(0, 600),
					fill: 'green'
				};
				if (klass === 'Circle') {
					options.radius = dim;
				} else {
					options.width = dim;
					options.height = dim;
				}
				canvas.add(new fabric[klass](options));
			}


		}
	}
</script>

<style>
</style>
