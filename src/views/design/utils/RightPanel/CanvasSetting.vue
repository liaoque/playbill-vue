<template>
  <div class="" style="background-color: #FFFFFF;padding: 5px;">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="画布宽">
        <el-input placeholder="宽" v-model="useDesignStore.getCanvasMap.width" @change="renderKlass"></el-input>
      </el-form-item>
      <el-form-item label="画布高">
        <el-input placeholder="高" v-model="useDesignStore.getCanvasMap.height" @change="renderKlass"></el-input>
      </el-form-item>

      <el-form-item label="背景颜色">
        <el-color-picker v-model="props.klassObj.backgroundColor" @change="useDesignStore.setBackgroundColor"/>
      </el-form-item>

      <el-form-item label="上传背景图">
        <el-upload :action="uploadApiUrl"
                   list-type="picture-card"
                   :on-success="handleSuccessBackground"
                   :on-remove="handleRemoveBackground"
                   :auto-upload="true"
                   :limit="1"
        >
          <el-icon>
            <Plus/>
          </el-icon>
        </el-upload>

        <el-dialog v-model="dialogVisible">
          <img w-full :src="props.klassObj.backgroundImage" alt="Preview Image"/>
        </el-dialog>

      </el-form-item>

      <el-form-item label="删除背景图">
        <el-button @click="handleRemoveBackground">删除</el-button>
      </el-form-item>

    </el-form>
  </div>

</template>

<script lang="ts" setup>
  import {
    ref,
    defineProps,
    onMounted,
    nextTick, computed
  } from 'vue'

  import {
    useDesignStoreHook
  } from "/@/store/modules/design";
  import {handleRemoveBackground, handleSuccessBackground, uploadApiUrl} from "../Tools/uploads"
  import {UploadFile} from "element-plus";
  import {Plus} from "@element-plus/icons-vue";
  import {saveAction} from "/@/views/design/utils/Tools/stack";

  const useDesignStore = useDesignStoreHook()
  const props = defineProps({
    klassObj: Object
  });
  let dialogVisible = computed(() => {
    return !!props.klassObj.backgroundImage;
  })

  onMounted(() => {

  })

  function renderKlass() {
    props.klassObj.klass.set('width', parseInt(useDesignStore.getCanvasMap.width))
    props.klassObj.klass.set('height', parseInt(useDesignStore.getCanvasMap.height))
    useDesignStore.canvas.requestRenderAll();
    saveAction();
  }

</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
