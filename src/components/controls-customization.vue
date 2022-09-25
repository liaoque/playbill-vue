<template>
	<div
		style="display: inline-block; background: #f5f2f0; padding: 0 10px; margin-top: .5em; margin-left: 10px; margin-right: -5px">
		<p>
			<label>
				<input type="checkbox" id="hasControls" v-model="hasControls"
					@change="observeBoolean('hasControls', hasControls)">
				<code>hasControls</code>
			</label>
		</p>
		<p>
			<label>
				<input type="checkbox" id="hasBorders" v-model="hasBorders"
					@change="observeBoolean('hasBorders', hasBorders)">
				<code>hasBorders</code>
			</label>
		</p>
		<p>
			<label>
				<input type="checkbox" id="visible" v-model="visible" @change="observeBoolean('visible', visible)">
				<code>visible</code>
			</label>
		</p>
		<p>
			<label>
				<input type="checkbox" id="selectable" v-model="selectable"
					@change="observeBoolean('selectable',selectable)">
				<code>selectable取消后无法选中</code>
			</label>
		</p>
		<p>
			<label>
				<input type="checkbox" id="evented" v-model="evented" @change="observeBoolean('evented',evented)">
				<code>evented取消后无法缩放等事件</code>
			</label>
		</p>
		<p>
			<label>
				<input type="checkbox" id="transparentCorners" v-model="transparentCorners"
					@change="observeBoolean('transparentCorners',transparentCorners)">
				<code>transparentCorners</code>
			</label>
		</p>
		<p>
			<label>
				<input type="checkbox" id="centeredScaling" v-model="centeredScaling"
					@change="observeBoolean('centeredScaling',centeredScaling)">
				<code>centeredScaling选中后以中心点缩放</code>
			</label>
		</p>
		<p>
			<label>
				<input type="checkbox" id="centeredRotation" v-model="centeredRotation"
					@change="observeBoolean('centeredRotation',centeredRotation)">
				<code>centeredRotation选中后以中心点旋转</code>
			</label>
		</p>
		<p>
			<label>
				<code>cornerStyle</code>
				<input type="radio" name="cornerStyle" value="rect" v-model="cornerStyle"
					@change="observeRadio('cornerStyle',cornerStyle)">控制块是方形
				<input type="radio" name="cornerStyle" value="circle" v-model="cornerStyle"
					@change="observeRadio('cornerStyle',cornerStyle)">控制块是圆形
			</label>
		</p>
		<p>
			<label>
				<code>padding</code>
				<input type="range" id="padding" min="0" max="50" style="display: block" v-model="padding"
					@change="observeNumeric('padding',padding)">
			</label>
		</p>
		<p>
			<label>
				<code>cornerSize</code>
				<input type="range" id="cornerSize" min="1" max="50" style="display: block" v-model="cornerSize"
					@change="observeNumeric('cornerSize',cornerSize)">
			</label>
		</p>
		<p>
			<label>
				<code>rotatingPointOffset</code>
				<input type="range" id="rotatingPointOffset" v-model="rotatingPointOffset" @input="rotatingPointOffsetC"
					min="5" max="150" style="display: block">
			</label>
		</p>
		<p>
			<code>setControlVisible</code>
		</p>
		<p id="setControlVisible">
			<label v-for=" item in optionsList">
				{{item.name}}<input type="checkbox" title="top-left control" v-model="item.value" @change="observeOptionsList(item.name,item.value)">
			</label>

		</p>
		<p></p>
		<p>
			<label>
				<code>borderColor</code>
				<input type="color" id="borderColor" style="display: block" v-model="borderColor"
					@input="observeValue('borderColor',borderColor)">
			</label>
		</p>
		<p>
			<label>
				<code>cornerColor</code>
				<input type="color" id="cornerColor" style="display: block" v-model="cornerColor"
					@input="observeValue('cornerColor',cornerColor)">
			</label>
		</p>
		<p>
			<label>
				<code>cornerStrokeColor控制块边框颜色</code>
				<input type="color" id="cornerStrokeColor" style="display: block" v-model="cornerStrokeColor"
					@input="observeValue('cornerStrokeColor',cornerStrokeColor)">
			</label>
		</p>
	</div>
</template>

<script>
	export default {
		name: "controls-customization",
		props: ['canvas'],
		data() {
			return {
				hasControls: true,
				hasBorders: true,
				visible: true,
				selectable: true,
				evented: true,
				transparentCorners: false,
				centeredScaling: false,
				centeredRotation: false,


				cornerStyle: 'rect',



				rotatingPointOffset: 40,
				padding: 0,
				cornerSize: 12,

				borderColor: '#000000',
				cornerColor: '#000000',
				cornerStrokeColor: '#000000',

				optionsList: [{
						name: 'tl',
						value: true
					},
					{
						name: 'bl',
						value: true
					},
					{
						name: 'tr',
						value: true
					},
					{
						name: 'br',
						value: true
					},
					{
						name: 'ml',
						value: true
					},
					{
						name: 'mb',
						value: true
					},
					{
						name: 'mr',
						value: true
					},
					{
						name: 'mt',
						value: true
					},
					{
						name: 'mtr',
						value: true
					},
				]

			}
		},
		methods: {
			observeBoolean(property, value) {
				let canvas = this.canvas;
				canvas.item(0)[property] = value;
				canvas.renderAll();
			},

			observeOptionsList(name, value) {
				let canvas = this.canvas;
				console.log(name, value)
				canvas.item(0)['setControlVisible'](name, value);
				canvas.renderAll();
			},
			observeRadio(name, value) {
				let canvas = this.canvas;
				console.log(value)
				canvas.item(0)[name] = value;
				canvas.renderAll();
			},
			rotatingPointOffsetC() {
				let canvas = this.canvas;
				canvas.item(0).controls.mtr.offsetY = -parseFloat(this.rotatingPointOffset);
				canvas.requestRenderAll();
			},
			observeNumeric(property, value) {
				let canvas = this.canvas;
				canvas.item(0)[property] = parseFloat(value);
				if (property === 'padding') {
					canvas.item(0).setCoords();
				}
				canvas.requestRenderAll();
			},
			observeValue(property, value) {
				let canvas = this.canvas;
				canvas.item(0)[property] = value;
				canvas.requestRenderAll();
			}

		},
		mounted() {
			let canvas = this.canvas;

			let rect = new fabric.Rect({
				left: 150,
				top: 200,
				originX: 'left',
				originY: 'top',
				width: 150,
				height: 120,
				angle: -10,
				fill: 'rgba(255,0,0,0.5)',
				transparentCorners: false
			});

			canvas.add(rect).setActiveObject(rect);
		}
	}
</script>

<style scoped>

</style>
