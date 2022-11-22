<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import axios from 'axios';
import HelloWorld from './views/HelloWorld.vue'
interface State {
  msg: any
}
const state: State = reactive({ msg: "Vite + Vue" })
const {msg}=toRefs(state)
onMounted(() => {
  
  axios.get('/basic-api/account/getAccountInfo').then(res => {
    state.msg = res.data.message
  })
})
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/logo/logo.svg" class="logo" alt="Vite logo" />
    </a>
    <ionicon src="/src/assets/vite.svg" size="large" />
    <icon name="all-application" />
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld :msg="msg" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
