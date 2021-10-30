<template>
  <nav id="menu-bar" class="bar bar--sm bar-1 hidden-xs">
    <div class="container">
      <div class="row" v-if="is_auth">
        <div class="col-md-2 offset-md-10">
          <div class="bar__module">
            <span class="type--fade">Bienvenido {{ username }}</span>
          </div>
        </div>
        <br />
      </div>

      <div class="row">
        <div class="col-lg-1 col-md-2 hidden-xs">
          <div class="bar__module">
            <a href="/">
              <img class="logo logo-dark" alt="logo" src="/img/logo-dark.png" />
              <img
                class="logo logo-light"
                alt="logo"
                src="/img/logo-light.png"
              />
            </a>
          </div>
          <!--end module-->
        </div>
        <div class="col-lg-11 col-md-12 text-right text-left-xs text-left-sm">
          <!--  Menu navegacion principal -->

          <!--end module-->
          <div class="bar__module">
            <a
              v-if="is_auth"
              v-on:click="loadAccount"
              class="btn btn--sm btn--primary type--uppercase"
              href="#"
            >
              <span class="btn__text"> Mi Perfil </span>
            </a>

            <a
              v-if="is_auth"
              v-on:click="loadEncuesta"
              class="btn btn--sm btn--primary type--uppercase"
              href="#"
            >
              <span class="btn__text"> Diligenciar Encuesta Covid </span>
            </a>

            <a
              v-if="is_auth"
              v-on:click="loadEncuestaDetalle"
              class="btn btn--sm btn--primary type--uppercase"
              href="#"
            >
              <span class="btn__text"> Consultar Ultima Encuesta </span>
            </a>

            <a
              v-if="is_auth"
              v-on:click="logOut"
              class="btn btn--sm type--uppercase"
              href="#"
            >
              <span class="btn__text"> Cerrar Sesión </span>
            </a>
            <a
              v-if="!is_auth"
              v-on:click="loadLogIn"
              class="btn btn--sm btn--primary type--uppercase"
              href="#"
            >
              <span class="btn__text"> Iniciar Sesión </span>
            </a>

            <a
              v-if="!is_auth"
              v-on:click="loadSignUp"
              class="btn btn--sm btn--primary type--uppercase"
              href="#"
            >
              <span class="btn__text"> Registrarse </span>
            </a>
          </div>
          <!--end module-->
        </div>
      </div>
      <!--end of row-->
    </div>
    <!--end of container-->
  </nav>

  <div>
    <router-view
      v-on:completedLogIn="completedLogIn"
      v-on:completedSignUp="completedSignUp"
      v-on:logOut="logOut"
    >
    </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      is_auth: false,
      username: localStorage.getItem("username") || "none",
    };
  },
  components: {},
  methods: {
    verifyAuth: function () {
      this.is_auth = localStorage.getItem("isAuth") || false;
      this.username = localStorage.getItem("username") || "none";
      if (this.is_auth == false) this.$router.push({ name: "logIn" });
      else this.$router.push({ name: "encuesta" });
    },
    loadLogIn: function () {
      this.$router.push({ name: "logIn" });
    },
    loadSignUp: function () {
      this.$router.push({ name: "signUp" });
    },
    completedLogIn: function (data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("Autenticación Exitosa");
      this.verifyAuth();
    },
    completedSignUp: function (data) {
      alert("Registro Exitoso");
      this.completedLogIn(data);
    },
    created: function () {
      this.verifyAuth();
    },
    logOut: function () {
      console.log("ejecutando logout");
      localStorage.clear();
      alert("Sesión Cerrada");
      this.verifyAuth();
    },
    loadAccount: function () {
      this.$router.push({ name: "account" });
    },
    loadEncuesta: function () {
      this.$router.push({ name: "encuesta" });
    },
    loadEncuestaDetalle: function () {
      this.$router.push({ name: "encuesta-detalle" });
    },
  },
};
</script>
