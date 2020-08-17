import Vue from 'vue'
import axios from 'axios'
import router from './router'
import store from './store'
import App from './App.vue'
//import env from './env'


const mock = true;
if(mock){
  require('./mock/api')
}

axios.defaults.baseURL = '/api/';
axios.defaults.timeout = 8000
axios.interceptors.response.use(function(response){
  let res = response.data
  if(res.status == 0){
    return res.data
  }else if(res.status == 10){
    //如果获取失败，跳转到登陆页面
    window.location.href = '/#/login'
  }else{
    alert(res.msg)
  }
  
},function(error){
  return Promise.reject(error)
})

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
