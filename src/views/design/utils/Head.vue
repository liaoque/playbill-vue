<template>
  <div>

    <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false">
      <el-menu-item index="0"></el-menu-item>

      <el-sub-menu index="">
        <template #title>新建</template>
        <el-menu-item index="addText" @click="addText">文字</el-menu-item>
        <el-menu-item index="addPic" @click="addPic">图片</el-menu-item>
        <el-sub-menu index="addRect">
          <template #title>图形</template>
          <el-menu-item index="addRect-1" @click="addRect">矩形</el-menu-item>
          <el-menu-item index="addRect-2" @click="addCircular">圆形</el-menu-item>
          <el-menu-item index="addRect-3" @click="addTriangle">三角形</el-menu-item>
          <el-menu-item index="addRect-4" @click="addPolygon">多边形</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>

      <el-menu-item index="prev" @click="undoAction">
        <el-icon>
          <Back/>
        </el-icon>&nbsp;
      </el-menu-item>

      <el-menu-item index="next" @click="redoAction">
        <el-icon>
          <Right/>
        </el-icon>&nbsp;
      </el-menu-item>

      <div class="flex-grow"/>

      <!--    <el-menu-item index="shares">分享</el-menu-item>-->
      <el-menu-item index="api_code" @click="apiCodeView">api</el-menu-item>
      <el-menu-item index="preview" @click="preview">预览</el-menu-item>
      <el-menu-item index="save" @click="toJSON">保存</el-menu-item>
    </el-menu>

    <el-dialog v-model="dialogTableVisible" title="预览">
      <div style="text-align: center">
        <el-image :src="url" lazy/>
      </div>
    </el-dialog>

    <el-dialog v-model="dialogTableVisibleCode" title="api">
      <pre><code class="language-css" v-html="text"></code></pre>
    </el-dialog>
  </div>
</template>

<script lang="ts">
  export default {};
</script>


<script lang="ts" setup>
  import {ref, onMounted, nextTick} from "vue";
  import {useDesignStoreHook} from "/@/store/modules/design";
  import {addText, addPic, addRect, addCircular, addTriangle, addPolygon} from "./Tools/tools";
  import {downloadImage, downloadSVG, toJSON, toView, apiBaseUrl} from "./Tools/save";
  import {undoAction, redoAction} from "./Tools/stack";
  import {Back, Right} from "@element-plus/icons-vue";
  import {highlightAll, highlight, languages} from 'prismjs';
  import { ElMessage, ElMessageBox } from 'element-plus'

  const useDesignStore = useDesignStoreHook();

  const activeIndex = ref("new");

  let url = ref("")
  let text = ref("")
  let dialogTableVisible = ref(false)
  let dialogTableVisibleCode = ref(false)
  const preview = () => {
    toView().then((data) => {
      if (data) {
        url.value = data.src
        dialogTableVisible.value = true
      }
    })
  }

  const apiCodeView = () => {
    let id = useDesignStore.canvasMap.oid
    if(!id){
      ElMessage({
        type: 'error',
        message: '请先保存后再重试！',
      })
      return;
    }

    dialogTableVisibleCode.value = true
    let canvas = useDesignStore.canvas;

    const json = Object.assign({}, ...canvas.toDatalessJSON(['uuid', 'component_type']).objects.map((item)=>{

      if(item.component_type == 'text' ){
        return {
          [item.uuid] : encodeURIComponent("你好,世界\nHello Word")
        }
      }else if(item.component_type == 'pic' ){
        return {
          [item.uuid] : "https://cn-assets.gitee.com/assets/giteego-6c61c00c7ee85e118ecfd749bb3b3c13.svg"
        }
      }else if(item.component_type == 'polygon' ){
        return {
          [item.uuid] :item.points
        }
      }
      return {}
    }).filter((item)=>{
      return item
    }));
    let jsonContent = JSON.stringify(json)
    let baseUrl= apiBaseUrl()
    let code = `
    #GET
    doc:
    #  url：${baseUrl}/playbill/view/海报id
    example:
    curl ${baseUrl}/playbill/view/id/${id}

    #POST
    doc:
    #  url：${baseUrl}/playbill/view/海报id
    #  参数：
    #     组件id: 文本内容|图片地址
    example:
    curl ${baseUrl}/playbill/view/id/${id} \\
    --header 'Content-Type: application/json' \\
    --data-raw '${jsonContent}'
    `
    text.value = highlight(code, languages.css, 'css');
    nextTick(() => {
      highlightAll()
    })
  }

</script>

<style lang="scss">
  .flex-grow {
    flex-grow: 1;
  }

  .layout-theme-default body[layout=vertical] .el-menu--horizontal {
    .el-menu-item.is-active, .el-sub-menu.is-active {
      color: #ff0000 !important;
    }

    .el-sub-menu.is-active > .el-sub-menu__title {
      color: #ff0000 !important;
    }

    .el-sub-menu:hover, .el-menu-item:hover {
      color: red !important;
    }

  }

  .el-header {
    --el-header-padding: 0 0;
  }
</style>
