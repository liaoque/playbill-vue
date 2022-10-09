<template>
  <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false">
    <el-menu-item index="0">

    </el-menu-item>
    <el-menu-item index="1">新建</el-menu-item>
    <el-menu-item index="2">上一步</el-menu-item>
    <el-menu-item index="3">下一步</el-menu-item>

    <div class="flex-grow" />
    <el-menu-item index="4">分享</el-menu-item>
    <el-menu-item index="4">分享</el-menu-item>
    <el-menu-item index="5">预览</el-menu-item>
    <el-sub-menu index="6">
      <template #title>保存</template>
      <el-menu-item index="6-1" @click="downloadImage">保存到png</el-menu-item>
      <el-menu-item index="6-2" @click="downloadSVG">保存到svg</el-menu-item>
      <el-menu-item index="6-3" @click="toJSON">保存到json</el-menu-item>
    </el-sub-menu>

    <!-- <el-menu-item index="1">Processing Center</el-menu-item> -->
    <!--  <el-sub-menu index="2">
             <template #title>Workspace</template>
             <el-menu-item index="2-1">item one</el-menu-item>
             <el-menu-item index="2-2">item two</el-menu-item>
             <el-menu-item index="2-3">item three</el-menu-item>
             <el-sub-menu index="2-4">
               <template #title>item four</template>
               <el-menu-item index="2-4-1">item one</el-menu-item>
               <el-menu-item index="2-4-2">item two</el-menu-item>
               <el-menu-item index="2-4-3">item three</el-menu-item>
             </el-sub-menu>
           </el-sub-menu> -->
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

const useDesignStore = useDesignStoreHook();

const activeIndex = ref("1");


function downloadImage() {
  const ext = "png";
  let canvas = useDesignStore.canvas;
  const base64 = canvas.toDataURL({
    format: ext,
    enableRetinaScaling: true,
    multiplier: 2
  });
  const link = document.createElement("a");
  link.href = base64;
  link.download = `eraser_example.${ext}`;
  link.click();
}

function downloadSVG() {
  let canvas = useDesignStore.canvas;
  const svg = canvas.toSVG();
  const a = document.createElement("a");
  const blob = new Blob([svg], {
    type: "image/svg+xml"
  });
  const blobURL = URL.createObjectURL(blob);
  a.href = blobURL;
  a.download = "eraser_example.svg";
  a.click();
  URL.revokeObjectURL(blobURL);
}

function toJSON() {
  let canvas = useDesignStore.canvas;
  const json = canvas.toDatalessJSON(["clipPath", "eraser"]);
  const out = JSON.stringify(json, null, "\t");
  const blob = new Blob([out], {
    type: "text/plain"
  });
  const clipboardItemData = {
    [blob.type]: blob
  };
  try {
    navigator.clipboard &&
    (navigator.clipboard.write([
      new ClipboardItem(clipboardItemData)
    ]));
  } catch (error) {
    console.log(error);
  }
  const blobURL = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = blobURL;
  a.download = "eraser_example.json";
  a.click();
  URL.revokeObjectURL(blobURL);
}
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
