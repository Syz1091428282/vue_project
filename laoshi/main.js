import Vue from 'vue'

import App from './App.vue'

//完整版引入mint-ui(薄荷)
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

//按需导入 更好一点 让代码体积变小
//我们现在只想用mint-ui的button组件
// https://cloud.tencent.com/developer/section/1489979
//Button用在html上面
// mui 用了mui 有点问题要解决
// 用一个ui组件
// import { Button } from 'mint-ui';
// Vue.component(Button.name, Button);


//导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
import { Swipe, SwipeItem } from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入mui样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'

const vm = new Vue({
  el:'#app',
  render:function(createElement){
    return createElement(App)
  },
  router
})