import { createApp } from 'vue';
import '@/styles/index.scss';
import store from '@/store';
import router from '@/router';
import App from './App.vue';

const app = createApp(App);

app.use(store);
app.use(router);
app.mount('#app');
