import Vue from "vue";
import App from "./App.vue";
//全局引入mint-ui（薄荷）
// import Vue from 'vue'
//import MintUI from 'mint-ui'
// Vue.use(MintUI)

//按需导入
// import { Button } from "mint-ui";

// Vue.component(Button.name, Button);

// 导入mui的样式
import "./lib/mui/css/mui.css";
import "./lib/mui/css/icons-extra.css";

//配置路由
import VueRouter from "vue-router";
Vue.use(VueRouter);
import router from "./router.js";

//--------下面是项目-----------------------------------------------
//头部
import { Header } from "mint-ui";
Vue.component(Header.name, Header);
//轮播图
import { Swipe, SwipeItem } from "mint-ui";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//实例
const vm = new Vue({
  el: "#app",
  render: function(createElement) {
    return createElement(App);
    
  },
  router
});
