import { createRouter, createWebHistory } from 'vue-router';

import ButtonDemo from './components/componentList/ButtonDemo.vue';
import DialogDemo from './components/componentList/DialogDemo.vue';
import SwitchDemo from './components/componentList/SwitchDemo.vue';
import TabsDemo from './components/componentList/TabsDemo.vue';
import Markdown from './components/Markdown.vue';

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
      children: [
        { path: '', redirect: '/doc/introduction' },
        { path: '/doc/:name', component: Markdown },
      ]
    },
    {
      path: '/components',
      component: Doc,
      children: [
        { path: '', redirect: '/components/switch' },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
      ]
    },
    { path: '/404', component: Notfound },
    { path: '/:pathMatch(.*)', component: Notfound }
  ],
});
