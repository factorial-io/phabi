<template>
  <div>
    <h1>Project.vue</h1>
    <h2>{{ currentProject.name }}</h2>
    <p>{{ currentProject.dir }}</p>
  </div>
</template>

<script>

export default {
  computed: {
    currentProject() {
      return this.$store.getters.currentProject;
    },
  },
};
</script>
