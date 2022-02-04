import { createRouter, createWebHistory } from 'vue-router';

import ButtonDemo from './components/docs/ButtonDemo.vue';
import DialogDemo from './components/docs/DialogDemo.vue';
import DocDemo from './components/docs/DocDemo.vue';
import SwitchDemo from './components/docs/SwitchDemo.vue';
import TabsDemo from './components/docs/TabsDemo.vue';
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
        { path: 'start', component: DocDemo },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo },
      ]
    },
    { path: '/:pathMatch(.*)', component: Notfound }
  ],
});
