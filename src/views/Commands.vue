<template>
  <div style="width: 100%;">
    <h1>Commands</h1>
    <p>Enter new project details:</p>

    <v-text-field
      label="Regular"
      single-line
      placeholder="Command name"
      v-model="newName"
    ></v-text-field>

    <v-text-field
      label="Regular"
      single-line
      placeholder="Command, e.g. phab docker run -cmbb"
      v-model="newCmd"
    ></v-text-field>

    <v-btn
      @click="addCommand"
      :disabled="newName === '' || newCmd === ''"
    >
      Save
    </v-btn>

    <h3 class="mt-4">All global Commands</h3>
    <v-list>
      <v-list-tile
        v-for="command in allCommands"
        :key="command.id"
      >
        <v-list-tile-content>
          <v-list-tile-title v-html="command.name"></v-list-tile-title>
          <v-list-tile-sub-title v-html="command.cmd"></v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon @click="removeCommand(command.id)">close</v-icon>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    newCmd: '',
    newName: '',
  }),

  computed: {
    currentProject() {
      return this.$store.getters.currentProject;
    },

    commands() {
      return this.$store.state.commands;
    },

    allCommands() {
      return this.$store.state.commands;
    },
  },

  methods: {
    addCommand() {
      const newCommand = {
        name: this.newName,
        cmd: this.newCmd,
      };

      this.$store.commit('addCommand', newCommand);

      this.newName = '';
      this.newCmd = '';
    },

    removeCommand(id) {
      this.$store.commit('removeCommand', id);
    },
  },
};
</script>

<style lang="stylus">

</style>
