<template>
  <el-form :inline="true" class="demo-form-inline" label-position="top">

    <el-form-item label="尺寸：宽，高">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-input
            v-model="props.klassObj.width"
            type="text"
          />
        </el-col>
        <el-col :span="12">
          <el-input
            v-model="props.klassObj.height"
            type="text"
          />
        </el-col>
      </el-row>
    </el-form-item>
    <el-form-item label="位置：x，y">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-input
            v-model="props.klassObj.left"
            type="text"
          />
        </el-col>
        <el-col :span="12">
          <el-input
            v-model="props.klassObj.top"
            type="text"
          />
        </el-col>
      </el-row>
    </el-form-item>

    <el-form-item label="旋转" style="display: block;width: 100%;">
      <el-slider v-model="props.klassObj.angle" @change="renderKlass" style="width: 90%;margin: 0 auto;"/>
    </el-form-item>


    <el-form-item label="唯一标识">
      <el-input
        v-model="text"
        type="text"
      />
    </el-form-item>

    <Actions :klassObj="props.klassObj"></Actions>

  </el-form>


</template>


<script lang="ts">
  // 声明额外的选项
  export default {};
</script>

<script lang="ts" setup>

  import {defineProps, ref} from "vue";
  import Actions from "./Actions.vue";
  import {useDesignStoreHook} from "/@/store/modules/design";

  const props = defineProps({
    klassObj: Object
  });

  let text = ref("");

  const useDesignStore = useDesignStoreHook()

  function renderKlass() {

    props.klassObj.klass.set('opacity', parseFloat(props.klassObj.opacity))
    props.klassObj.klass.set('left', parseFloat(props.klassObj.left))
    props.klassObj.klass.set('right', parseFloat(props.klassObj.right))
    props.klassObj.klass.set('angle', parseFloat(props.klassObj.angle))

    useDesignStore.canvas.requestRenderAll();
  }
</script>


