<template>
  <div class="" style="background-color: #FFFFFF;padding: 5px;">
    <el-form :inline="true" class="demo-form-inline">

      <el-form-item label="背景颜色">
        <el-color-picker v-model="color" @change="useDesignStore.setBackgroundColor" />
      </el-form-item>

      <el-form-item label="上传背景图">
        <el-upload action="#"
                   list-type="picture-card"
                   :on-success="handleSuccess"
                   :on-remove="handleRemove"
                   :auto-upload="true"
                   :limit="1"
        >
          <el-icon>
            <Plus />
          </el-icon>
        </el-upload>

        <el-dialog v-model="dialogVisible">
          <img w-full :src="dialogImageUrl" alt="Preview Image" />
        </el-dialog>

      </el-form-item>

      <el-form-item label="删除背景图">
        <el-button @click="useDesignStore.removeBackground">删除</el-button>
      </el-form-item>

    </el-form>
  </div>

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
  defineProps,
  onMounted,
  defineExpose,
  nextTick
} from "vue";
import { Plus } from "@element-plus/icons-vue";

import type {
  UploadFile
} from "element-plus";

import {
  useDesignStoreHook
} from "/@/store/modules/design";

const useDesignStore = useDesignStoreHook();

let color = ref("");
const disabled = ref(false);
const dialogImageUrl = ref("");
const dialogVisible = ref(false);

onMounted(() => {
});

defineExpose({});

const handleRemove = (file: UploadFile) => {
  useDesignStore.removeBackground();
};

const handleSuccess = (file: UploadFile) => {
  console.log(file)
};


</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
