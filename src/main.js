// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/common.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'  
})

//vw单位不兼容处理
var hacks = require('viewport-units-buggyfill/viewport-units-buggyfill.hacks');
require('viewport-units-buggyfill').init({
  hacks: hacks
});

//点击300ms延时问题，不需要的添加 class needsclick
var attachFastClick = require('fastclick');
attachFastClick(document.body);


