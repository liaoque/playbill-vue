<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Head></Head>
      </el-header>
      <el-container>
        <el-aside width="360px">
          <Menu></Menu>
        </el-aside>
        <el-main>
          <Canvas></Canvas>
        </el-main>
        <el-aside width="300px">
          <component :is="panelComponent" :klassObj="klassObj"></component>
          <!--          <component :is="item" :canvas="canvas" v-for="item in panles"></component> -->
          <!-- <CasnvasSetting ref="canvas_setting" :canvas="canvas"></CasnvasSetting> -->
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>


<script setup lang="ts">
  import {
    onMounted,
    ref,
    markRaw,
    shallowRef,
    // getCurrentInstance,
    // nextTick
  } from 'vue'
  import {
    fabric
  } from "/@/utils/fabric"
  import Head from "./utils/Head.vue"
  import Menu from "./utils/Menu.vue"
  import CanvasSetting from "./utils/RightPanel/CanvasSetting.vue"
  import BackgroundSettingVue from './utils/RightPanel/BackgroundSetting.vue'
  import Canvas from "./utils/Canvas.vue"
  import TemplateSettingVue from './utils/RightPanel/TemplateSetting.vue'
  import ElemSettingVue from './utils/RightPanel/ElemSetting.vue'
  import EffectFontSettingVue from './utils/RightPanel/EffectFontSetting.vue'
  import ThreeFontSettingVue from './utils/RightPanel/ThreeFontSetting.vue'
  import PicSettingVue from './utils/RightPanel/PicSetting.vue'

  import {
    useDesignStoreHook
  } from "/@/store/modules/design";

  let panles = [
    TemplateSettingVue, ElemSettingVue,
    EffectFontSettingVue, ThreeFontSettingVue,
    PicSettingVue, BackgroundSettingVue, CanvasSetting
  ];
  const useDesignStore = useDesignStoreHook()
  let panelComponent = shallowRef(CanvasSetting)
  let klassObj = ref({})
  onMounted(() => {

    useDesignStore.canvas = markRaw(new fabric.Canvas('canvas'))
    useDesignStore.canvas.on('selection:created', (e) => {
      if (e.selected.length) {
        let selected = e.selected[0];
        console.log(selected)
        switch (selected.component_type) {
          case 'text':
            panelComponent.value = EffectFontSettingVue
            klassObj.value = selected
            break;
          case 'pic':
            panelComponent.value = PicSettingVue
            klassObj.value = selected
            break;
          case 'qrcode':
            panelComponent.value = CanvasSetting
            klassObj.value = selected
            break;
          case 'rect':
            panelComponent.value = CanvasSetting
            klassObj.value = selected
            break;
          default:
            panelComponent.value = CanvasSetting
            break;
        }
      }
    })

    // useDesignStore.setCanvas(markRaw(new fabric.Canvas('canvas')))
    // setTimeout(()=>{proxy.$refs.canvas_setting.setWh()}, 3000)
  })


  // console.log(e)


  defineOptions({
    name: "Welcome"
  });
</script>
