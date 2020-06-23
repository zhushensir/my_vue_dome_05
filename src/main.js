// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//import vueResource from 'vue-resource'
import MintUI from 'mint-ui'
import { Lazyload } from 'mint-ui';
import 'mint-ui/lib/style.css'
//声明使用
// Vue.use(vueResource) //内部会给vm对象和组件添加一个属性 
Vue.use(MintUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
