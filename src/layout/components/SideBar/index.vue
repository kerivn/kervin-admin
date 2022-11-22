<template>
  <div class="side-bar">
    <el-scrollbar>
      <el-menu  class="el-menu-vertical-demo">

        <el-menu-item index="4" v-for="route in routes" :key="route.id">
          <icon name="all-application" />
          <span>{{route.name}}</span>
        </el-menu-item>
      </el-menu>


    </el-scrollbar>
  </div>
</template>
<script lang="ts" setup>
import { apiGetlistRoutes } from "@/api/menus";
let routes= []
onMounted(() => {
  apiGetlistRoutes().then(res=>{
  routes=res.data

    
  })
});
</script>

<style scoped lang='scss'>
.side-bar {
  height: 100%;
}
</style>