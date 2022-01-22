import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyCrUNWsCEwvBvWXVXjZrYz-sRUEzAgEoAY",
  authDomain: "with-media.firebaseapp.com",
  databaseURL: "https://with-media-default-rtdb.firebaseio.com",
  projectId: "with-media",
  storageBucket: "with-media.appspot.com",
  messagingSenderId: "853321292005",
  appId: "1:853321292005:web:88abf4715d532435cfdc0c",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

window.firebase = firebase;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
