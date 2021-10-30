import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue';

import Login from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import Home from './components/Home.vue'
import Account from './components/Account.vue'
import Encuesta from './components/Encuesta.vue'
import EncuestaDetalle from './components/EncuestaDetalle.vue'


const routes = [{
  path: '/',
  name: 'root',
  component: Home
},
{
  path: '/user/logIn',
  name: 'logIn',
  component: Login
},
{
  path: '/user/signUp',
  name: 'signUp',
  component: SignUp
},
{
  path: '/user/home',
  name: 'home',
  component: Home
},
{
  path: '/user/account',
  name: 'account',
  component: Account
},
{
  path: '/user/encuesta',
  name: 'encuesta',
  component: Encuesta
},
{
  path: '/user/encuesta-detalle',
  name: 'encuesta-detalle',
  component: EncuestaDetalle
}
];

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router