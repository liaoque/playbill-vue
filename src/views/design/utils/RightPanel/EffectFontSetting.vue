<template>
  <el-form :inline="true" class="demo-form-inline" label-position="top">

    <el-form-item label="背景颜色">
      <el-color-picker @change="setColor" />
    </el-form-item>

    <el-form-item label="字体">
      <el-select v-model="fontName" @change="loadAndUse" class="m-2" placeholder="Select" size="large">
        <el-option
          v-for="(item, index) in options"
          :key="index"
          :label="item"
          :value="item"
        />
      </el-select>
    </el-form-item>
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

    <el-form-item label="内容">
      <el-input
        v-model="props.klassObj.text"
        type="textarea"
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
import Actions from "./Actions.vue";
import {
  onMounted,
  onUnmounted,
  ref,
  defineProps
} from "vue";
import FontFaceObserver from "fontfaceobserver";


const props = defineProps({
  klassObj: Object
});

const options = ["observer-test1", "unknown", "observer-test3", "observer-test4", "observer-test5",
  "observer-test6", "observer-test7", "observer-test8", "Trebuchet W01 Regular", "Neue Frutiger 1450 W04"];

let fontName = ref("");
let text = ref("");
let textarea = ref("");

onMounted(() => {
});

function setColor() {
  // props.klassObj
}

function loadAndUse(font) {
  console.log(font);
  let myfont = new FontFaceObserver(font);
  myfont.load().then(function() {
    // when font is loaded, use it.
    canvas.getActiveObject().set("fontFamily", font);
    canvas.requestRenderAll();
  }).catch(function(e) {
    console.log(e);
    alert("font loading failed " + font);
  });
}


</script>

<style scoped>


@font-face {
  font-family: observer-test1;
  src: url("./assets/fonts/sourcesanspro-regular.woff") format('woff'),
  url("./assets/fonts/sourcesanspro-regular.ttf") format('truetype');
}

@font-face {
  font-family: unknown;
  src: url(unknown.woff) format('woff'),
  url(unknown.ttf) format('truetype');
}

@font-face {
  font-family: observer-test3;
  src: url("~@/assets/fonts/sourcesanspro-regular.woff") format('woff'),
  url("~@/assets/fonts/sourcesanspro-regular.ttf") format('truetype');
}

@font-face {
  font-family: observer-test4;
  src: url("~@/assets/fonts/subset.woff") format('woff'),
  url("~@/assets/fonts/subset.ttf") format('truetype');
  unicode-range: u+0021;
}

@font-face {
  font-family: observer-test5;
  src: url("~@/assets/fonts/subset.woff") format('woff'),
  url("~@/assets/fonts/subset.ttf") format('truetype');
  unicode-range: u+4 e2d, u+56 fd;
}

@font-face {
  font-family: observer-test6;
  src: url("~@/assets/fonts/subset.woff") format('woff'),
  url("~@/assets/fonts/subset.ttf") format('truetype');
  unicode-range: u+10 ffff;
}

@font-face {
  font-family: observer-test7;
  src: url("~@/assets/fonts/subset.woff") format('woff'),
  url("~@/assets/fonts/subset.ttf") format('truetype');
  unicode-range: u+23;
}

@font-face {
  font-family: observer-test8;
  src: url(@/assets/fonts/sourcesanspro-regular.woff) format('woff'),
  url(@/assets/fonts/sourcesanspro-regular.ttf) format('truetype');
}

@font-face {
  font-family: Trebuchet W01 Regular;
  src: url(@/assets/fonts/sourcesanspro-regular.woff) format('woff'),
  url(@/assets/fonts/sourcesanspro-regular.ttf) format('truetype');
}

@font-face {
  font-family: 'Neue Frutiger 1450 W04';
  src: url(@/assets/fonts/sourcesanspro-regular.woff) format('woff'),
  url(@/assets/fonts/sourcesanspro-regular.ttf) format('truetype');
}

.slider-demo-block {
  display: flex;
  align-items: center;
}

.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}

.slider-demo-block .demonstration {
  font-size: 14px;
  color: var(--el-text-color-secondary);
  line-height: 44px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 0;
}

.slider-demo-block .demonstration + .el-slider {
  flex: 0 0 70%;
}
</style>
