<template>
  <el-divider />
  <el-form-item label="操作">
    <el-radio-group label="label position">
      <el-radio-button label="Lock">
        <el-icon>
          <Lock />
        </el-icon>
      </el-radio-button>
      <el-radio-button label="rigDocumentCopyht">
        <el-icon>
          <DocumentCopy />
        </el-icon>
      </el-radio-button>
      <el-radio-button label="Delete">
        <el-icon>
          <Delete />
        </el-icon>
      </el-radio-button>
    </el-radio-group>
  </el-form-item>

</template>

<script lang="ts" setup>
import { Lock, Unlock, Delete, DocumentCopy } from "@element-plus/icons-vue";
import { defineProps } from "vue";

const props = defineProps({
  klassObj: Object
});

</script>

<style scoped>

</style>


<script lang="ts">
// 声明额外的选项
export default {};
</script>
