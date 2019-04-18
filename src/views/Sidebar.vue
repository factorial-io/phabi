<template>
  <v-list
    dense
    class="grey lighten-4"
    subheader
  >
    <v-subheader>Projects</v-subheader>
    <template v-for="project in projects">
      <v-list-tile
        :key="project.id"
        :to="{ name: 'project', params: { id: project.id } }"
      >

        <v-list-tile-action>
          <v-icon>work</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="grey--text">
            {{ project.name }}
          </v-list-tile-title>
          <v-list-tile-sub-title
            v-if="typeof project.runningCommand === 'object'"
          >
            Running {{ project.runningCommand.name}}
          </v-list-tile-sub-title>
          <v-list-tile-sub-title
            v-else
          >
            Inactive
          </v-list-tile-sub-title>
        </v-list-tile-content>

      </v-list-tile>
    </template>

    <v-divider></v-divider>

    <v-subheader>Settings</v-subheader>

    <v-list-tile
      :to="{ name: 'settings' }"
    >
      <v-list-tile-action>
        <v-icon>settings</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title class="grey--text">
          Edit projects
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

    <v-list-tile
      :to="{ name: 'commands' }"
    >
      <v-list-tile-action>
        <v-icon>next_week</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title class="grey--text">
          Edit commands
        </v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>

  </v-list>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
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
