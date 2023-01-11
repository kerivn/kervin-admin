<template>
  <el-config-provider :locale="currentLocale">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import en from 'element-plus/lib/locale/lang/en';
import { Local } from '@/utils/storage';
export default defineComponent({
  name: 'App',
  computed: {
    currentLocale() {
      return Local.get('locale') === 'en' ? en : zhCn;
    },
  },
});
</script>
