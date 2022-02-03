import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Haha from './components/Haha.vue';

const history = createWebHistory();
const router = createRouter({
	history,
	routes: [
		{ path: '/', component: Haha },
		{ path: '/index', component: HelloWorld },
	],
});

const app = createApp(App);
app.use(router).mount('#app');
