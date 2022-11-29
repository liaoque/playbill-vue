<template>
  <div class="" style="background-color: #FFFFFF;padding: 5px;">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="组件id&nbsp;&nbsp;&nbsp;">
        <el-input  v-model="useDesignStore.canvasMap.filename" @change="renderKlass"></el-input>
      </el-form-item>
      <el-form-item label="画布宽&nbsp;&nbsp;&nbsp;">
        <el-input-number placeholder="宽" v-model="useDesignStore.canvasMap.width" @change="renderKlass"></el-input-number>
      </el-form-item>
      <el-form-item label="画布高&nbsp;&nbsp;&nbsp;">
        <el-input-number placeholder="高" v-model="useDesignStore.canvasMap.height" @change="renderKlass"></el-input-number>
      </el-form-item>
      <el-form-item label="画布缩放">
        <el-input-number placeholder="缩放" v-model="useDesignStore.canvasMap.zoom" :step="0.1" @change="renderKlass"></el-input-number>
      </el-form-item>

      <el-form-item label="背景透明">
        <el-switch
          v-model="useDesignStore.canvasMap.opacity"
          size="large"
          active-value=true
        />
      </el-form-item>

      <el-form-item label="背景颜色">
        <el-color-picker v-model="props.klassObj.backgroundColor" @change="setBackgroundColor"/>
      </el-form-item>

      <el-form-item label="背景图&nbsp;&nbsp;&nbsp;">
        <el-upload :action="uploadApiUrl"
                   list-type="picture-card"
                   :on-success="handleSuccess"
                   :on-remove="handleRemoveBackground"
                   :auto-upload="true"
                   :limit="1"
        >
          <el-icon>
            <Plus/>
          </el-icon>
        </el-upload>

      </el-form-item>

      <el-form-item label="背景图&nbsp;&nbsp;&nbsp;">
        <el-button @click="handleRemoveBackground">删除</el-button>
      </el-form-item>

    </el-form>
  </div>

</template>

<script lang="ts" setup>
  import {
    ref,
    onMounted,
    nextTick, computed
  } from 'vue'

  import {
    useDesignStoreHook
  } from "/@/store/modules/design";
  import {
    handleRemoveBackground,
    handleSuccess as handleSuccess2,
    handleSuccessBackground,
    uploadApiUrl
  } from "../Tools/uploads"
  import {UploadFile} from "element-plus";
  import {Plus} from "@element-plus/icons-vue";
  import {saveAction} from "/@/views/design/utils/Tools/stack";
  import { ElMessage, ElMessageBox } from 'element-plus'

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
    useDesignStore.setWh();
    useDesignStore.canvas.requestRenderAll();
    saveAction();
  }

  function setBackgroundColor(color) {
    useDesignStore.setBackgroundColor(color);
    saveAction();
  }


  const handleSuccess = (file: any) => {
    if(file.code){
      ElMessage({
        type: 'error',
        message: file.message,
      })
      return;
    }
    handleSuccessBackground(file);
  };

</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
