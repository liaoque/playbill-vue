<template>
	<div class="common-layout">
		<el-container>
			<el-header>
				<button v-for="item in [
                    'panel0','erasing','custom-filter-swap-color','duotone-filter','text-on-paths',
                    'build-minimap','custom-controls-polygon','stroke-uniform','super-sub-script','events'
                    ,'lanczos-webgl','loadfonts','copypaste', 'manage-selection', 'touch-events'
                    ,'video-element', 'matrix-transformation','svg-caching', 'animated-sprite'
                    ,'controls-customization' ,'freedrawing','intersection', 'clipping','dynamic-patterns'
					,'shadows', 'solar-system', 'polygon-animation', 'patterns', 'bounding-rectangle'
					, 'particles', 'per-pixel-drag-drop', 'many-objects', 'animation-easing'
					,'interaction-with-objects-outside-canvas', 'quadratic-curve', 'static_canvas'
					,'image-filters', 'controls'
                    ]" @click="setPanelName(item)">{{ item }}</button>

				<div>
					<button type="button" @click="toJSON()">toJSON</button>
					<button type="button" @click="downloadImage()">to Image</button>
					<button type="button" @click="downloadSVG()">toSVG</button>
				</div>
			</el-header>
			<el-container>
				<el-aside width="100px">
					left
				</el-aside>
				<el-main style="display: flex">

					<div :class="sky">
						<canvas id="canvas" width="500" height="700"></canvas>
					</div>

					<!-- 添加 -->
					<panel0 :canvas="canvas" v-if="panel_name == 'panel0'" />

					<!-- 橡皮擦 -->
					<erasing :canvas="canvas" v-if="panel_name == 'erasing'" />

					<!-- 替换颜色 -->
					<custom-filter-swap-color :canvas="canvas" v-if="panel_name == 'custom-filter-swap-color'" />

					<!-- 蒙版 -->
					<duotone-filter :canvas="canvas" v-if="panel_name == 'duotone-filter'" />

					<!-- 添加文字 -->
					<text-on-paths :canvas="canvas" v-if="panel_name == 'text-on-paths'" />

					<!-- 添加文字 -->
					<build-minimap :canvas="canvas" v-if="panel_name == 'build-minimap'" />

					<!--                    自定义形状-->
					<custom-controls-polygon :canvas="canvas" v-if="panel_name == 'custom-controls-polygon'" />

					<!--                    控制 stroke 宽度，锁定或者自定义-->
					<stroke-uniform :canvas="canvas" v-if="panel_name == 'stroke-uniform'" />

					<!--      选中文字后，点击按钮，对应文字会上移或者下移              -->
					<super-sub-script :canvas="canvas" v-if="panel_name == 'super-sub-script'" />

					<!-- 打印事件 -->
					<events :canvas="canvas" v-if="panel_name == 'events'" />

					<!--                    缩略图-->
					<lanczos-webgl :canvas="canvas" v-if="panel_name == 'lanczos-webgl'" />

					<!--                    字体-->
					<loadfonts :canvas="canvas" v-if="panel_name == 'loadfonts'" />

					<!--                    复制，黏贴-->
					<copypaste :canvas="canvas" v-if="panel_name == 'copypaste'" />

					<!--           选择管理         -->
					<manage-selection :canvas="canvas" v-if="panel_name == 'manage-selection'" />

					<!--           触摸事件 ：目前vue        -->
					<touch-events :canvas="canvas" v-if="panel_name == 'touch-events'" />

					<!--           读取视频到canvas        -->
					<video-element :canvas="canvas" v-if="panel_name == 'video-element'" />

					<!--                    矩形缩放，转换偏移-->
					<matrix-transformation :canvas="canvas" v-if="panel_name == 'matrix-transformation'" />

					<!--                    缓存svg-->
					<svg-caching :canvas="canvas" v-if="panel_name == 'svg-caching'" />

					<!--                    精灵动画-->
					<animated-sprite :canvas="canvas" v-if="panel_name == 'animated-sprite'" />

					<!--                    控制区的边框，显示，禁用-->
					<controls-customization :canvas="canvas" v-if="panel_name == 'controls-customization'" />

					<!-- 自定义画笔 -->
					<freedrawing :canvas="canvas" v-if="panel_name == 'freedrawing'"></freedrawing>

					<!-- 碰撞检测 -->
					<intersection :canvas="canvas" v-if="panel_name == 'intersection'"></intersection>

					<!-- 裁剪 -->
					<clipping :canvas="canvas" v-if="panel_name == 'clipping'"></clipping>


					<!-- 动态模式	 -->
					<dynamic-patterns :canvas="canvas" v-if="panel_name == 'dynamic-patterns'"></dynamic-patterns>


					<!-- 阴影效果	 -->
					<shadows :canvas="canvas" v-if="panel_name == 'shadows'"></shadows>

					<!-- 太阳系 -->
					<solar-system :canvas="canvas" v-if="panel_name == 'solar-system'"></solar-system>

					<!-- 多边形动画 -->
					<polygon-animation :canvas="canvas" v-if="panel_name == 'polygon-animation'"></polygon-animation>

					<!-- 模式 -->
					<patterns :canvas="canvas" v-if="panel_name == 'patterns'"></patterns>

					<!-- 对象的边界 -->
					<bounding-rectangle :canvas="canvas" v-if="panel_name == 'bounding-rectangle'"></bounding-rectangle>

					<!-- 粒子效果 -->
					<particles :canvas="canvas" v-if="panel_name == 'particles'"></particles>

					<!--  按像素拖拽 -->
					<per-pixel-drag-drop :canvas="canvas" v-if="panel_name == 'per-pixel-drag-drop'">
					</per-pixel-drag-drop>

					<!-- 许多对象，创建效率 -->
					<many-objects :canvas="canvas" v-if="panel_name == 'many-objects'"></many-objects>

					<!-- 缓动效果 -->
					<animation-easing :canvas="canvas" v-if="panel_name == 'animation-easing'"></animation-easing>

					<!-- 对象联动 -->
					<interaction-with-objects-outside-canvas :canvas="canvas"
						v-if="panel_name == 'interaction-with-objects-outside-canvas'">
					</interaction-with-objects-outside-canvas>

					<!-- 二次曲线 -->
					<quadratic-curve :canvas="canvas" v-if="panel_name == 'quadratic-curve'"></quadratic-curve>

					
					<static_canvas :canvas="canvas" v-if="panel_name == 'static_canvas'"></static_canvas>
					<image-filters :canvas="canvas" v-if="panel_name == 'image-filters'"></image-filters>

					
					<controls :canvas="canvas" v-if="panel_name == 'controls'"></controls>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<style>
	.el-header {
		--el-header-height: 100%
	}

	.solar-system {
		background: url(@/assets/sky.png);
	}

	.many-objects {
		display: none;
	}
</style>


<script>
	import {
		markRaw
	} from 'vue'

	import panel0 from "./components/panel0.vue";
	import erasing from "./components/erasing.vue";
	import customFilterSwapColor from "./components/custom-filter-swap-color.vue";
	import duotoneFilter from "./components/duotone-filter.vue";
	import textOnPaths from "./components/text-on-paths.vue";
	import buildMinimap from "./components/build-minimap.vue";
	import customControlsPolygon from "./components/custom-controls-polygon.vue";
	import strokeUniform from "./components/stroke-uniform.vue";
	import superSubScript from "./components/super-sub-script.vue";
	import events from "./components/events.vue";
	import lanczosWebgl from "./components/lanczos-webgl.vue";
	import loadfonts from "./components/loadfonts.vue";
	import copypaste from "./components/copypaste.vue";
	import manageSelection from "./components/manage-selection.vue";
	import touchEvents from "./components/touch-events.vue";
	import videoElement from "./components/video-element.vue";
	import matrixTransformation from "./components/matrix-transformation.vue";
	import svgCaching from "./components/svg-caching.vue";
	import animatedSprite from "./components/animated-sprite.vue";
	import controlsCustomization from "./components/controls-customization.vue";
	import freedrawing from "./components/freedrawing.vue";
	import intersection from "./components/intersection.vue";
	import clipping from "./components/clipping.vue";
	import dynamicPatterns from "./components/dynamic-patterns.vue";
	import shadows from "./components/shadows.vue";
	import solarSystem from "./components/solar-system.vue";
	import polygonAnimation from "./components/polygon-animation.vue";
	import patterns from "./components/patterns.vue";
	import boundingRectangle from "./components/bounding-rectangle.vue";
	import particles from "./components/particles.vue";
	import perPixelDragDrop from "./components/per-pixel-drag-drop.vue";
	import manyObjects from "./components/many-objects.vue";
	import animationEasing from "./components/animation-easing.vue";
	import interactionWithObjectsOutsideCanvas from "./components/interaction-with-objects-outside-canvas.vue";
	import quadraticCurve from "./components/quadratic-curve.vue";
	import static_canvas from "./components/static_canvas.vue";
	import imageFilters from "./components/image-filters.vue";
	import controls from "./components/controls.vue";


	export default {
		components: {
			panel0,
			customFilterSwapColor,
			erasing,
			duotoneFilter,
			textOnPaths,
			buildMinimap,
			customControlsPolygon,
			strokeUniform,
			superSubScript,
			events,
			lanczosWebgl,
			loadfonts,
			copypaste,
			manageSelection,
			touchEvents,
			videoElement,
			matrixTransformation,
			svgCaching,
			animatedSprite,
			controlsCustomization,
			freedrawing,
			intersection,
			clipping,
			dynamicPatterns,
			shadows,
			solarSystem,
			polygonAnimation,
			patterns,
			boundingRectangle,
			particles,
			perPixelDragDrop,
			manyObjects,
			animationEasing,
			interactionWithObjectsOutsideCanvas,
			quadraticCurve,
			static_canvas,
			imageFilters,
			controls,
		},
		data: () => {
			return {
				panel_name: '',
				canvas: null,
				sky: ''
			}
		},
		methods: {
			setPanelName(name) {
				let canvas = this.canvas;
				canvas.clear();
				this.panel_name = name
				this.sky = name
			},
			downloadImage() {
				const ext = "png";
				let canvas = this.canvas;
				const base64 = canvas.toDataURL({
					format: ext,
					enableRetinaScaling: true
				});
				const link = document.createElement("a");
				link.href = base64;
				link.download = `eraser_example.${ext}`;
				link.click();
			},

			downloadSVG() {
				let canvas = this.canvas;
				const svg = canvas.toSVG();
				const a = document.createElement("a");
				const blob = new Blob([svg], {
					type: "image/svg+xml"
				});
				const blobURL = URL.createObjectURL(blob);
				a.href = blobURL;
				a.download = "eraser_example.svg";
				a.click();
				URL.revokeObjectURL(blobURL);
			},

			toJSON() {
				let canvas = this.canvas;
				const json = canvas.toDatalessJSON(["clipPath", "eraser"]);
				const out = JSON.stringify(json, null, "\t");
				const blob = new Blob([out], {
					type: "text/plain"
				});
				const clipboardItemData = {
					[blob.type]: blob
				};
				try {
					navigator.clipboard &&
						(navigator.clipboard.write([
							new ClipboardItem(clipboardItemData)
						]));
				} catch (error) {
					console.log(error);
				}
				const blobURL = URL.createObjectURL(blob);
				const a = document.createElement("a");
				a.href = blobURL;
				a.download = "eraser_example.json";
				a.click();
				URL.revokeObjectURL(blobURL);
			}
		},
		mounted() {
			let canvas = this.canvas = markRaw(new fabric.Canvas('canvas'));
			// console.log(canvas)





		}

	}
</script>
