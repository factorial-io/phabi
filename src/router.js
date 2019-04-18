import Vue from 'vue';
import Router from 'vue-router';
import Settings from './views/Settings.vue';
import Project from './views/Project.vue';
import Commands from './views/Commands.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Settings,
    },

    {
      path: '/settings',
      name: 'settings',
      component: Settings,
    },

    {
      path: '/project/:id',
      name: 'project',
      component: Project,
    },

    {
      path: '/commands',
      name: 'commands',
      component: Commands,
    },
  ],
});
