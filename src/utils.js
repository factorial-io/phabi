import { exec } from 'child_process';

import store from './store';

export const changeDir = (dir) => {
  process.chdir(dir);
};

export const openDir = (dir) => {
  process.chdir(dir);
  exec('open .');
};

export const openTerm = (dir) => {
  exec(`open -a Terminal ${dir}`);
};

export const runCmd = (cmd, projectId) => {
  const project = store.getters.getProject(projectId);
  const nameMarkup = `<span class="name">${project.name}</span>`;
  const cmdMarkup = `<span class="cmd">${cmd}</span>`;

  let output = `<p class="system">-> Running ${cmdMarkup} on ${nameMarkup}<br></span>`;
  store.commit('setProjectOutput', { id: projectId, output: '', resetBool: true });
  store.commit('setProjectOutput', { id: projectId, output });

  exec(cmd)
    .stdout
    .on('data', (data) => {
      output = `<p>${data}</p>`;
      store.commit('setProjectOutput', { id: projectId, output });
    })
    .on('end', () => {
      output = `<p class="system">-> Finished ${cmdMarkup} on ${nameMarkup}</p>`;
      store.commit('setProjectOutput', { id: projectId, output });
      store.commit('setProjectCommand', {
        projectId,
        runningCommand: false,
      });
    });
};
