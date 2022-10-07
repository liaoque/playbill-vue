<template>
  <div class="" style="background-color: #FFFFFF;padding: 5px;">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="画布宽">
        <el-input placeholder="宽" v-model="useDesignStore.getCanvasMap.width" @change="useDesignStore.setWh" ></el-input>
      </el-form-item>
      <el-form-item label="画布高">
        <el-input placeholder="高" v-model="useDesignStore.getCanvasMap.height"  @change="useDesignStore.setWh" ></el-input>
      </el-form-item>

      <el-form-item label="图层">

      </el-form-item>

    </el-form>
  </div>

</template>


<script lang="ts">
  // 普通 <script>, 在模块作用域下执行 (仅一次)
  // runSideEffectOnce()

  // 声明额外的选项
  export default {

  }
</script>


<script lang="ts" setup>
  import {
    ref,
    defineProps,
    onMounted,
    defineExpose,
    nextTick
  } from 'vue'

  import {
    useDesignStoreHook
  } from "/@/store/modules/design";
  const useDesignStore = useDesignStoreHook()


  onMounted(() => {
    //设置宽高
    nextTick(()=>{
      useDesignStore.setWh()
    })
  })

  defineExpose({
  })
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
