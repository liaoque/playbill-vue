<template>
  <el-row>
    <el-button type="primary" @click="addText">文字</el-button>
    <el-button type="success" @click="addPic">图片</el-button>
    <el-button type="warning" @click="addRect">图形</el-button>
  </el-row>

</template>

<script lang="ts" setup>
  import {
    ref,
    defineProps,
    defineEmits,
    onMounted
  } from "vue";
  import {
    useDesignStoreHook
  } from "/@/store/modules/design";
  import {addText, addPic, addRect} from "../../utils/Header/tools";

  onMounted(() => {

  });

  const useDesignStore = useDesignStoreHook();


</script>

<style>
  .image {
    width: 100%;
    display: block;
  }
</style>
