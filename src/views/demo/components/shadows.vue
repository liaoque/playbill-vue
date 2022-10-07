<template>
</template>

<script>
	export default{
		name:'shadows',
		props:['canvas'],
		mounted(){
			let canvas = this.canvas;
			  fabric.Object.prototype.transparentCorners = false;
			  fabric.Object.prototype.objectCaching = false;
			  let minScale = 1, maxScale = 2;

			  fabric.loadSVGFromURL('/public/112.svg', function(objects, options) {

			    let obj = fabric.util.groupSVGElements(objects, options);
			    canvas.add(obj);

			    obj.set({ left: 80, top: 90, angle: -30, direction: 1, shadow: { color: 'rgba(0,0,0,0.3)' } });

			    // animate angle back and forth (every 2 second)
			    obj.animate({ angle: 30 }, {
			      duration: 2000,
			      easing: fabric.util.ease.easeOutCubic,
			      onChange: canvas.renderAndResetBound,
			      onComplete: function onComplete() {
			        obj.animate({
			          angle: Math.round(obj.angle) === 30 ? -30 : 30
			        }, {
			          duration: 2000,
			          onComplete: onComplete
			        });
			      }
			    });

			    // animate scale and shadow (every second)
			    (function animate(dir) {

			      let options = {
			        easing: fabric.util.ease.easeOutCubic,
			        duration: 1000
			      };

			      obj.animate({
			        scaleX: dir ? maxScale : minScale,
			        scaleY: dir ? maxScale : minScale
			      }, options);

			      obj.animate({
			        'shadow.offsetX': dir ? 20 : 0.00001,
			        'shadow.offsetY': dir ? 20 : 0.00001
			      }, options);

			      obj.animate({ 'shadow.blur': dir ? 20 : 0 }, fabric.util.object.extend({
			        onChange: canvas.renderAndResetBound,
			        onComplete: function() {
			          obj.direction = !obj.direction;
			          animate(obj.direction);
			        }
			      }, options));

			    })(1);
			  });

		}
	}

</script>

<style>
</style>
