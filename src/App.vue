<template>
  <MainNav />
  <my-hero />
</template>

<script>
import MainNav from "@/components/Navigation/MainNav.vue";
import MyHero from "@/components/JobSearch/MyHero.vue";
// npm run lint --fix to fix lint errors
export default {
  name: "App",
  components: {
    MainNav,
    MyHero,
  },
};
</script>
