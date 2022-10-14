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
    shallowRef, nextTick,
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
    RectSettingVue,
    // BackgroundSettingVue
  } from './utils/RightPanel/panel';
  //
  // let panles = [
  //   TemplateSettingVue, ElemSettingVue,
  //   EffectFontSettingVue, ThreeFontSettingVue,
  //   PicSettingVue, BackgroundSettingVue, CanvasSetting
  // ];
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
          stroke: selected.stroke,
          strokeWidth: selected.strokeWidth,
          uuid: selected.uuid,
          width: selected.getScaledWidth(),
          height: selected.getScaledHeight(),
          klass: markRaw(selected),
        }
        console.log(selected.component_type)
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
          case 'rect':
          case 'circle':
          case 'triangle':
            panelComponent.value = RectSettingVue
            klassObj.value = {
              fill: selected.fill,
              ...basePrototype
            };
            break;
          default:
            klassObj.value = {
              backgroundColor: selected.backgroundColor,
              backgroundImage: selected.backgroundImage,
            };
            panelComponent.value = CanvasSetting
            break;
        }
        useDesignStore.setActiveSelection();
      }
    }

    let selectionBackground = () => {
      let selected = useDesignStore.canvas
      panelComponent.value = CanvasSetting
      klassObj.value = {
        backgroundColor: selected.backgroundColor,
        backgroundImage: selected.backgroundImage,
      };
    }

    useDesignStore.canvas = markRaw(new fabric.Canvas('canvas'))
    useDesignStore.canvas.on('selection:created', selection)
    useDesignStore.canvas.on('selection:updated', selection)
    useDesignStore.canvas.on('selection:cleared', selectionBackground)
    //设置宽高
    nextTick(() => {
      useDesignStore.setWh();
      selectionBackground();
    })

  })


  // console.log(e)


  defineOptions({
    name: "design"
  });
</script>
