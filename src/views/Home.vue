<template>
  <div>
    <h1>Home.vue</h1>
    <p>Directory: {{ dir }}</p>
    <ul>
      <li>mbb</li>
      <li>prod</li>
      <li>lala</li>
    </ul>
  </div>
</template>

<script>
const cp = require('child_process');

export default {
  name: 'home',

  computed: {
    dir() {
      return this.$store.state.directory;
    },
  },

  methods: {
    execute(command, callback) {
      this.exec(command, (error, stdout) => {
        if (error) {
          console.error(error);
        } else {
          callback(stdout);
        }
      });
    },
  },

  mounted() {
    try {
      process.chdir(this.dir);
      console.log(`New directory: ${process.cwd()}`);
    } catch (err) {
      console.error(`chdir: ${err}`);
    }

    this.exec = cp.exec;

    this.execute('phab list:host', (output) => {
      console.log('output', output);
    });
  },
};
</script>
