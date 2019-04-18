import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import uuidv1 from 'uuid/v1';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [
      {
        id: uuidv1(),
        runningCommand: false,
        output: '',
        name: 'Examle Project',
        dir: '/Users/johndoe/Documents/multibasebox/projects/ssc_ild',
      },
    ],
    commands: [
      {
        id: uuidv1(),
        global: true,
        name: 'Clear cache (D7)',
        cmd: 'phab drush "cc all" -c mbb',
      },
    ],
  },

  mutations: {
    addProject(state, { name, dir }) {
      const newProjectObj = {
        id: uuidv1(),
        runningCommand: false,
        output: '',
        name,
        dir,
      };

      state.projects.push(newProjectObj);
    },

    addCommand(state, { name, cmd }) {
      const newCommandObj = {
        id: uuidv1(),
        global: true,
        name,
        cmd,
      };

      state.commands.push(newCommandObj);
    },

    removeProject(state, id) {
      // eslint-disable-next-line no-param-reassign
      state.projects = state.projects.filter(project => project.id !== id);
    },

    removeCommand(state, id) {
      // eslint-disable-next-line no-param-reassign
      state.commands = state.commands.filter(command => command.id !== id);
    },

    setProjectOutput(state, { id, output, resetBool }) {
      const project = state.projects.find(p => p.id === id);
      if (resetBool) {
        project.output = `${output}`;
      } else {
        project.output = `${project.output} ${output}`;
      }
    },

    setProjectCommand(state, { projectId, command }) {
      const project = state.projects.find(p => p.id === projectId);
      Vue.set(project, 'runningCommand', command);
    },
  },

  getters: {
    getProject: state => id => state.projects.find(project => project.id === id),

    getCommand: state => id => state.commands.find(command => command.id === id),
  },

  plugins: [vuexLocal.plugin],
});
