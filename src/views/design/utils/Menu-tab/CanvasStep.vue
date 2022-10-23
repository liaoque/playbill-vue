<template>
  <ul class="list">
    <li v-for="i in undoStackLength" :key="i" class="list-item">
      <el-button style=" width: 100%;" :type="stackIndex2(i)" @click="selection(i)">步骤{{ i }}
      </el-button>

    </li>
  </ul>
</template>

<script lang="ts">
export default {
  name: "CanvasLayer"
};
</script>

<script lang="ts" setup>
import { computed, onActivated, defineProps } from "@vue/runtime-core";
import { useDesignStoreHook } from "/@/store/modules/design";
import { undoStackLength, doAction, stackIndex } from "/@/views/design/utils/Tools/stack";


const useDesignStore = useDesignStoreHook();

let selection = (i) => {
  doAction(i);
};


let stackIndex2 = (i): string => {
  return (stackIndex == i) && "primary" || "";
};

</script>

<style scoped>

</style>
