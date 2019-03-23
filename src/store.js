import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [
      {
        id: 1,
        dir: '/Users/kris/Documents/multibasebox/projects/bi036-giotrif',
        name: 'Giotrif',
      },
      {
        id: 2,
        dir: '/Users/kris/Documents/multibasebox/projects/BI033-respimat-global',
        name: 'Respimat',
      },
      {
        id: 3,
        dir: 'dir3',
        name: 'Test',
      },
    ],
    currentProjectID: 1,
  },

  mutations: {
    setCurrentProjectId(state, newId) {
      // eslint-disable-next-line no-param-reassign
      state.currentProjectID = newId;
    },
  },

  getters: {
    currentProject: state => state.projects.find(
      project => project.id === state.currentProjectID,
    ),
  },
});
