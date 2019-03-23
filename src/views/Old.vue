<template>
  <div>
    <h1>Project.vue</h1>
</template>

<script>
const cp = require('child_process');

export default {
  data() {
    return {
      output: '',
    };
  },

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

    runccall() {
      this.exec('phab drush "cc all" -c mbb')
        .stdout
        .on('data', (data) => {
          const combinedOutput = `${this.output} ${data}`;
          this.output = combinedOutput;
        })
        .on('end', () => {
          const combinedOutput = `${this.output} ==== FINISHED ====`;
          this.output = combinedOutput;
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
  },
};
</script>
