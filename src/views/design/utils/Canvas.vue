<template>
  <div class="d-centext">

   <!-- <div class="slider-demo-block">
      <el-slider v-model="value" vertical height="200px" />

    </div> -->
    <div style="" class="d-canvas">
      <canvas style="" id="canvas"></canvas>
    </div>
  </div>

</template>


<script lang="ts">
  // 声明额外的选项
  export default {

  }
</script>


<script lang="ts" setup>
  import {
    ref,
    defineProps
  } from 'vue'

  import {
    useDesignStoreHook
  } from "/@/store/modules/design";
  
  const useDesignStore = useDesignStoreHook()

  let isCollapse = ref(false)
  let value = ref(50)
</script>


<style lang="scss">
  .d-centext {
    position: relative;
  }

  .d-canvas {

    width: 375px;
    height: 667px;
    margin: 0 auto;
    background-color: #fff;

    canvas {
      width: 100%;
      height: 100%
    }
  }

  .slider-demo-block {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0px;
  }

  .slider-demo-block .el-slider {
    margin-top: 0;
    margin-left: 12px;
  }
</style>
