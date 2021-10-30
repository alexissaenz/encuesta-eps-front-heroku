<template>
  <section class="bg--secondary space--sm" v-if="loaded">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-8">
          <div class="boxed boxed--lg boxed--border">
            <div class="text-block text-center">
              
              <span class="h5">{{name}}</span>
              <span>{{username}}</span>
              <span class="label" v-if="!perfil.isAdmin">Usuario</span>
              <span class="label" v-if="perfil.isAdmin">Admin</span>
            </div>
            <div class="text-block clearfix text-center">
              <ul class="row row--list">
                <li class="col-md-4">
                  <span class="type--fine-print block">Ciudad:</span>
                  <span>{{perfil.ciudad}}&nbsp;</span>
                  
                </li>
                <li class="col-md-4">
                  <span class="type--fine-print block">Dirección:</span>
                  <span>{{perfil.direccion}}</span>
                </li>
                <li class="col-md-4">
                  <span class="type--fine-print block">Email:</span>
                  <a href="#">{{email}}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!--end of row-->
    </div>
    <!--end of container-->
  </section>
</template>

<script>
import jwt_decode from "jwt-decode";
import axios from 'axios';
export default {
name: "Account",
data: function(){
return {
id: 0,
username: "",
name: "",
email: "",
perfil: {
    id: 0,
    numDoc: "",
    ciudad: "",
    direccion: "",
    isAdmin: false
},
loaded: false
}
},
methods: {
getData: async function () {
if (localStorage.getItem("token_access") === null || localStorage.getItem("token_refresh") === null) {
this.$emit('logOut');
return;
}
await this.verifyToken();
let token = localStorage.getItem("token_access");
let userId = jwt_decode(token).user_id.toString();
axios.get(`https://encuesta-eps-app.herokuapp.com/user/${userId}/`, {headers: {'Authorization': `Bearer ${token}`}})
.then((result) => {
this.id = result.data.id;
this.username = result.data.username;
this.name = result.data.name;
this.email = result.data.email;
this.perfil.id = result.data.perfil.id;
this.perfil.numDoc = result.data.perfil.numDoc;
this.perfil.ciudad = result.data.perfil.ciudad;
this.perfil.direccion = result.data.perfil.direccion;
this.perfil.isAdmin = result.data.perfil.isAdmin;
this.loaded = true;
})
.catch(() => {
this.$emit('logOut');
});
},
verifyToken: function () {
return axios.post("https://encuesta-eps-app.herokuapp.com/refresh/", {refresh: localStorage.getItem("token_refresh")}, {headers: {}}
)
.then((result) => {
localStorage.setItem("token_access", result.data.access);
})
.catch(() => {
this.$emit('logOut');
});
}
},
created: async function(){
this.getData();
},
}
</script>