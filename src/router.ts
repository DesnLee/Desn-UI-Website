import { createRouter, createWebHistory } from 'vue-router';

import ButtonDemo from './components/componentList/ButtonDemo.vue';
import DialogDemo from './components/componentList/DialogDemo.vue';
import SwitchDemo from './components/componentList/SwitchDemo.vue';
import TabsDemo from './components/componentList/TabsDemo.vue';

import Install from './components/docs/Install.vue';
import Introduction from './components/docs/Introduction.vue';
import Start from './components/docs/Start.vue';

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
        { path: 'start', component: Start },
        { path: 'install', component: Install },
        { path: 'introduction', component: Introduction },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
      ]
    },
    { path: '/:pathMatch(.*)', component: Notfound }
  ],
});
