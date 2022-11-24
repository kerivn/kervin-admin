<template>
  <div class="side-bar">
    <el-scrollbar>
      <el-menu  class="el-menu-vertical-demo">

        <el-menu-item index="4" v-for="item in routes" :key="item.path">
          <icon name="all-application" />
          <span>{{item.meta?.title}}</span>
          <el-sub-menu v-if="item.children">
            <el-menu-item index="4" v-for="item2 in item.children" :key="item2.path">
          <span>{{item2.meta?.title}}</span>
            </el-menu-item>
    </el-sub-menu>
        </el-menu-item>
      </el-menu>


    </el-scrollbar>
  </div>
</template>
<script lang="ts" setup>

import {useStore} from '@/store';
const { permissionStore } = useStore();

const routes = computed(() => permissionStore.routes);

</script>

<style scoped lang='scss'>
.side-bar {
  height: 100%;
}
</style>