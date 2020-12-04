import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import VueQrcodeReader from "vue-qrcode-reader";
Vue.config.productionTip = false
Vue.use( VueQrcodeReader );
Vue.use( ElementUI );
// -----------------------------------------------
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
Vue.use(firestorePlugin)
// -----------------------------------------------
firebase.initializeApp({
  apiKey: "AIzaSyClxyWJX8P7ex5H53G0ymwlN0-6ycORxdw",
	authDomain: "party-dd1e4.firebaseapp.com",
	databaseURL: "https://party-dd1e4.firebaseio.com",
	projectId: "party-dd1e4",
	storageBucket: "party-dd1e4.appspot.com",
	messagingSenderId: "853310015177",
	appId: "1:853310015177:web:b484c5759d6e324049af18"
} );
export const db = firebase.firestore()
Vue.config.ignoredElements = [ 'qrcode-reader', 'QrcodeReader' ]

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
