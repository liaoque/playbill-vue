<template>
  <el-form :inline="true" class="demo-form-inline" label-position="top">

    <el-form-item :label="'唯一标识(宽：' + props.klassObj.width.toFixed(0) + '高：'+ props.klassObj.height.toFixed(0)  + ')'">
      <el-input
        v-model="props.klassObj.uuid"
        type="text"
      />
    </el-form-item>


    <!--    <el-form-item label="位置：宽，高">-->
    <!--      <el-row :gutter="20">-->
    <!--        <el-col :span="12">-->
    <!--          <el-input-->
    <!--            v-model="props.klassObj.width" disabled-->
    <!--            type="text"-->
    <!--          />-->
    <!--        </el-col>-->
    <!--        <el-col :span="12">-->
    <!--          <el-input-->
    <!--            v-model="props.klassObj.height" disabled-->
    <!--            type="text"-->
    <!--          />-->
    <!--        </el-col>-->
    <!--      </el-row>-->
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
        <el-col :span="6">
          <label>填充色</label>
          <el-color-picker @change="renderKlass" v-model="props.klassObj.fill"/>
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

  import {ref} from "vue";
  import Actions from "./Actions.vue";
  import {useDesignStoreHook} from "/@/store/modules/design";
  import {Plus} from "@element-plus/icons-vue";
  import {UploadFile} from "element-plus";
  import {uploadApiUrl, handleSuccess as handleSuccess2} from "../Tools/uploads"
  import {saveAction} from "/@/views/design/utils/Tools/stack";

  const props = defineProps({
    klassObj: Object
  });


  const useDesignStore = useDesignStoreHook()

  function renderKlass() {
    console.log(props.klassObj.angle)
    props.klassObj.klass.set('width', parseInt(props.klassObj.width))
    props.klassObj.klass.set('height', parseInt(props.klassObj.height))
    props.klassObj.klass.set('opacity', parseFloat(props.klassObj.opacity).toFixed(2))
    props.klassObj.klass.set('left', parseInt(props.klassObj.left))
    props.klassObj.klass.set('right', parseInt(props.klassObj.right))
    // props.klassObj.klass.set('angle', parseInt(props.klassObj.angle))
    props.klassObj.klass.set('stroke', props.klassObj.stroke)
    props.klassObj.klass.set('fill', props.klassObj.fill)
    props.klassObj.klass.set('strokeWidth', parseInt(props.klassObj.strokeWidth))
    useDesignStore.canvas.requestRenderAll();
    saveAction();
  }

  function renderRotate() {
    props.klassObj.klass.rotate(parseInt(props.klassObj.angle))
    useDesignStore.canvas.requestRenderAll();
    saveAction();
  }
</script>


