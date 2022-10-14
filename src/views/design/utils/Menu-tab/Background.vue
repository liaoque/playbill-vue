<template>
  <el-row style="padding-top:5px">
    <el-col v-for="(item, index) in picList" :key="index" :span="11">
      <el-card :body-style="{ padding: '0px' }" @click="changeElement(item)">
        <img :src="item.src" class="image" />
        <div style="padding: 4px">
          <span style="font-size: 12px;">{{ item.title }}</span>
        </div>
      </el-card>
    </el-col>
  </el-row>

</template>

<script lang="ts" setup>
  import {
    ref,
    defineProps,
    defineEmits,
    onMounted
  } from 'vue';
  import {
    useDesignStoreHook
  } from "/@/store/modules/design";

  let picList = ref([])


  onMounted(() => {
    picList.value = [{
        id: 1,
        title: '11',
        src: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
      },
      {
        id: 2,
        title: '22',
        src: '/dragon.jpg'
      },
    ]
  })

  const useDesignStore = useDesignStoreHook()

  function changeElement(item: Object) {
    useDesignStore.setBackground(item.src)
  }
</script>

<style>
  .image {
    width: 100%;
    display: block;
  }
</style>
