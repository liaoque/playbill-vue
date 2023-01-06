<template>
  <el-row style="padding-top:5px">
    <el-col>
      <el-input v-model="keyword" placeholder="关键字" class="input-with-select">
        <template #append>
          <el-button :icon="Search" @click="playbillList" />
        </template>
      </el-input>
    </el-col>

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
  onMounted,
  nextTick
} from "vue";
import {
  useDesignStoreHook
} from "/@/store/modules/design";
import { PlaybillAll, PlaybillQuery } from "/@/api/routes";
import { ElMessage, ElMessageBox } from "element-plus";
import { Search } from "@element-plus/icons-vue";


let picList = ref([]);
let keyword = ref("");
const useDesignStore = useDesignStoreHook();


onMounted(() => {
  playbillList();
});


function playbillList() {
  PlaybillAll({
    keyword: keyword.value
  }).then((data: any) => {
    if (data.code == 0) {
      nextTick(() => {
        picList.value = [];
        data.info.forEach((item) => {
          picList.value.push(item);
        });
      });
    }
  });
}


function changeElement(item: any) {
  let self = this;
  PlaybillQuery(item.id).then((data: any) => {
    if (data.code == 0) {
      ElMessageBox.confirm(
        "载入该海报, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      ).then(() => {
        useDesignStore.load(data.info.id, {...data.info.data, title: data.info.title});
        ElMessage({
          type: "success",
          message: "载入成功!"
        });
      }).catch(() => {
        ElMessage({
          type: "info",
          message: "载入失败"
        });
      });
    }
  });

}
</script>


