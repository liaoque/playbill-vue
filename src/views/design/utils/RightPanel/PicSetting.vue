<template>
  <el-form :inline="true" class="demo-form-inline" label-position="top">
    <el-form-item label="唯一标识">
      <el-input
        v-model="props.klassObj.uuid"
        type="text"
      />
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

    <el-form-item label="旋转" style="display: block;width: 100%;">
      <el-slider v-model="props.klassObj.angle" @change="renderKlass" style="width: 90%;margin: 0 auto;"/>
    </el-form-item>

    <el-form-item label="上传背景图">
      <el-upload action="http://localhost:8000/upload"
                 list-type="picture-card"
                 :on-success="handleSuccess"
                 :on-remove="handleRemove"
                 :auto-upload="true"
                 :limit="1"
      >
        <el-icon>
          <Plus/>
        </el-icon>
      </el-upload>
      <el-dialog v-model="dialogVisible">
        <img w-full :src="dialogImageUrl" alt="Preview Image"/>
      </el-dialog>
    </el-form-item>

    <Actions :klassObj="props.klassObj"></Actions>

  </el-form>


</template>


<script lang="ts">
  // 声明额外的选项
  export default {};
</script>

<script lang="ts" setup>

  import {defineProps, ref} from "vue";
  import Actions from "./Actions.vue";
  import {useDesignStoreHook} from "/@/store/modules/design";
  import {Plus} from "@element-plus/icons-vue";
  import {UploadFile} from "element-plus";

  const props = defineProps({
    klassObj: Object
  });


  const useDesignStore = useDesignStoreHook()

  function renderKlass() {
    props.klassObj.klass.set('opacity', parseFloat(props.klassObj.opacity))
    props.klassObj.klass.set('left', parseFloat(props.klassObj.left))
    props.klassObj.klass.set('right', parseFloat(props.klassObj.right))
    props.klassObj.klass.set('angle', parseFloat(props.klassObj.angle))
    useDesignStore.canvas.requestRenderAll();
  }

  const dialogImageUrl = ref("");
  const dialogVisible = ref(false);


  const handleRemove = (file: UploadFile) => {

  };

  const handleSuccess = (file: UploadFile) => {
    console.log(file)
    console.log("http://localhost:8000/images/head.jpg")
    props.klassObj.klass.setSrc("http://localhost:8000/images/head.jpg", useDesignStore.canvas.renderAll.bind(useDesignStore.canvas), {crossOrigin: "anonymous"})
  };


</script>


