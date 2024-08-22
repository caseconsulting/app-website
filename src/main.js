import { createApp } from 'vue';
import router from './router';
import vuetify from './vuetify';
import vuex from './store.js';

import App from './App.vue';

import '@mdi/font/css/materialdesignicons.css';
import(/* webpackMode: "eager" */ 'vuetify/dist/vuetify.min.css');

createApp(App).use(router).use(vuex).use(vuetify).mount('#app');
