<template>
<!--  <KeepAlive>-->
  <div class="d-centext">

      <div  class="d-canvas" v-contextmenu:contextmenu>
        <canvas style="" id="canvas"></canvas>
      </div>

      <v-contextmenu ref="contextmenu">
        <v-contextmenu-item @click="copySelection">复制</v-contextmenu-item>
        <v-contextmenu-item @click="pasteSelection">黏贴</v-contextmenu-item>
        <v-contextmenu-item @click="deleteSelection">删除</v-contextmenu-item>
        <v-contextmenu-submenu title="图层">
          <v-contextmenu-item @click="upSelection">往上一层</v-contextmenu-item>
          <v-contextmenu-item @click="downSelection">往下一层</v-contextmenu-item>
          <v-contextmenu-item @click="bottomSelection">置底</v-contextmenu-item>
          <v-contextmenu-item @click="topSelection">置顶</v-contextmenu-item>
        </v-contextmenu-submenu>
      </v-contextmenu>

  </div>
<!--  </KeepAlive>-->
</template>


<script lang="ts">
  // 声明额外的选项
  import {
    directive,
    Contextmenu,
    ContextmenuItem,
    ContextmenuSubmenu,
  } from "v-contextmenu";
  import "v-contextmenu/dist/themes/default.css";

  export default {
    directives: {
      contextmenu: directive,
    },
    components: {
      [Contextmenu.name]: Contextmenu,
      [ContextmenuItem.name]: ContextmenuItem,
      [ContextmenuSubmenu.name]: ContextmenuSubmenu,
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
  import {saveAction} from "/@/views/design/utils/Tools/stack";


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
      // let canvas = useDesignStore.canvas;
      useDesignStore.discardActiveObject();
      clonedObj.set({
        left: clonedObj.left + 10,
        top: clonedObj.top + 10,
        evented: true,
        component_type: clipboard.component_type
      });
      if (clonedObj.type === 'activeSelection') {
        console.log("activeSelection")
        clonedObj.canvas = useDesignStore.canvas;
        clonedObj.forEachObject(function (obj) {
          useDesignStore.add(obj);
        });
        clonedObj.setCoords();
      } else {
        useDesignStore.add(clonedObj);
      }
      clonedObj.top += 10;
      clonedObj.left += 10;
      useDesignStore.setActiveObject(clonedObj);
      useDesignStore.requestRenderAll();
      saveAction()
    });
  }

  function deleteSelection() {
    useDesignStore.removeSelection();
    saveAction()
  }

  function upSelection() {
    useDesignStore.upSelection()
  }

  function downSelection() {
    useDesignStore.downSelection()
  }

  function bottomSelection() {
    useDesignStore.bottomSelection()
  }

  function topSelection() {
    useDesignStore.topSelection()
  }

  //  自定义层级
  //  canvas.moveTo(triangle, 10)
  //   triangle.moveTo(10)

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
