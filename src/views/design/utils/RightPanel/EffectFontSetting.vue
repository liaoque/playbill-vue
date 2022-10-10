<template>
  <div>
    <el-form :inline="true" class="demo-form-inline">

      <el-form-item label="背景颜色">
        <el-color-picker @change="setColor"/>
      </el-form-item>


      <el-form-item label="字体">
        <el-select v-model="fontName" @change="loadAndUse" class="m-2" placeholder="Select" size="large">
          <el-option
            v-for="(item, index) in options"
            :key="index"
            :label="item"
            :value="item"
          />
        </el-select>
      </el-form-item>


    </el-form>

  </div>
</template>


<script lang="ts">
  // 声明额外的选项
  export default {}
</script>


<script lang="ts" setup>
  import {
    onMounted,
    onUnmounted,
    ref,
    defineProps,
  } from 'vue'
  import FontFaceObserver from 'fontfaceobserver'



  const props = defineProps({
    klassObj: Object
  })

  const options = ["observer-test1", "unknown", "observer-test3", "observer-test4", "observer-test5",
    "observer-test6", "observer-test7", "observer-test8", "Trebuchet W01 Regular", "Neue Frutiger 1450 W04"]

  let fontName = ref('')

  onMounted(() => {
    console.log(props.klassObj)
  })

  function setColor() {
    // props.klassObj
  }

  function loadAndUse(font) {
    console.log(font)
    let myfont = new FontFaceObserver(font)
    myfont.load().then(function () {
      // when font is loaded, use it.
      canvas.getActiveObject().set("fontFamily", font);
      canvas.requestRenderAll();
    }).catch(function (e) {
      console.log(e)
      alert('font loading failed ' + font);
    });
  }


  // onUnmounted(()=>{
  //   console.log("4444444444444")
  // })

</script>

<style scoped>


  @font-face {
    font-family: observer-test1;
    src: url("./assets/fonts/sourcesanspro-regular.woff") format('woff'),
    url("./assets/fonts/sourcesanspro-regular.ttf") format('truetype');
  }

  @font-face {
    font-family: unknown;
    src: url(unknown.woff) format('woff'),
    url(unknown.ttf) format('truetype');
  }

  @font-face {
    font-family: observer-test3;
    src: url("~@/assets/fonts/sourcesanspro-regular.woff") format('woff'),
    url("~@/assets/fonts/sourcesanspro-regular.ttf") format('truetype');
  }

  @font-face {
    font-family: observer-test4;
    src: url("~@/assets/fonts/subset.woff") format('woff'),
    url("~@/assets/fonts/subset.ttf") format('truetype');
    unicode-range: u+0021;
  }

  @font-face {
    font-family: observer-test5;
    src: url("~@/assets/fonts/subset.woff") format('woff'),
    url("~@/assets/fonts/subset.ttf") format('truetype');
    unicode-range: u+4 e2d, u+56 fd;
  }

  @font-face {
    font-family: observer-test6;
    src: url("~@/assets/fonts/subset.woff") format('woff'),
    url("~@/assets/fonts/subset.ttf") format('truetype');
    unicode-range: u+10 ffff;
  }

  @font-face {
    font-family: observer-test7;
    src: url("~@/assets/fonts/subset.woff") format('woff'),
    url("~@/assets/fonts/subset.ttf") format('truetype');
    unicode-range: u+23;
  }

  @font-face {
    font-family: observer-test8;
    src: url(@/assets/fonts/sourcesanspro-regular.woff) format('woff'),
    url(@/assets/fonts/sourcesanspro-regular.ttf) format('truetype');
  }

  @font-face {
    font-family: Trebuchet W01 Regular;
    src: url(@/assets/fonts/sourcesanspro-regular.woff) format('woff'),
    url(@/assets/fonts/sourcesanspro-regular.ttf) format('truetype');
  }

  @font-face {
    font-family: 'Neue Frutiger 1450 W04';
    src: url(@/assets/fonts/sourcesanspro-regular.woff) format('woff'),
    url(@/assets/fonts/sourcesanspro-regular.ttf) format('truetype');
  }
</style>
