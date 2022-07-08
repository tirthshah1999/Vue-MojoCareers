<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      validator(value) {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  // if dependent the put in computed
  computed: {
    buttonClass() {
      return {
        [this.type]: true, // primary or secondary whichever is passed as prop
      };
    },
  },
};
</script>

<style scoped>
button {
  /* apply is tailwind css directive so that we can write tailwind classes inside regular css */
  @apply px-5 py-3 font-medium;
}

.primary {
  @apply rounded text-white border-0 bg-brand-blue-1 hover:shadow-blue;
}

.secondary {
  @apply text-brand-blue-1 bg-transparent hover:bg-brand-blue-2 hover:text-white;
}
</style>
