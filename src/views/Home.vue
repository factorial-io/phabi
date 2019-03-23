<template>
  <div class="Home">
    <div class="Sidebar">
      <Sidebar />
    </div>

    <div class="Content">
      <Project />
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
import Project from './Project.vue';

export default {
  components: {
    Sidebar,
    Project,
  },
};
</script>

<style lang="stylus">

@import "../variables";

.Home {
  display: flex;
  height: 100%;
}

</style>
