<template>
</template>

<script>
	export default{
		name:'polygon-animation',
		props:['canvas'],
		mounted() {
			let canvas = this.canvas ;

			  let startPoints = [
			    {x: 0, y: 42},
			    {x: 155, y: 0},
			    {x: 155, y: 243},
			    {x: 0, y: 256}
			  ];

			  let endPoints = [
			    {x: 185, y: 0},
			    {x: 250, y: 100},
			    {x: 385, y: 170},
			    {x: 0, y: 245}
			  ];

			  let clonedStartPoints = startPoints.map(function(o){
			    return fabric.util.object.clone(o);
			  });

			  let polygon = new fabric.Polygon(clonedStartPoints, {
			    left: 0,
			    top: 0,
			    fill: 'purple',
			    selectable: false,
			    objectCaching: false,
			  });
			  canvas.add(polygon);

			  function animatePoint(i, prop, endPoints) {
			    fabric.util.animate({
			      startValue: polygon.points[i][prop],
			      endValue: endPoints[i][prop],
			      duration: 1000,
			      onChange: function(value) {
			        polygon.points[i][prop] = value;
			        // only render once
			        if (i === startPoints.length - 1 && prop === 'y') {
			          canvas.renderAll();
			        }
			      },
			      onComplete: function() {
			        polygon.setCoords();
			        // only start animation once
			        if (i === startPoints.length - 1 && prop === 'y') {
			          even = !even;
			          animate();
			        }
			      }
			    });
			  }

			  function animate() {
			    for (let i = 0, len = startPoints.length; i < len; i++) {
			      animatePoint(i, 'x', even ? endPoints : startPoints);
			      animatePoint(i, 'y', even ? endPoints : startPoints);
			    }
			  }

			  let even = true;
			  setTimeout(animate, 1000);

		}
	}
</script>

<style>
</style>
