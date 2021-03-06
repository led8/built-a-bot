import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../components/HomePage.vue';
import RobotBuilder from '../components/RobotBuilder.vue';
import PartInfo from '../components/PartInfo.vue';
import ShoppingCart from '../components/ShoppingCart.vue';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/build',
    name: 'Build',
    component: RobotBuilder,
  },
  {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
    props: true,
  },
  {
    path: '/cart',
    name: 'Cart',
    component: ShoppingCart,
  }],
});
