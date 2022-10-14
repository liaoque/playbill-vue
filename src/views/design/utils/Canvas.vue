<template>

  <div class="d-centext">

    <div style="" class="d-canvas" v-contextmenu:contextmenu>
      <canvas style="" id="canvas"></canvas>
    </div>

    <v-contextmenu ref="contextmenu">
      <v-contextmenu-item @click="copySelection">复制</v-contextmenu-item>
      <v-contextmenu-item @click="pasteSelection">黏贴</v-contextmenu-item>
      <v-contextmenu-item @click="deleteSelection">删除</v-contextmenu-item>
    </v-contextmenu>

  </div>

</template>


<script lang="ts">
  // 声明额外的选项
  import {
    directive,
    Contextmenu,
    ContextmenuItem,
  } from "v-contextmenu";
  import "v-contextmenu/dist/themes/default.css";

  export default {
    directives: {
      contextmenu: directive,
    },
    components: {
      [Contextmenu.name]: Contextmenu,
      [ContextmenuItem.name]: ContextmenuItem,
    }
  };
</script>


<script lang="ts" setup>
  import {
    ref,
    resolveDirective
  } from "vue";

  import {
    useDesignStoreHook
  } from "/@/store/modules/design";


  const useDesignStore = useDesignStoreHook();

  let value = ref(50);
  let clipboard: any = null;

  function copySelection() {
    let activeObject = useDesignStore.canvas.getActiveObject()
    activeObject.clone(function (cloned) {
      clipboard = cloned;
      clipboard.component_type = activeObject.component_type;
    });
  }

  function pasteSelection() {
    if (!clipboard) {
      return;
    }
    clipboard.clone(function (clonedObj) {
      let canvas = useDesignStore.canvas;
      canvas.discardActiveObject();
      clonedObj.set({
        left: clonedObj.left + 10,
        top: clonedObj.top + 10,
        evented: true,
        component_type: clipboard.component_type
      });
      console.log(clonedObj.component_type)
      if (clonedObj.type === 'activeSelection') {
        console.log("activeSelection")
        clonedObj.canvas = canvas;
        clonedObj.forEachObject(function (obj) {
          canvas.add(obj);
        });
        clonedObj.setCoords();
      } else {
        canvas.add(clonedObj);
      }
      clonedObj.top += 10;
      clonedObj.left += 10;
      canvas.setActiveObject(clonedObj);
      canvas.requestRenderAll();
    });
  }

  function deleteSelection() {
    let canvas = useDesignStore.canvas;
    let clipboard2 = canvas.getActiveObject();
    if (!clipboard2) {
      return;
    }
    canvas.remove(clipboard2);
    canvas.requestRenderAll();
  }

</script>


<style lang="scss">
  .d-centext {
    position: relative;
  }

  .d-canvas {

    width: 375px;
    height: 667px;
    margin: 0 auto;
    background-color: #fff;

    canvas {
      width: 100%;
      height: 100%
    }
  }

  .slider-demo-block {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0px;
  }

  .slider-demo-block .el-slider {
    margin-top: 0;
    margin-left: 12px;
  }
</style>
