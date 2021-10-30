<template>
  <section class="height-100 imagebg text-center" data-overlay="4">
    <div class="background-image-holder">
      <img alt="background" src="img/inner-6.jpg" />
    </div>
    <div class="container pos-vertical-center">
      <div class="row">
        <div class="col-md-7 col-lg-5">
          <h2>Login to continue</h2>
          <p class="lead">
            Welcome back, sign in with your existing account credentials
          </p>
          <form v-on:submit.prevent="processLogInUser">
            <div class="row">
              <div class="col-md-12">
                <input type="text" v-model="user.username" placeholder="Username" required/>
              </div>
              <div class="col-md-12">
                <input type="password" v-model="user.password" placeholder="Password" required/>
              </div>
              <div class="col-md-12">
                <button class="btn btn--primary type--uppercase" type="submit">
                  Login
                </button>
              </div>
            </div>
            <!--end of row-->
          </form>
          <span class="type--fine-print block"
            >Dont have an account yet?
            <a href="#" v-on:click="loadSignUp">Create account</a>
          </span>
          <span class="type--fine-print block"
            >Forgot your username or password?
            <a href="page-accounts-recover.html">Recover account</a>
          </span>
        </div>
      </div>
      <!--end of row-->
    </div>
    <!--end of container-->
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "LogIn",
  data: function () {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    processLogInUser: function () {
      axios
        .post("https://encuesta-eps-app.herokuapp.com/login/", this.user, {
          headers: {},
        })
        .then((result) => {
          let dataLogIn = {
            username: this.user.username,
            token_access: result.data.access,
            token_refresh: result.data.refresh,
          };
          this.$emit("completedLogIn", dataLogIn);
        })
        .catch((error) => {
          if (error.response.status == "401")
            alert("ERROR 401: Credenciales Incorrectas.");
        });
    },
    loadSignUp: function () {
      this.$router.push({ name: "signUp" });
    },
  },
};
</script>