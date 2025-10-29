import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import { VPie } from 'vuetify/labs/VPie';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

const defaultTheme = {
  dark: false,
  colors: {
    primary: '#415464',
    'primary-darken-1': '#293641',
    'primary-medium-1': '#667785',
    secondary: '#8A3648',
    'secondary-lighten-1': '#C12033',
    tertiary: '#534D5D',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    'on-surface': '#293641',
    'on-background': '#293641'
  }
};

export default createVuetify({
  components: { ...components, VPie },
  directives,
  theme: {
    defaultTheme: 'defaultTheme',
    themes: {
      defaultTheme
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
});
