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

    <el-form-item label="旋转" style="display: block;width: 100%;" >
      <el-slider v-model="props.klassObj.heigh" style="width: 90%;margin: 0 auto;" />
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



<script lang="ts" setup>

import { defineProps } from "vue";

const props = defineProps({
  klassObj: Object
});
</script>

<style>

</style>



<script lang="ts">
// 普通 <script>, 在模块作用域下执行 (仅一次)
// runSideEffectOnce()

// 声明额外的选项
export default {

}
</script>
