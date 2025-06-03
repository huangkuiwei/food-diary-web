import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(process.env.VUE_APP_ROUTE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'pcLayout',
      component: () => import('@/layouts/pcLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/pcLayout/home.vue'),
        },
      ],
    },
    {
      path: '/m',
      name: 'mobileLayout',
      component: () => import('@/layouts/mobileLayout.vue'),
    },
  ],
});

export default router;
