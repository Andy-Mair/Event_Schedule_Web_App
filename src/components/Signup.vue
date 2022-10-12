<template>
  <div class="form-inline">
    <h3>Sign Up!</h3>
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
      <button class="btn btn-primary" @click="signUp">Sign Up!</button>
    </div>
    <br />
    <br />
    <p>{{ err.message }}</p>
    <br />
    <router-link to="/signin">Already a user? Sign in here!</router-link>
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
    signUp() {
      firebaseApp
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .catch(err => {
          this.err = err;
        });
    }
  }
};
</script>
