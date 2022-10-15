<template>
  <el-tabs tab-position="left" v-model="panelIndex" class="demo-tabs" @tab-change="changePanle">
    <el-tab-pane label="模版">

    </el-tab-pane>
    <el-tab-pane label="素材">

    </el-tab-pane>
    <el-tab-pane label="特效文字">
      <DesignFont></DesignFont>
    </el-tab-pane>
    <el-tab-pane label="3D文字">

    </el-tab-pane>
    <el-tab-pane label="照片">
      <PicList></PicList>
      <!--      <el-image style="width: 100px; height: 100px" :src="src" fit="fill" @click="changeElement"/>-->
      <!--      <el-image style="width: 100px; height: 100px" :src="src" fit="fill" @click="$emit('addElement', $event)" /> -->
    </el-tab-pane>

    <el-tab-pane label="步骤">
      <CanvasStep></CanvasStep>
    </el-tab-pane>
    <el-tab-pane label="画布">
      <CanvasLayer :componentSize="componentSize"></CanvasLayer>
    </el-tab-pane>
  </el-tabs>


</template>


<script lang="ts" setup>


  import {ref, defineEmits, defineProps} from 'vue'
  import {useDesignStoreHook} from "/@/store/modules/design";
  import CanvasStep from "./Menu-tab/CanvasStep.vue"
  import DesignFont from "./Menu-tab/DesignFont.vue"
  import CanvasLayer from "./Menu-tab/CanvasLayer.vue"
  import PicList from "./Menu-tab/PicList.vue"


  const useDesignStore = useDesignStoreHook()


  let panelIndex = ref('6');
  let componentSize = ref(0);

  function changePanle() {
    if (panelIndex.value == '6') {
      componentSize.value = useDesignStore.canvas.size()
      console.log(componentSize)
    }
  }


</script>

