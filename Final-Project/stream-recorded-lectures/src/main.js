import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import './init';
import router from '@/Routes';
import store from '@/store';


Vue.config.productionTip = false

//default vue http module setting for api calls
Vue.prototype.$http = axios;
//load token from localStorage
const token = localStorage.getItem("token");
//if token is there append default axios authorization headers 
if(token){
    Vue.prototype.$http.defaults.headers.common['Authorization'] =token;
}

new Vue({
 router,
 store,
 

 render(renderer){
  return renderer(App)
 }
}).$mount('#app')
