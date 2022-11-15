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

        <el-aside  style="height: 100%;width:300px;background-color: #ffffff;">
          <el-tabs v-model="panelTabs.name" class="demo-tabs" :stretch="true"  @tab-click="handleClick">
            <el-tab-pane label="属性设置" name="first" :disabled="panelTabs.disabled" ></el-tab-pane>
            <el-tab-pane label="画布设置" name="background" ></el-tab-pane>
          </el-tabs>
          <KeepAlive >
            <component :is="panelComponent" :klassObj="klassObj" style="margin-left: 10px;"></component>
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
  } from "/@/utils/fabric/fabric"
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
  import {saveAction} from "./utils/Tools/stack"
  import {loadAndUse} from "/@/views/design/utils/Tools/tools";

  const useDesignStore = useDesignStoreHook()
  let panelComponent = shallowRef(CanvasSetting)
  let panelTabs = ref({
    name: "background",
    disabled: true
  })
  let klassObj = ref({})

  let oldPanelComponent:any
  let handleClick = ()=>{
    console.log(panelTabs.value.disabled)
    if(panelTabs.value.disabled){
      return
    }
    let old = panelComponent.value
    if(oldPanelComponent){
      panelComponent.value = oldPanelComponent
    }else{
      panelComponent.value = CanvasSetting
    }
    oldPanelComponent = old
  }

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
        console.log(selected)

        switch (selected.component_type) {
          case 'text':
            klassObj.value = {
              fill: selected.fill,
              fontFamily: selected.fontFamily,
              fontSize: selected.fontSize,
              fontWeight: parseInt(selected.fontWeight) || 700,
              text: selected.text,
              ...basePrototype
            };
            panelTabs.value.name = "first";
            panelTabs.value.disabled = false;
            panelComponent.value = EffectFontSettingVue
            break;
          case 'pic':
            klassObj.value = {
              ...basePrototype
            };
            panelTabs.value.name = "first";
            panelTabs.value.disabled = false;
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
            panelTabs.value.name = "first";
            panelTabs.value.disabled = false;
            break;
          default:
            klassObj.value = {
              backgroundColor: selected.backgroundColor,
              backgroundImage: selected.backgroundImage,
            };
            panelTabs.value.name = "background";
            panelTabs.value.disabled = true;
            panelComponent.value = CanvasSetting
            break;
        }
        useDesignStore.setActiveSelection();
      }
    }

    let selectionBackground = () => {
      let selected = useDesignStore.canvas
      panelComponent.value = CanvasSetting
      panelTabs.value.name = "background";
      panelTabs.value.disabled = true;
      klassObj.value = {
        backgroundColor: selected.backgroundColor,
        backgroundImage: selected.backgroundImage,
      };
    }

    if(!useDesignStore.amounted()){
      useDesignStore.setCanvas(markRaw(new fabric.Canvas('canvas')))
      //设置宽高
      nextTick(() => {
        useDesignStore.setWh();
        selectionBackground();
      })
    }

    useDesignStore.canvas.on('selection:created', selection)
    useDesignStore.canvas.on('selection:updated', selection)
    useDesignStore.canvas.on('selection:cleared', selectionBackground)
    useDesignStore.canvas.on('object:modified', (e) => {
      selection({selected: [e.target]})
      saveAction(e)
    })

    loadAndUse("QianTuBiFengShouXieTi")


  })


  defineOptions({
    name: "design"
  });
</script>
