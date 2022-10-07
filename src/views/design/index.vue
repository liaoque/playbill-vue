<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Head></Head>
      </el-header>
      <el-container>
        <el-aside width="360px">
          <Menu @changePanle="changePanle"></Menu>
        </el-aside>
        <el-main>
          <Canvas></Canvas>
        </el-main>
        <el-aside width="300px">
          <component :is="panel"></component>
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
  import CasnvasSetting from "./utils/CanvasSetting.vue"
  import BackgroundSettingVue from './utils/BackgroundSetting.vue'
  import Canvas from "./utils/Canvas.vue"
  import TemplateSettingVue from './utils/TemplateSetting.vue'
  import ElemSettingVue from './utils/ElemSetting.vue'
  import EffectFontSettingVue from './utils/EffectFontSetting.vue'
  import ThreeFontSettingVue from './utils/ThreeFontSetting.vue'
  import PicSettingVue from './utils/PicSetting.vue'

  import {
    useDesignStoreHook
  } from "/@/store/modules/design";

  let panles = [
    TemplateSettingVue, ElemSettingVue,
    EffectFontSettingVue, ThreeFontSettingVue,
    PicSettingVue, BackgroundSettingVue, CasnvasSetting
  ];
  const useDesignStore = useDesignStoreHook()
  const panel = shallowRef(CasnvasSetting)
  onMounted(() => {
    // canvas.value = markRaw(new fabric.Canvas('canvas'));
    useDesignStore.canvas = markRaw(new fabric.Canvas('canvas'))
    // useDesignStore.setCanvas(markRaw(new fabric.Canvas('canvas')))
    // setTimeout(()=>{proxy.$refs.canvas_setting.setWh()}, 3000)
  })


  function changePanle(params) {
    panel.value = (panles[params.pane.index])
    // console.log(panel)
  }

  // console.log(e)


  defineOptions({
    name: "Welcome"
  });
</script>
