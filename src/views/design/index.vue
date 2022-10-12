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
          <KeepAlive>
            <component :is="panelComponent" :klassObj="klassObj"></component>
          </KeepAlive>
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
  } from 'vue'
  import {
    fabric
  } from "/@/utils/fabric"
  import Head from "./utils/Head.vue"
  import Menu from "./utils/Menu.vue"
  import Canvas from "./utils/Canvas.vue"

  import {
    useDesignStoreHook
  } from "/@/store/modules/design";

  import {
    CanvasSetting,
    EffectFontSettingVue,
    TemplateSettingVue,
    ElemSettingVue,
    ThreeFontSettingVue,
    PicSettingVue,
    BackgroundSettingVue
  } from './utils/RightPanel/panel';

  let panles = [
    TemplateSettingVue, ElemSettingVue,
    EffectFontSettingVue, ThreeFontSettingVue,
    PicSettingVue, BackgroundSettingVue, CanvasSetting
  ];
  const useDesignStore = useDesignStoreHook()
  let panelComponent = shallowRef(CanvasSetting)
  let klassObj = ref({})
  onMounted(() => {

    let selection = (e) => {
      if (e.selected.length) {
        let selected = e.selected[0];
        let basePrototype = {
          left: selected.left,
          top: selected.top,
          opacity: selected.opacity,
          angle: selected.angle,
          visible: selected.visible,
          selectable: selected.selectable,
          uuid: selected.uuid,
          klass: markRaw(selected),
        }
        switch (selected.component_type) {
          case 'text':
            klassObj.value = {
              fill: selected.fill,
              fontName: selected.fill,
              fontSize: selected.fontSize,
              fontWeight: selected.fontWeight || 'normal',
              text: selected.text,
              ...basePrototype
            };
            panelComponent.value = EffectFontSettingVue
            break;
          case 'pic':
            klassObj.value = {
              ...basePrototype
            };
            panelComponent.value = PicSettingVue

            break;
          case 'qrcode':
            panelComponent.value = CanvasSetting
            klassObj.value = {
              ...basePrototype
            };
            break;
          case 'rect':
            panelComponent.value = CanvasSetting
            klassObj.value = {
              ...basePrototype
            };
            break;
          default:
            panelComponent.value = CanvasSetting
            break;
        }
        useDesignStore.setActiveSelection();
      }
    }
    useDesignStore.canvas = markRaw(new fabric.Canvas('canvas'))
    useDesignStore.canvas.on('selection:created', selection)
    useDesignStore.canvas.on('selection:updated', selection)
    useDesignStore.canvas.on('selection:cleared', () => {
      panelComponent.value = CanvasSetting
    })
  })


  // console.log(e)


  defineOptions({
    name: "Welcome"
  });
</script>
