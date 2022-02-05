import * as Vue from 'vue/dist/vue.esm-bundler.js';

const Num = {
  template: `
    <button
      v-bind:class="getClass(number)"
      v-on:click="click(number)"
    >
      {{ number }}
    </button>
  `,

  props: ['number'],

  methods: {
    isEven(val) {
      return val % 2 === 0;
    },
    getClass(num) {
      return this.isEven(num) ? 'blue' : 'red';
    },
    click(num) {
      this.$emit('chosen', this.number);
    },
  },
};

const app = Vue.createApp({
  components: {
    Num,
  },

  template: `
    <num
      v-for="number in numbers"
      v-bind:number="number"
      v-on:chosen="addNumber"
    />

    <hr>
    
    <num
      v-for="number in numberHistory"
      v-bind:number="number"
    />
  `,

  data() {
    return {
      msg: 'world',
      count: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      numberHistory: [],
    };
  },

  computed: {
    evenList() {
      return this.numbers.filter((num) => this.isEven(num));
    },
  },

  methods: {
    addNumber(number) {
      this.numberHistory.push(number);
    },
  },
});

app.mount('#app');
