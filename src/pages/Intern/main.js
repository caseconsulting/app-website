import { createApp } from 'vue';
import App from './App.vue';
import vuex from '../../store.js';

createApp(App).use(vuex).mount('#app');
