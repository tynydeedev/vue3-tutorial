<template>
  <div :name="name">
    <div class="label">
      <label :for="name">{{ name }}</label>
      <div class="error">{{ error }}</div>
    </div>
    <input :id="name" :value="value" :type="type" @input="input" />
  </div>
</template>

<script>
  export default {
    emits: ['update'],
    props: {
      name: {
        type: String,
        required: true,
      },
      rules: {
        // min: number
        // required: boolean
        type: Object,
        default: {},
      },
      value: {
        type: String,
      },
      error: {
        type: String,
      },
      type: {
        type: String,
        default: 'text',
      },
    },

    created() {
      this.$emit('update', {
        value: this.value,
        name: this.name.toLowerCase(),
        error: this.validate(this.value),
      });
    },

    methods: {
      input($e) {
        this.$emit('update', {
          value: $e.target.value,
          name: this.name.toLowerCase(),
          error: this.validate($e.target.value),
        });
      },

      validate(value) {
        if (this.rules.required && value.length === 0) {
          return 'Value is required';
        }

        if (this.rules.min && value.length < this.rules.min) {
          return `The min length is ${this.rules.min}`;
        }
      },
    },
  };
</script>

<style scoped>
  .input-wrapper {
    display: flex;
    flex-direction: column;
  }

  .error {
    color: red;
  }

  .label {
    display: flex;
    justify-content: space-between;
  }

  input {
    background: none;
    color: black;
    border: 1px solid silver;
    border-radius: 5px;
    padding: 10px;
    margin: 5px 0;
    font-size: 16px;
  }
</style>
