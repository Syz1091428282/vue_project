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

//--------下面是项目-----------------------------------------------

import { Header } from "mint-ui";

Vue.component(Header.name, Header);

const vm = new Vue({
  el: "#app",
  render: function(createElement) {
    return createElement(App);
  }
});
