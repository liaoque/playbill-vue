<template>
</template>

<script>
	export default {
		name: 'solar-system',
		props: ['canvas'],
		mounted() {
			fabric.Object.prototype.originX = fabric.Object.prototype.originY = 'center';

			let canvas = this.canvas;
			canvas.set({
				hoverCursor: 'pointer',
				selection: false,
				perPixelTargetFind: true,
				targetFindTolerance: 5
			})


			// load sun and center it
			fabric.Image.fromURL('https://static.wm18.com/static/images/sun.png', function(sunImg) {
				canvas.add(sunImg);
				sunImg.center();
			});

			let planetSize = 26,
				totalPlanets = 12,
				rotationSpeed = 20000,
				orbits = [],
				planets = [],
				planetNames = [
					'Selene', 'Mimas', 'Ares', 'Enceladus', 'Tethys', 'Dione',
					'Zeus', 'Rhea', 'Titan', 'Janus', 'Hyperion', 'Iapetus'
				];

			let hoverCircle = new fabric.Circle({
				radius: 13,
				fill: '#000',
				stroke: 'rgb(0,192,255)',
				strokeWidth: 3,
				left: -100,
				top: -100
			});

			let planetLabel = new fabric.Text('', {
				fill: '#fff',
				fontSize: 16,
				fontFamily: 'Open Sans',
				textBackgroundColor: '#002244'
			});

			// load sprite with planets
			fabric.Image.fromURL('/public/planets.png', function(planetsImg) {

				// temp canvas to generate planet images
				let tempCanvas = new fabric.StaticCanvas();

				// only to fit one planet onto temp canvas
				tempCanvas.setDimensions({
					width: planetSize,
					height: planetSize
				});

				// make sure image is drawn from left/top corner
				planetsImg.originX = 'left';
				planetsImg.originY = 'top';

				// add it onto temp canvas
				tempCanvas.add(planetsImg);

				for (let i = 0; i < totalPlanets; i++) {
					createOrbit(i);
				}
				canvas.add(hoverCircle);

				for (let i = 0; i < totalPlanets; i++) {
					createPlanet(i, planetsImg, tempCanvas);
				}

				canvas.add(planetLabel);
			});

			function createOrbit(i) {
				let orbit = new fabric.Circle({
					radius: 26 * i + 90,
					left: canvas.getWidth() / 2,
					top: canvas.getHeight() / 2,
					fill: '',
					stroke: 'rgba(0,192,255,0.5)',
					hasBorders: false,
					hasControls: false,
					lockMovementX: true,
					lockMovementY: true,
					index: i
				});
				canvas.add(orbit);
				orbits.push(orbit);
			}

			function createPlanet(i, planetsImg, tempCanvas) {

				// offset planets sprite to fit each of the planets onto it
				planetsImg.left = -planetSize * i;
				planetsImg.setCoords();
				tempCanvas.renderAll();

				// get data url for that planet
				let img = new Image();
				img.onload = function() {
					// create image of a planet from data url
					let oImg = new fabric.Image(img, {

						name: planetNames[i],
						index: i,
						scaleX: 1 / canvas.getRetinaScaling(),
						scaleY: 1 / canvas.getRetinaScaling(),
						// position planet 90px from canvas center and 26px from previous planet
						left: (canvas.getWidth() / 2) - 90 - (planetSize * i),
						top: canvas.getHeight() / 2,

						// remove borders and corners but leaving object available for events
						hasBorders: false,
						hasControls: false
					});
					canvas.add(oImg);
					planets.push(oImg);
					animatePlanet(oImg, i);
				}
				img.src = tempCanvas.toDataURL();
			}

			function animatePlanet(oImg, planetIndex) {

				let radius = planetIndex * 26 + 90,

					// rotate around canvas center
					cx = canvas.getWidth() / 2,
					cy = canvas.getHeight() / 2,

					// speed of rotation slows down for further planets
					duration = (planetIndex + 1) * rotationSpeed,

					// randomize starting angle to avoid planets starting on one line
					startAngle = fabric.util.getRandomInt(-180, 0),
					endAngle = startAngle + 359;

				(function animate() {

					fabric.util.animate({
						startValue: startAngle,
						endValue: endAngle,
						duration: duration,

						// linear movement
						easing: function(t, b, c, d) {
							return c * t / d + b;
						},

						onChange: function(angle) {
							angle = fabric.util.degreesToRadians(angle);

							let x = cx + radius * Math.cos(angle);
							let y = cy + radius * Math.sin(angle);

							oImg.set({
								left: x,
								top: y
							}).setCoords();

							// only render once
							if (planetIndex === totalPlanets - 1) {
								canvas.renderAll();
							}
						},
						onComplete: animate
					});
				})();
			}

			let hoverTarget, prevHoverTarget;

			canvas.on('mouse:over', function(options) {
				hoverTarget = options.target;
			});

			canvas.on('mouse:out', function(options) {
				hoverTarget = null;
				prevHoverTarget = options.target;
			});

			canvas.on('after:render', function() {
				orbits.forEach(function(orbit) {
					orbit.strokeWidth = 1;
					orbit.stroke = 'rgba(0,192,255,0.5)';
				});
				if (hoverTarget && !hoverTarget.text && hoverTarget.index) {
					let hoveredPlanet = planets[hoverTarget.index];
					let hoveredOrbit = orbits[hoveredPlanet.index];

					hoveredOrbit.set({
						strokeWidth: 3,
						stroke: 'rgb(0,192,255)'
					});

					hoverCircle.set({
						left: hoveredPlanet.left,
						top: hoveredPlanet.top
					});

					planetLabel.set({
						left: hoveredPlanet.left + 50,
						top: hoveredPlanet.top + 20,
						text: hoveredPlanet.name
					});
				} else {
					hoverCircle.set({
						left: -100,
						top: -100
					});
					planetLabel.set({
						left: -100,
						top: -100
					});
				}
			});

		}
	}
</script>

<style>
</style>
