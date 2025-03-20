import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'ic:baseline-view-in-ar',
      keepAlive: true,
      order: 1000,
      title: $t('demos.title'),
    },
    name: 'Demos',
    path: '/demos',
    children: [
      {
        meta: {
          title: '表格展示',
        },
        name: 'DemoTable',
        path: '/demos/table',
        component: () => import('#/views/demos/table.vue'),
      },
    ],
  },
];

export default routes;
