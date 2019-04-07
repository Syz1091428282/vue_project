import VueRouter from "vue-router";

//导入对于的路由组件
import HomeContainer from "./components/tabbar/HomeContainer.vue";
import MemberContainer from "./components/tabbar/MemberContainer.vue";
import SearchContainer from "./components/tabbar/SearchContainer.vue";
import ShopContainer from "./components/tabbar/ShopcarContainer.vue";

var router = new VueRouter({
  routes: [
    { path: "/home", component: HomeContainer },
    { path: "/member", component: MemberContainer },
    { path: "/shopcar", component: SearchContainer },
    { path: "/search", component: ShopContainer },
    { path: "/", redirect: "/home" }
  ],
  linkActiveClass: "mui-active" //覆盖默认的路由高亮类，默认的类叫router-link-active
});

export default router;
