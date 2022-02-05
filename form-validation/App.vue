<template>
  <form @submit.prevent="submit">
    <my-input
      name="Username"
      :rules="{ required: true, min: 5 }"
      :value="username.value"
      :error="username.error"
      @update="update"
    />

    <my-input
      name="Password"
      type="password"
      :rules="{ required: true, min: 10 }"
      :value="password.value"
      :error="password.error"
      @update="update"
    />
    <my-button background="darkslateblue" color="white" :disabled="!valid" />
  </form>
</template>

<script>
  import MyButton from './MyButton.vue';
  import MyInput from './MyInput.vue';

  export default {
    components: {
      MyButton,
      MyInput,
    },

    data() {
      return {
        username: {
          value: 'user',
          error: '',
        },
        password: {
          value: 'pass',
          error: '',
        },
      };
    },

    methods: {
      update({ name, value, error }) {
        this[name].value = value;
        this[name].error = error;
      },
      submit($e) {},
    },

    computed: {
      valid() {
        return !this.username.error && !this.password.error;
      },
    },
  };
</script>

<style scoped></style>
