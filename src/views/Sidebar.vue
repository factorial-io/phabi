<template>
  <v-list
    dense
    class="grey lighten-4"
  >
    <template v-for="project in projects">
      <v-list-tile
        :key="project.id"
        @click="switchProject(project.id)"
      >
        <v-list-tile-action>
          <v-icon>settings</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="grey--text">
            {{ project.name }}
          </v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </template>
  </v-list>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },

  methods: {
    switchProject(projectId) {
      this.$store.commit('setCurrentProjectId', projectId);
    },
  },
};
</script>

<style lang="stylus">
@import "../variables";

.Sidebar {
  width: 30%;
  max-width: 200px;
  background-color: color-grey;
  margin-right: 20px;
  padding-left: 20px;
}
</style>
