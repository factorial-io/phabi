<template>
  <v-app id="app">

    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      class="grey lighten-4"
      app
    >
      <Sidebar />
    </v-navigation-drawer>

    <v-toolbar color="amber" app absolute clipped-left>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <span class="title ml-3 mr-5">PHAB&nbsp;<span class="font-weight-light">i</span></span>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height class="grey lighten-4">
        <v-layout>
          <Project />
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Sidebar from './views/Sidebar.vue';
import Project from './views/Project.vue';

export default {
  components: {
    Sidebar,
    Project,
  },

  data: () => ({
    drawer: null,
  }),

  props: {
    source: String,
  },
};
</script>

<style lang="stylus">
@import '~vuetify/src/stylus/main'
@import "./variables";

</style>
