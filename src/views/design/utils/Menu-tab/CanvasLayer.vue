<template>
  <ul class="list">
    <li v-for="i in props.componentSize" :key="i" class="list-item">
      <el-button style=" width: 100%;" @click="selection(i)">图层{{ i }}({{ prefix(i) }})</el-button>

    </li>
  </ul>
</template>

<script lang="ts">
export default {
  name: "CanvasLayer"
};
</script>

<script lang="ts" setup>
import { computed, onActivated } from "@vue/runtime-core";
import { useDesignStoreHook } from "/@/store/modules/design";

const useDesignStore = useDesignStoreHook();
const props = defineProps({
  componentSize: Number
});
let selection = (i: Number) => {
  useDesignStore.canvas.setActiveObject(useDesignStore.canvas.item(i - 1));
  useDesignStore.canvas.requestRenderAll();
};

let prefix = (i: Number) => {
  let klass = useDesignStore.canvas.item(i - 1);
  return klass.component_type;
};

</script>

<style scoped>

</style>
