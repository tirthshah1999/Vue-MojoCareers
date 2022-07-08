<template>
    <input type="text" :placeholder="placeholder" class="w-full text-lg font-normal focus:outline-none" :value="modelValue" @input="handleInput" />
</template>

<script>
export default {
    name: "TextInput",
    props: {
        placeholder: {
            type: String,
            required: false,
            default: "",
        },
        modelValue: {
            type: String,
            required: true,
        },
    },
    data(){
        return{
            value: "",
        };
    },
    emits: ["update:modelValue"],
    methods: {
        handleInput($event){
            this.$emit("update:modelValue", $event.target.value); // event name and data just like brodcasting
        },
    },
};
</script>