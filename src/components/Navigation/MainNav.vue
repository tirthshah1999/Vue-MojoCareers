<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full h-16 bg-white">
      <div
        class="flex flex-no-wrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <!-- <a href="#" class="flex items-center h-full text-xl">Careers</a> -->
        <!-- Dynamically -->
        <a :href="url" class="flex items-center h-full text-xl">{{
          company
        }}</a>
        <h2 class="flex items-center h-full ml-8">
          Developed By {{ author.firstName }} {{ author.lastName }}
        </h2>
        <nav class="h-full ml-12">
          <ul class="flex h-full p-0 m-0 list-none">
            <!-- for loop and it needs key as unique identifier -->
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="h-full ml-9 first:ml-0"
              data-test="main-nav-list-item"
            >
              <a href="" class="flex items-center h-full py-2.5">{{
                menuItem
              }}</a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-pic v-if="isLoggedIn" data-test="profile-pic" />
          <action-button
            v-else
            data-test="login-button"
            text="Sign in"
            type="primary"
            @click="loginUser"
          />
        </div>
      </div>
      <my-subnav v-if="isLoggedIn" data-test="subnav" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfilePic from "@/components/Navigation/ProfilePic.vue";
import MySubnav from "@/components/Navigation/MySubnav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfilePic,
    MySubnav,
  },
  data() {
    return {
      company: "Mojo Careers",
      author: {
        firstName: "Tirth",
        lastName: "Shah",
      },
      url: "https://www.google.com",
      menuItems: [
        "Teams",
        "Location",
        "Life at Mojo Corp",
        "How we hire",
        "Students",
        "Jobs",
      ],
      isLoggedIn: false,
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
