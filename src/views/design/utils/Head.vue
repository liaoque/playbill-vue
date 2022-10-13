<template>
  <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false">
    <el-menu-item index="0">

    </el-menu-item>
    <el-menu-item index="new">新建</el-menu-item>
    <el-menu-item index="prev">上一步</el-menu-item>
    <el-menu-item index="next">下一步</el-menu-item>

    <div class="flex-grow"/>
    <el-menu-item index="addText" @click="addText">+文字</el-menu-item>
    <el-menu-item index="addPic" @click="addPic">+图片</el-menu-item>
    <el-sub-menu index="addRect">
      <template #title>+图形</template>
      <el-menu-item index="addRect-1" @click="addRect">+矩形</el-menu-item>
      <el-menu-item index="addRect-2" @click="addCircular">+圆形</el-menu-item>
      <el-menu-item index="addRect-3" @click="addTriangle">+三角形</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="shares">分享</el-menu-item>
    <el-menu-item index="preview">预览</el-menu-item>
    <el-sub-menu index="save">
      <template #title>保存</template>
      <el-menu-item index="save-1" @click="downloadImage">保存到png</el-menu-item>
      <el-menu-item index="save-2" @click="downloadSVG">保存到svg</el-menu-item>
      <el-menu-item index="save-3" @click="toJSON">保存到json</el-menu-item>
    </el-sub-menu>

  </el-menu>

</template>


<script lang="ts">
  // 普通 <script>, 在模块作用域下执行 (仅一次)
  // runSideEffectOnce()

  // 声明额外的选项
  export default {};
</script>


<script lang="ts" setup>
  import {
    ref,
    defineProps
  } from "vue";

  import {
    useDesignStoreHook
  } from "/@/store/modules/design";
  import {addText, addPic, addRect, addCircular, addTriangle} from "./Header/tools";
  import {downloadImage, downloadSVG, toJSON} from "./Header/save";

  const useDesignStore = useDesignStoreHook();

  const activeIndex = ref("new");

</script>

<style lang="scss">
  .flex-grow {
    flex-grow: 1;
  }

  .layout-theme-default body[layout=vertical] .el-menu--horizontal {
    .el-menu-item.is-active, .el-sub-menu.is-active {
      color: #ff0000 !important;
    }

    .el-sub-menu.is-active > .el-sub-menu__title {
      color: #ff0000 !important;
    }

    .el-sub-menu:hover, .el-menu-item:hover {
      color: red !important;
    }

  }

  .el-header {
    --el-header-padding: 0 0;
  }
</style>
