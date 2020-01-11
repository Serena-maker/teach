import Vue from 'vue'
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Reg from '../pages/reg.vue';
import Login from '../pages/login.vue';
import Home from '../pages/home.vue';
import List from '../pages/list.vue';
import Article from '../pages/article.vue';
import Personal from '../pages/personal.vue';
import Position from '../pages/position.vue';
import JobDetail from '../pages/jobdetail.vue';
import InfoDetail from '../pages/infodetail.vue';
import NoPage from '../pages/no-page.vue'

let routes=[
  {path:'/home',component:Home},
  {path:'/list/:kind',component:List},
  {path:'/article',component:Article},
  {path:'/personal',component:Personal},
  {path:'/reg',component:Reg},
  {path:'/login',component:Login},
  {path:'/position',component:Position},
  {path:'/jobdetail/:_id',component:JobDetail},
  {path:'/infodetail/:_id',component:InfoDetail},
  {path:'/',redirect:'/home'},
  {path:'*',component:NoPage}
];

let router = new VueRouter({
  mode:'history',
  routes
});

export default router;