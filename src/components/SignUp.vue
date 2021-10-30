<template>
  <section class="imageblock feature-large height-100">
    
    <div class="container pos-vertical-center">
      <div class="row">
        <div class="col-md-4 offset-md-4">
          <h2>Create an account</h2>
          
          <form v-on:submit.prevent="processSignUp">
            <div class="row">
              <div class="col-12">
                <input
                  type="text"
                  name="Name"
                  v-model="user.name"
                  placeholder="Nombre" required
                />
              </div>
              <div class="col-12">
                <input
                  type="email"
                  name="Email Address"
                  v-model="user.email"
                  placeholder="Email Address" required
                />
              </div>
              <div class="col-12">
                <input
                  type="text"
                  name="Num Doc"
                  v-model="user.perfil.num_doc"
                  placeholder="Numero Documento" required
                />
              </div>
              <div class="col-12">
                <input
                  type="text"
                  name="Ciudad"
                  v-model="user.perfil.ciudad"
                  placeholder="Ciudad" required
                />
              </div>
              <div class="col-12">
                <input
                  type="text"
                  name="Direccion"
                  v-model="user.perfil.direccion"
                  placeholder="Dirección" required
                />
              </div>
              <div class="col-12">
                <input
                  type="text"
                  name="User Name"
                  v-model="user.username"
                  placeholder="Username" required
                />
              </div>
              <div class="col-12">
                <input
                  type="password"
                  name="Password"
                  v-model="user.password"
                  placeholder="Password" required
                />
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn--primary type--uppercase">
                  Create Account
                </button>
              </div>
              <div class="col-12">
                <span class="type--fine-print"
                  >By signing up, you agree to the
                  <a href="#">Terms of Service</a>
                </span>
              </div>
            </div>
            <!--end row-->
          </form>
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
  name: "SignUp",
  data: function () {
    return {
      user: {
        username: "",
        password: "",
        name: "",
        email: "",
        perfil: {
          num_doc: "", 
          ciudad: "",
          direccion: "",
          is_admin: false
        },
      },
    };
  },
  methods: {
    processSignUp: function () {
      axios
        .post("https://encuesta-eps-app.herokuapp.com/user/", this.user, {
          headers: {},
        })
        .then((result) => {
          let dataSignUp = {
            username: this.user.username,
            token_access: result.data.access,
            token_refresh: result.data.refresh,
          };
          this.$emit("completedSignUp", dataSignUp);
        })
        .catch((error) => {
          console.log(error);
          alert("ERROR: Fallo en el registro.");
        });
    }
  },
};
</script>