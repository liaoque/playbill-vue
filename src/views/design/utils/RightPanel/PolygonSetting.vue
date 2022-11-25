<template>
  <el-divider/>
  <el-form-item label="" id="renderPoints">

    <el-row :gutter="24" v-for="(item, index) in props.klassObj.points" :key="index">
      <el-col :span="9">
        <el-input v-model="item.x" :placeholder="'第' + index + '个点的x坐标'" @change="renderPoints">
          <template #prepend>X</template>
        </el-input>
      </el-col>
      <el-col :span="9">
        <el-input v-model="item.y" :placeholder="'第' + index + '个点的y坐标'" @change="renderPoints">
          <template #prepend>Y</template>
        </el-input>
      </el-col>
      <el-button-group>
        <el-button type="primary" size="small" :icon="Plus" @click="addPoints(index)"/>
        <el-button type="primary" size="small" :icon="Minus" @click="delPoints(index)"/>
      </el-button-group>
    </el-row>


  </el-form-item>


</template>


<script lang="ts">
  // 声明额外的选项
  export default {};
</script>

<script lang="ts" setup>

  import {nextTick, ref} from "vue";
  import {useDesignStoreHook} from "/@/store/modules/design";
  import {Minus, Plus} from "@element-plus/icons-vue";
  import {saveAction} from "/@/views/design/utils/Tools/stack";

  const props = defineProps({
    klassObj: Object
  });

  const useDesignStore = useDesignStoreHook()

  function renderPoints() {
    props.klassObj.klass.set('points', props.klassObj.points.map((item) => {
      return {x: parseInt(item.x), y: parseInt(item.y)}
    }))
    useDesignStore.canvas.requestRenderAll();
    saveAction();
  }

  function addPoints(index) {
    console.log(index)
    nextTick(() => {
      props.klassObj.points = [...props.klassObj.points.slice(0, index + 1), {
        x: 0,
        y: 0
      }, ...props.klassObj.points.slice(index + 1)]
    })
    // props.klassObj.points.push()
  }

  function delPoints(index) {
    nextTick(() => {
      props.klassObj.points = [...props.klassObj.points.slice(0, index), ...props.klassObj.points.slice(index + 1)]
    })
  }

</script>


<style>
  #renderPoints {
    margin-right: 12px;
  }

  #renderPoints .el-input-group__append, .el-input-group__prepend {
    padding: 0 10px
  }
</style>
