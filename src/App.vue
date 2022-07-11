<template>
  <div>
    <main-nav />
    <!-- Dynamic : If home url is there then Home Comp will render same for jobs -->
    <router-view />   
  </div>
</template>

<script>
import MainNav from "@/components/Navigation/MainNav.vue";

export default {
  name: "App",
  components: {
    MainNav,
  },
}
</script>