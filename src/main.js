import Vue from "vue";
import App from "./components/App.vue";

import VueRouter from "vue-router";
import Dashboard from "./components/Dashboard";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

import { firebaseApp } from "./firebaseApp";
import store from "./store";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/dashboard", component: Dashboard },
    { path: "/signin", component: Signin },
    { path: "/signup", component: Signup }
  ]
});

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch("signIn", user);
    router.push("/dashboard");
  } else {
    router.replace("/signin");
    //router.replace("/signup");
  }
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
