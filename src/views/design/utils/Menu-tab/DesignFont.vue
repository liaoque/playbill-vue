<template>
  <el-row>
    <el-button type="primary" @click="addText">文字</el-button>
    <el-button type="success" @click="addPic">图片</el-button>
    <el-button type="warning" @click="addQrcode">二维码</el-button>
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
import { fabric } from "/@/utils/fabric";

let picList = ref([]);


onMounted(() => {

});

const useDesignStore = useDesignStoreHook();

function addText() {
  let fabricText = new fabric.IText("双击修改文字", { fontSize: 16, top: 20, left: 20 });
  useDesignStore.canvas.add(fabricText);
}

function addPic() {
  new fabric.Image.fromURL("./public/pug.jpg", function(image) {
    image.set({
      scaleX: 0.5,
      scaleY: 0.5,
      objectCaching: false
    });
    useDesignStore.canvas.add(image);
  });
}

function addQrcode() {
  new fabric.Image.fromURL("./public/ewm.png", function(image) {
    image.set({
      scaleX: 0.5,
      scaleY: 0.5,
      objectCaching: false,
      stroke: "lightgreen",
      strokeWidth: 1
    });
    useDesignStore.canvas.add(image);
  });
}

function addRect() {
  let rect = new fabric.Rect({
    left: 100,
    top: 50,
    fill: "yellow",
    width: 200,
    height: 100,
    objectCaching: false,
    stroke: "lightgreen",
    strokeWidth: 1
  });

  useDesignStore.canvas.add(rect);
}

</script>

<style>
.image {
  width: 100%;
  display: block;
}
</style>
