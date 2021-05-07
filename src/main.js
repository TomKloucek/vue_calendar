import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import vueTextArea from 'vue-textarea-autosize';
import 'vuetify/dist/vuetify.min.css';
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.config.productionTip = false;

Vue.use(vuetify);
Vue.use(vueTextArea);

firebase.initializeApp({
  apiKey: '',
  authDomain: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
});

export const db = firebase.firestore();

new Vue({
  el: '#app',
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
