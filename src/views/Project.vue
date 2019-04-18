<template>
  <div style="width: 100%;">
    <h1 class="mb-4">{{ project.name }}</h1>
    <p>
      Absolute path to fabfile:<br>
      <strong>{{ project.dir }}</strong>
    </p>
    <p>ID: {{ $route.params.id }}</p>
    <hr>

    <h2>Commands</h2>

    <v-btn
      v-for="command in commands"
      :key="command.id"
      @click="runCommand(command)"
      :disabled="isCommandRunning"
    >
      {{ command.name }}
    </v-btn>

    <h3>Utilities</h3>
    <v-btn
      @click="openDirectory(project.dir)"
    >
      Open directory
    </v-btn>

    <v-btn
      @click="openDirectory(`${project.dir}/sites/all/themes/custom/`)"
    >
      Open themes
    </v-btn>

    <v-btn
      @click="openTerminal(project.dir)"
    >
      Open terminal
    </v-btn>

    <template v-if="project.runningCommand">
      <v-alert
        type="warning"
        :value="true"
      >
        <strong>{{ project.runningCommand.name }}</strong> is running.
      </v-alert>
    </template>
    <template v-else>
      <v-alert
        type="success"
        :value="true"
      >
        No activity at the moment.
      </v-alert>
    </template>

    <h3>Output</h3>
    <div
      class="Output"
      v-html="commandOutput"
      ref="outputBox"
    ></div>
  </div>
</template>

<script>
import {
  runCmd,
  changeDir,
  openDir,
  openTerm,
} from '../utils';

export default {
  data: () => ({
    output: '',
  }),

  computed: {
    project() {
      return this.$store.getters.getProject(this.$route.params.id);
    },

    commands() {
      return this.$store.state.commands;
    },

    commandOutput() {
      return this.project.output;
    },

    isCommandRunning() {
      return typeof this.project.runningCommand === 'object';
    },
  },

  methods: {
    runCommand(command) {
      runCmd(command.cmd, this.project.id);
      this.$store.commit('setProjectCommand', {
        projectId: this.project.id,
        command,
      });
    },

    changeDirectory() {
      changeDir(this.project.dir);
    },

    openDirectory(dir) {
      openDir(dir);
    },

    openTerminal(dir) {
      openTerm(dir);
    },
  },

  watch: {
    project() {
      this.changeDirectory();
    },

    commandOutput() {
      this.$refs.outputBox.scrollTop = this.$refs.outputBox.scrollHeight;
    },
  },

  mounted() {
    this.changeDirectory();
  },
};
</script>

<style lang="stylus">
.Output {
  font-family: 'Roboto Mono', monospace;
  border: 1px solid grey;
  border-radius: 3px;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 400px;
  overflow-y: scroll;
  width: 100%;
  color: white;
  background-color: black;
  padding: 20px 38px 20px;
  line-height: 1.2;
}

.Output .name {
  color: #1ee64c;
}

.Output .cmd {
  color: #ff1bca;
}

.Output .system {
  margin-left: -25px;
}
</style>
