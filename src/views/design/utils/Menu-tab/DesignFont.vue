<template>

</template>

<script lang="ts" setup>
  import {
    ref,
    onMounted
  } from "vue";
  import {
    useDesignStoreHook
  } from "/@/store/modules/design";

  onMounted(() => {

  });

  const useDesignStore = useDesignStoreHook();


</script>

<style>
  .image {
    width: 100%;
    display: block;
  }
</style>
