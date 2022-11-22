<template>
  <el-config-provider :locale="locale" :size="size">
    <router-view />
  </el-config-provider>
</template>
<script setup lang="ts">
import {useStore} from '@/store';
// 导入 Element Plus 语言包
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import en from 'element-plus/es/locale/lang/en';

const {appStore} = useStore()
const language = computed(() => appStore.language);
const size: any = computed(() => appStore.size);
const locale = ref();
watch(
  language,
  value => {
    locale.value = value == 'en' ? en : zhCn;
  },
  {
    // 初始化立即执行
    immediate: true
  }
);
</script>
<style scoped lang="scss">

</style>
