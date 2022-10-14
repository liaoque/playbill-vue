<template>
  <el-form :inline="true" class="demo-form-inline" label-position="top">

    <el-form-item label="唯一标识">
      <el-input
        v-model="props.klassObj.uuid"
        type="text"
      />
    </el-form-item>

    <el-form-item label="内容">
      <el-input
        v-model="props.klassObj.text"
        type="textarea"
        @change="renderKlass"
      />
    </el-form-item>

    <el-form-item label="字体">
      <el-select @change="loadAndUse" class="m-2" placeholder="Select" size="large">
        <el-option
          v-for="(item, index) in options"
          :key="index"
          :label="item"
          :value="item"
        />
      </el-select>
    </el-form-item>

    <el-form-item label="字体：颜色,粗细">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-color-picker @change="renderKlass" v-model="props.klassObj.fill"/>
        </el-col>
        <el-col :span="12">
          <el-input
            v-model="props.klassObj.fontWeight"
            type="text"
            @change="renderKlass"
          />
        </el-col>
      </el-row>
    </el-form-item>

    <el-form-item label="字体: 大小,透明度">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-input
            v-model="props.klassObj.fontSize"
            type="text"
            @change="renderKlass"
          />
        </el-col>
        <el-col :span="12">
          <el-input
            v-model="props.klassObj.opacity"
            type="text"
            @change="renderKlass"
          />
        </el-col>
      </el-row>
    </el-form-item>

    <el-form-item label="位置：x, y">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-input
            v-model="props.klassObj.left"
            type="text"
            @change="renderKlass"
          />
        </el-col>
        <el-col :span="12">
          <el-input
            v-model="props.klassObj.top"
            type="text"
            @change="renderKlass"
          />
        </el-col>
      </el-row>
    </el-form-item>

    <el-form-item label="旋转" style="display: block;width: 100%;">
      <el-slider v-model="props.klassObj.angle" @change="renderKlass" style="width: 90%;margin: 0 auto;"/>
    </el-form-item>

    <el-form-item label="边框：颜色,宽度">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-color-picker @change="renderKlass" v-model="props.klassObj.stroke"/>
        </el-col>
        <el-col :span="12">
          <el-input
            v-model="props.klassObj.strokeWidth"
            type="text"
            @change="renderKlass"
          />
        </el-col>
      </el-row>
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
    defineProps, nextTick
  } from "vue";
  import FontFaceObserver from "fontfaceobserver";
  import "/@/assets/fonts/fonts.css"
  import {useDesignStoreHook} from "/@/store/modules/design";

  const useDesignStore = useDesignStoreHook()
  const props = defineProps({
    klassObj: Object
  });

  const options = ["observer-test1", "unknown", "observer-test3", "observer-test4", "observer-test5",
    "observer-test6", "observer-test7", "observer-test8", "Trebuchet W01 Regular", "Neue Frutiger 1450 W04"];

  let fontName = ref("");
  let text = ref("");

  onMounted(() => {
  });

  function renderKlass() {
    props.klassObj.klass.set('fill', props.klassObj.fill)
    props.klassObj.klass.set('fontSize', parseFloat(props.klassObj.fontSize).toFixed(2))
    props.klassObj.klass.set('fontWeight', (parseFloat(props.klassObj.fontWeight) && parseFloat(props.klassObj.fontWeight).toFixed(2)) || 'normal')
    props.klassObj.klass.set('opacity', parseFloat(props.klassObj.opacity).toFixed(2))
    props.klassObj.klass.set('left', parseInt(props.klassObj.left))
    props.klassObj.klass.set('right', parseInt(props.klassObj.right))
    props.klassObj.klass.set('angle', parseInt(props.klassObj.angle))
    props.klassObj.klass.set('text', props.klassObj.text)
    props.klassObj.klass.set('stroke', props.klassObj.stroke)
    props.klassObj.klass.set('strokeWidth',parseInt( props.klassObj.strokeWidth))
    useDesignStore.canvas.requestRenderAll();
  }

  function setColor(e) {
    props.klassObj.klass.set('fill', e)
    useDesignStore.canvas.requestRenderAll();
  }

  function loadAndUse(font) {
    let myfont = new FontFaceObserver(font);
    myfont.load().then(function () {
      // when font is loaded, use it.
      props.klassObj.klass.set("fontFamily", font);
      useDesignStore.canvas.requestRenderAll();
    }).catch(function (e) {
      alert("font loading failed " + font);
    });
  }


</script>

