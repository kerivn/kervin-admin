<template>
  <div class="app-wrapper">
    <!-- 侧边栏布局 -->
    <el-container class="l-container" v-if="layoutModel === 'side'">
      <el-aside class="l-aside">
        <SideBar />
      </el-aside>
      <el-main class="l-main">
        <AppMain />
      </el-main>
    </el-container>
    <!-- 顶栏布局 -->
    <el-container class="l-container" v-else-if="layoutModel === 'head'">
      <el-header class="l-header">
        <Navbar />
      </el-header>
      <el-main class="l-main">
        <AppMain />
      </el-main>
    </el-container>
    <!-- 混合布局 -->
    <el-container class="l-container" v-else>
      <el-header class="l-header">
        <Navbar />
      </el-header>
      <el-container class="l-container">
        <el-aside class="l-aside">
          <SideBar />
        </el-aside>
        <el-main class="l-main">
          <AppMain />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang='ts' setup>
import { AppMain, Navbar, SideBar } from './components/index';
import { useStore } from "@/store";
const { settingStore,permissionStore } = useStore()
const layoutModel = computed(() => settingStore.layoutModel);
permissionStore.generateRoutes(['ADMIN'])
</script>
<style scoped lang='scss'>
@import '@/styles/mixin.scss';



.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;

  .l-container {
    width: 100%;
    height: 100%;
  }

  .l-header {
    padding: 0;
    width: 100%;
    height: 50px;
  }

  .l-aside {
    width: 200px;
    height: 100%;
  }
}
</style>