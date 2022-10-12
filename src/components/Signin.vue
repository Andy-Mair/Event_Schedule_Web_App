<template>
  <div class="form-inline">
    <h3>Sign In!</h3>
    <div class="form-group">
      <input
        type="text"
        placeholder="name@email.com"
        class="form-control"
        v-model="email"
      />
      <input
        type="password"
        placeholder="password"
        class="form-control"
        v-model="password"
      />
      <button class="btn btn-primary" @click="signIn">Sign In!</button>
    </div>
    <br />
    <br />
    <p>{{ err.message }}</p>
    <br />
    <router-link to="/signup">Not already a user? Sign up here!</router-link>
  </div>
</template>

<script>
import { firebaseApp } from "../firebaseApp";

export default {
  data() {
    return {
      email: "",
      password: "",
      err: {
        message: ""
      }
    };
  },
  methods: {
    signIn() {
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(err => {
          this.err = err;
        });
    }
  }
};
</script>
