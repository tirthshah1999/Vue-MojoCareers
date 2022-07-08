<template>
  <section class="mb-16">
    <h1
      class="font-bold tracking-lighter text-8xl mb-14"
      data-test="action-phrase"
    >
      <span :class="actionClasses">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Mojo Corp.</h2>
  </section>
</template>

<script>
import nextElementInList from "@/utils/nextElementInList";

export default {
  name: "Headline",
  data() {
    return {
      action: "Build",
      interval: null,
    };
  },

  computed: {
    actionClasses() {
      return {
        // build: this.action === "Build",
        // code: this.action === "Code",
        // design: this.action === "Design",
        // create: this.action === "Create",
        [this.action.toLowerCase()]: true,
      };
    },
  },

  beforeUnmount() {
    clearInterval(this.interval);
  },

  created() {
    this.changeTitle();
  },

  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Code", "Design", "Create"];
        this.action = nextElementInList(actions, this.action);
      }, 3000);
    },
  },
};
</script>

<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>
