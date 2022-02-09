import { createRouter, createWebHistory } from 'vue-router';
import { h } from 'vue';

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
        {
          path: 'start',
          component: h(Markdown, { name: 'start', key: 'start' })
        },
        {
          path: 'install',
          component: h(Markdown, { name: 'install', key: 'install' })
        },
        {
          path: 'introduction',
          component: h(Markdown, { name: 'introduction', key: 'introduction' })
        },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
      ]
    },
    { path: '/:pathMatch(.*)', component: Notfound }
  ],
});
