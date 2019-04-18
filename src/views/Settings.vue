<template>
  <div style="width: 100%;">
    <h1>Projects</h1>
    <p>Enter new project details:</p>

    <v-text-field
      label="Regular"
      single-line
      placeholder="Project name"
      v-model="newName"
    ></v-text-field>

    <v-text-field
      label="Regular"
      single-line
      placeholder="Absolute path to .fabfile.yml"
      v-model="newDir"
    ></v-text-field>

    <v-btn
      @click="addProject"
      :disabled="newName === '' || newDir === ''"
    >
      Save
    </v-btn>

    <h3 class="mt-4">All projects</h3>
    <v-list>
      <v-list-tile
        v-for="project in allProjects"
        :key="project.id"
      >
        <v-list-tile-content>
          <v-list-tile-title v-html="project.name"></v-list-tile-title>
          <v-list-tile-sub-title v-html="project.dir"></v-list-tile-sub-title>
        </v-list-tile-content>

        <v-list-tile-action>
          <v-icon @click="removeProject(project.id)">close</v-icon>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </div>
</template>

<script>
export default {
  data: () => ({
    newDir: '',
    newName: '',
  }),

  computed: {
    currentProject() {
      return this.$store.getters.currentProject;
    },

    commands() {
      return this.$store.state.commands;
    },

    allProjects() {
      return this.$store.state.projects;
    },
  },

  methods: {
    addProject() {
      const newProject = {
        name: this.newName,
        dir: this.newDir,
      };

      this.$store.commit('addProject', newProject);

      this.newName = '';
      this.newDir = '';
    },

    removeProject(id) {
      this.$store.commit('removeProject', id);
    },
  },
};
</script>

<style lang="stylus">

</style>
