import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './vuetify';
import vuex from '../../store';

import '@mdi/font/css/materialdesignicons.css';
import(/* webpackMode: "eager" */ 'vuetify/dist/vuetify.min.css');

createApp(App).use(vuetify).use(vuex).mount('#app');
