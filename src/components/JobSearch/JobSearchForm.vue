<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl"
    @submit.prevent="searchForJobs"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <label class="absolute left-0 top-10">Role</label>
        <!-- @input is an event like onChange, trigger this so 2 way data binding achieve -->
        <!-- <input type="text" placeholder="Software Engineer" class="w-full text-lg font-normal focus:outline-none" :value="role" @input="updateRole" />    -->
        <text-input v-model="role" placeholder="Software Engineer" data-test='role-input' />
      </div>
      <span
        class="flex items-center h-full px-3 border-l border-r border-brand-gray-3 bg-brand-gray-2"
        >in</span
      >

      <div class="relative flex items-center flex-1 h-full pr-3">
        <label class="absolute left-0 top-10">Where?</label>
        <!-- v-model is directive shortcut for 2 way data binding we just did above -->
        <!-- <input type="text" placeholder="Los Angeles" class="w-full text-lg font-normal focus:outline-none" v-model="location" /> -->
        <text-input v-model="location" placeholder="Los Angeles" data-test='location-input' />
      </div>
    </div>
    <action-button text="Search" type="secondary" class="rounded-r-3xl" data-test='form-submit-button' />
  </form>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import TextInput from "@/components/Shared/TextInput.vue";

export default {
  name: "JobSearchForm",
  components: {
    ActionButton,
    TextInput,
  },

  data() {
    return {
      role: "",
      location: "",
    };
  },

  methods: {
    searchForJobs() {
      this.$router.push({
        name: "JobResults",   // name of component instead of url to be more specific
        query: {role: this.role, location: this.location},
      });
    },

    updateRole(payload) {
      this.role = payload;
    },

    updateLocation(payload) {
      this.location = payload;
    },

    // If you write inline in template then $event you have to write so just to remeber, else its parameter you can write anything

    // updateRole($event){
    //   this.role = $event.target.value;
    // },

    // updateLocation($event){
    //   this.location = $event.target.value;    no need v-model will handle it
    // },
  },
};
</script>
