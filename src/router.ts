import { createRouter, createWebHistory } from 'vue-router';
import Button from './components/Button.vue';
import Dialog from './components/Dialog.vue';
import Switch from './components/Switch.vue';
import Tabs from './components/Tabs.vue';
import Doc from './views/Doc.vue';
import Home from './views/Home.vue';
import Notfound from './views/Notfound.vue';

const history = createWebHistory();
export default createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc',
      component: Doc,
      redirect: '/doc/switch',
      children: [
        { path: 'switch', component: Switch },
        { path: 'button', component: Button },
        { path: 'dialog', component: Dialog },
        { path: 'tabs', component: Tabs },
      ]
    },
    { path: '/:pathMatch(.*)', component: Notfound }
  ],
});
