import VueRouter from 'vue-router'
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
var router = new VueRouter({
    routes: [
    { path: '/home', component: HomeContainer},
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopcarContainer },
    { path: '/search', component: SearchContainer },
    {path:'/',redirect:'/home'},
    { path:'/home/newslist',component:NewsList},
    { path: '/home/newsinfo/:id', component: NewsInfo}
    ],
  linkActiveClass:'mui-active'
})

export default router