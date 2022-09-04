<template>
	<div style="display: inline-block; width: 140px">
		<select id="easing" v-model="easing">
			<option>easeInQuad</option>
			<option>easeOutQuad</option>
			<option>easeInOutQuad</option>
			<option>easeInCubic</option>
			<option>easeOutCubic</option>
			<option>easeInOutCubic</option>
			<option>easeInQuart</option>
			<option>easeOutQuart</option>
			<option>easeInOutQuart</option>
			<option>easeInQuint</option>
			<option>easeOutQuint</option>
			<option>easeInOutQuint</option>
			<option>easeInSine</option>
			<option>easeOutSine</option>
			<option>easeInOutSine</option>
			<option>easeInExpo</option>
			<option>easeOutExpo</option>
			<option>easeInOutExpo</option>
			<option>easeInCirc</option>
			<option>easeOutCirc</option>
			<option>easeInOutCirc</option>
			<option>easeInElastic</option>
			<option>easeOutElastic</option>
			<option>easeInOutElastic</option>
			<option>easeInBack</option>
			<option>easeOutBack</option>
			<option>easeInOutBack</option>
			<option>easeInBounce</option>
			<option>easeOutBounce</option>
			<option>easeInOutBounce</option>
		</select>
		<button id="animate" :disabled="disabledBtn" @click="animateBtn">Animate</button>
	</div>
</template>

<script>
	export default {
		name: "animation-easing",
		props: ['canvas'],
		data(){
			return {
				easing: 'easeInQuad',
				disabledBtn: false,
				rect: null
			}
		},
		methods: {
			animateBtn() {
				var canvas = this.canvas;
				var rect = this.rect
				this.disabled = true;
				let self = this
				rect.animate('left', rect.left === 100 ? 400 : 100, {
					duration: 1000,
					onChange: canvas.renderAll.bind(canvas),
					onComplete: function() {
						self.disabled = false;
					},
					easing: fabric.util.ease[this.easing]
				});
			}
		},
		mounted() {
			var canvas = this.canvas;

			var rect = this.rect = new fabric.Rect({
				width: 50,
				height: 50,
				left: 100,
				top: 100,
				stroke: '#aaf',
				strokeWidth: 5,
				fill: '#faa',
				selectable: false
			});
			canvas.add(rect);

			
		}
	}
</script>

<style>
</style>
