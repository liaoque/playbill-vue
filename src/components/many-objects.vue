<template>
	<div id="">
		<div id="results-c1" style="background-color: antiquewhite;">{{ resultsC1 }}</div>​

		<canvas id="c1" width="400" height="350"></canvas>
	</div>
	<div id="" style="margin-left: 10px;">
		<div id="results-c2" style="background-color: antiquewhite;">{{ resultsC2 }}</div>​
	
		<canvas id="c2" width="400" height="350"></canvas>
	</div>
</template>

<script>
	export default {
		name: 'many-objects',
		props: ['canvas'],
		data() {
			return {
				resultsC1: '',
				resultsC2: '',
			}
		},
		mounted() {

			fabric.Object.prototype.transparentCorners = false;
			this.__canvases = [];

			var i, dot,
				t1, t2,
				startTimer = function() {
					t1 = new Date().getTime();
					return t1;
				},
				stopTimer = function() {
					t2 = new Date().getTime();
					return t2 - t1;
				},
				getRandomInt = fabric.util.getRandomInt,
				rainbow = ["#ffcc66", "#ccff66", "#66ccff", "#ff6fcf", "#ff6666"],
				rainbowEnd = rainbow.length - 1;

			//
			// Rendering canvas #1
			//
			var canvas1 = new fabric.Canvas('c1', {
				backgroundColor: "#000"
			});

			startTimer();
			for (i = 100; i >= 0; i--) {
				dot = new fabric.Circle({
					left: getRandomInt(0, 400),
					top: getRandomInt(0, 350),
					radius: 3,
					fill: rainbow[getRandomInt(0, rainbowEnd)],
					objectCaching: false
				});
				canvas1.add(dot);
			}
			this.resultsC1 = 'Regular ( objectCaching = false ) rendering of 100 elements in ' + stopTimer() + 'ms';
			this.__canvases.push(canvas1);

			//
			// Rendering canvas #2
			//
			var canvas2 = new fabric.Canvas('c2', {
				backgroundColor: "#000",
				renderOnAddRemove: false
			});

			startTimer();
			for (i = 1000; i >= 0; i--) {
				dot = new fabric.Circle({
					left: getRandomInt(0, 400),
					top: getRandomInt(0, 350),
					radius: 3,
					fill: rainbow[getRandomInt(0, rainbowEnd)],
					objectCaching: false
				});
				canvas2.add(dot);
			}
			canvas2.renderAll(); // Note, calling renderAll() is important in this case
			this.resultsC2 =
				'Rendering 1000 elements using canvas.renderOnAddRemove = false and objectCaching = false in ' +
				stopTimer() + 'ms';
			this.__canvases.push(canvas2);
		}
	}
</script>

<style>
</style>
