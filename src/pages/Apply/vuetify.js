import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import 'vuetify/dist/vuetify.min.css';
import 'vuetify/styles';

const opts = {
  components,
  theme: {
    primary: '#68caa6',
    radioactive: '#0ACF23'
  },
  icons: {
    iconfont: 'md'
  }
};

const vuetify = createVuetify(opts);

export default vuetify;
