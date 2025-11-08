import {createApp} from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSquareLinkedin } from '@fortawesome/free-brands-svg-icons';

library.add(faSquareLinkedin);

const app = createApp(App);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app');