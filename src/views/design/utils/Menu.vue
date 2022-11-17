<template>
  <el-tabs tab-position="left" v-model="panelIndex" class="demo-tabs" @tab-change="changePanle">
    <el-tab-pane label="模版">
      <Templates></Templates>
    </el-tab-pane>

<!--    <el-tab-pane label="特效文字">-->
<!--      <DesignFont></DesignFont>-->
<!--    </el-tab-pane>-->
<!--    <el-tab-pane label="3D文字">-->

<!--    </el-tab-pane>-->
<!--    <el-tab-pane label="照片">-->
<!--      <PicList></PicList>-->
<!--      &lt;!&ndash;      <el-image style="width: 100px; height: 100px" :src="src" fit="fill" @click="changeElement"/>&ndash;&gt;-->
<!--      &lt;!&ndash;      <el-image style="width: 100px; height: 100px" :src="src" fit="fill" @click="$emit('addElement', $event)" /> &ndash;&gt;-->
<!--    </el-tab-pane>-->

    <el-tab-pane label="步骤">
      <CanvasStep></CanvasStep>
    </el-tab-pane>
    <el-tab-pane label="画布">
      <CanvasLayer ></CanvasLayer>
    </el-tab-pane>
  </el-tabs>


</template>


<script lang="ts" setup>


  import {ref} from 'vue'
  import {useDesignStoreHook} from "/@/store/modules/design";
  import CanvasStep from "./Menu-tab/CanvasStep.vue"
  // import DesignFont from "./Menu-tab/DesignFont.vue"
  import CanvasLayer from "./Menu-tab/CanvasLayer.vue"
  // import PicList from "./Menu-tab/PicList.vue"
  import Templates from "./Menu-tab/Templates.vue"


  const useDesignStore = useDesignStoreHook()


  let panelIndex = ref('2');
  // let componentSize = ref(0);

  function changePanle() {
    if (panelIndex.value == '6') {
      // componentSize.value = useDesignStore.canvas.size()
      // console.log(componentSize)
    }
  }


</script>

