<template>
  <el-form :inline="true" class="demo-form-inline" label-position="top">

    <el-form-item :label="'组件id(宽：' + props.klassObj.width.toFixed(0) + '高：'+ props.klassObj.height.toFixed(0)  + ')'">
      <el-input
        v-model="props.klassObj.uuid"
        type="text"
      />
    </el-form-item>

    <!--    <el-form-item label="内容">-->
    <!--      <el-input-->
    <!--        v-model="props.klassObj.text"-->
    <!--        type="textarea"-->
    <!--        @change="renderKlass"-->
    <!--      />-->
    <!--    </el-form-item>-->

    <el-form-item label="">
      <el-row :gutter="20">
        <el-col :span="12">
          <label>X</label>
          <el-input-number
            v-model="props.klassObj.left"
            type="text"
            @change="renderKlass"
          />
        </el-col>
        <el-col :span="12">
          <label>Y</label>
          <el-input-number
            v-model="props.klassObj.top"
            type="text"
            @change="renderKlass"
          />
        </el-col>
      </el-row>
    </el-form-item>

    <el-form-item label="" style="display: block;width: 100%;">
      <el-row :gutter="20">
        <el-col :span="12">
          <label>旋转</label>
          <el-input-number
            v-model="props.klassObj.angle"
            type="text"
            @change="renderRotate"
          />
        </el-col>
        <el-col :span="12">
          <label>透明度</label>
          <el-input-number
            v-model="props.klassObj.opacity"
            type="text"
            :step=0.1
            :max=1
            :min=0
            @change="renderKlass"
          />
        </el-col>
      </el-row>
    </el-form-item>


    <el-form-item label="">
      <el-row :gutter="20">
        <el-col :span="12">
          <label>字体</label>
          <el-select @change="loadAndUse" v-model="props.klassObj.fontFamily" class="m-2" placeholder="Select" size="large" style="margin: 0;">
            <el-option
              v-for="(item, index) in options"
              :key="index"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-col>

      </el-row>
    </el-form-item>

    <el-form-item label="">
      <el-row :gutter="20">
        <el-col :span="12">
          <label>大小</label>
          <el-input-number
            v-model="props.klassObj.fontSize"
            type="text"
            @change="renderKlass"
          />
        </el-col>
        <el-col :span="12">
          <label>粗细</label>
          <el-input-number
            v-model="props.klassObj.fontWeight"
            type="text"
            @change="renderKlass"
          />
        </el-col>
      </el-row>
    </el-form-item>

    <el-form-item label="">
      <el-row :gutter="20">
        <el-col :span="6">
          <label>字体色</label>
          <el-color-picker @change="renderKlass" v-model="props.klassObj.fill" style="display: block"/>
        </el-col>
        <el-col :span="6">
          <label>边框色</label>
          <el-color-picker @change="renderKlass" v-model="props.klassObj.stroke" style="display: block"/>
        </el-col>
        <el-col :span="12">
          <label>边框宽度</label>
          <el-input-number
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
    nextTick
  } from "vue";

  import {useDesignStoreHook} from "/@/store/modules/design";
  import {saveAction} from "/@/views/design/utils/Tools/stack";
  import {loadAndUse as loadAndUse2} from "/@/views/design/utils/Tools/tools";

  const useDesignStore = useDesignStoreHook()
  const props = defineProps({
    klassObj: Object
  });

  const options = [
    "HongLeiXingShuJianTi-2", "JingNanMaiYuanTi", "KeShiLuYanTi",
    "QianTuBiFengShouXieTi", "SanJiXingKaiJianTi-Cu", "YuanYingHeiTi",
    "SiYuanHeiTi-Normal", "SiYuanHeiTiGoogleBan",
  ];

  let text = ref("");

  onMounted(() => {
  });

  function renderKlass() {
    console.log(props.klassObj.angle)
    props.klassObj.klass.set('fill', props.klassObj.fill)
    props.klassObj.klass.set('fontSize', parseInt(props.klassObj.fontSize))
    props.klassObj.klass.set('fontWeight', (parseInt(props.klassObj.fontWeight)) || 700)
    props.klassObj.klass.set('opacity', parseFloat(props.klassObj.opacity).toFixed(2))
    props.klassObj.klass.set('left', parseInt(props.klassObj.left))
    props.klassObj.klass.set('top', parseInt(props.klassObj.top))
    // props.klassObj.klass.set('angle', parseInt(props.klassObj.angle))
    // props.klassObj.klass.set('text', props.klassObj.text)
    props.klassObj.klass.set('stroke', props.klassObj.stroke)
    props.klassObj.klass.set('strokeWidth', parseInt(props.klassObj.strokeWidth))
    //
    //
    // useDesignStore.canvas.requestRenderAll();
    useDesignStore.canvas.requestRenderAll();
    saveAction();
  }

  function renderRotate() {
    props.klassObj.klass.rotate(parseInt(props.klassObj.angle))
    useDesignStore.canvas.requestRenderAll();
    saveAction();
  }

  function setColor(e) {
    props.klassObj.klass.set('fill', e)
    useDesignStore.canvas.requestRenderAll();
    saveAction();
  }

  function loadAndUse(font) {
    loadAndUse2(font).then(function () {
      // when font is loaded, use it.
      props.klassObj.klass.set("fontFamily", font);
      useDesignStore.canvas.requestRenderAll();
    })
  }


</script>

