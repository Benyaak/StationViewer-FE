import Vue from 'vue';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

let app = '';

const firebaseConfig = {
  apiKey: 'AIzaSyALzYVgGC2z2tacEFyBVN_UIHHGoybqQOU',
  authDomain: 'proiect-tic-261309.firebaseapp.com',
  databaseURL: 'https://proiect-tic-261309.firebaseio.com',
  projectId: 'proiect-tic-261309',
  storageBucket: 'proiect-tic-261309.appspot.com',
  messagingSenderId: '977431146617',
  appId: '1:977431146617:web:8a3164983c45355d05e4a8',
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app');
  }
});
