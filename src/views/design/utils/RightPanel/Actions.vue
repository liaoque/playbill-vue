<template>
  <el-divider/>
  <el-form-item label="操作">
    <el-radio-group label="label position">
      <el-checkbox-button label="Lock" v-model="props.klassObj.visible" @change="visible">{{visibleBoolText}}
        <el-icon>
          <Lock v-if="visibleBool"></Lock>
          <Unlock v-else></Unlock>
        </el-icon>
      </el-checkbox-button>
      <el-checkbox-button label="Lock" v-model="props.klassObj.selectable" @change="selectable">{{selectableBoolText}}
        <el-icon>
          <Lock v-if="selectableBool"></Lock>
          <Unlock v-else></Unlock>
        </el-icon>
      </el-checkbox-button>
    </el-radio-group>
  </el-form-item>

</template>

<script lang="ts" setup>
  import {Lock, Unlock, Delete, DocumentCopy} from "@element-plus/icons-vue";
  import {computed, defineProps, ref} from "vue";
  import {useDesignStoreHook} from "/@/store/modules/design";

  const useDesignStore = useDesignStoreHook()
  const props = defineProps({
    klassObj: Object
  });

  let selectableBoolText = computed(() => {
    return props.klassObj.selectable ? '可选' : "不可选";

  })

  let visibleBoolText = computed(() => {
    return props.klassObj.visible ? '显示' : "隐藏";

  })

  let selectableBool = computed(() => {
    return !props.klassObj.selectable;

  })

  let visibleBool = computed(() => {
    return !props.klassObj.visible;

  })


  function selectable() {
    // props.klassObj.selectable = !props.klassObj.selectable
    props.klassObj.klass.set('selectable', Boolean(props.klassObj.selectable))
    useDesignStore.canvas.discardActiveObject();
    useDesignStore.canvas.requestRenderAll();
  }

  function visible() {
    // props.klassObj.selectable = !props.klassObj.visible
    props.klassObj.klass.set('visible', Boolean(props.klassObj.visible))
    useDesignStore.canvas.requestRenderAll();
  }

</script>


<script lang="ts">
  // 声明额外的选项
  export default {};
</script>
