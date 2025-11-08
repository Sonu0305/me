import {createApp} from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSquareLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faSquareLinkedin, faEnvelope, faGithub);

const app = createApp(App);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app');