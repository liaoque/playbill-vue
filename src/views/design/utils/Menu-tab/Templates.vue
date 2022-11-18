<template>
  <el-row style="padding-top:5px">
    <el-col v-for="(item, index) in picList" :key="index" :span="11">
      <el-card :body-style="{ padding: '0px' }" @click="changeElement(item)">
        <img :src="item.src" class="image"/>
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
    onMounted
  } from 'vue';
  import {
    useDesignStoreHook
  } from "/@/store/modules/design";
  import {PlaybillAll, PlaybillQuery} from "/@/api/routes";
  import { ElMessage, ElMessageBox } from 'element-plus'


  let picList = ref([])
  const useDesignStore = useDesignStoreHook()


  onMounted(() => {
    PlaybillAll().then((data: any) => {
      if (data.code == 0) {
        data.info.forEach((item) => {
          picList.value.push(item)
        })
      }
    })


    // picList.value = [{
    //     id: 1,
    //     title: '11',
    //     src: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
    //   },
    //   {
    //     id: 2,
    //     title: '22',
    //     src: '/dragon.jpg'
    //   },
    // ]
  })



  function changeElement(item: any) {
    let self =this;
    PlaybillQuery(item.id).then((data: any)=>{
      if (data.code == 0) {
        ElMessageBox.confirm(
          '载入该海报, 是否继续?',
          '提示',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }
        ).then(() => {
            useDesignStore.load(data.info.id, data.info.data)
            ElMessage({
              type: 'success',
              message: '载入成功!'
            })
          }).catch(() => {
          // ElMessage({
          //   type: 'info',
          //   message: 'Delete canceled',
          // })
        })
        // useDesignStore.canvas.clear()
        // useDesignStore.canvas.loadFromJSON(data.info.data)
      }
    })

  }
</script>


