import { createApp } from 'vue';
import { createPinia } from 'pinia';
import antd from 'ant-design-vue';
import App from '@/App.vue';
import router from '@router';

import 'ant-design-vue/dist/antd.less';
import '@styles/reset.less';
import '@styles/global.less';

import 'lib-flexible';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(antd);

app.mount('#app');
