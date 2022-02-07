<template>
  <div class="cards">
    <card
      v-for="pokemon in pokemons"
      :key="pokemon.id"
      @click="click(pokemon)"
      :class="{ opace: selectedId && pokemon.id !== selectedId }"
      class="card"
    >
      <template v-slot:title>{{ pokemon.name }}</template>

      <template v-slot:content>
        <img :src="pokemon.sprite" alt="avatar" />
      </template>

      <template v-slot:description>
        <div v-for="type in pokemon.types" :key="type">
          {{ type }}
        </div>
      </template>
    </card>
  </div>
</template>

<script>
  import Card from './Cards.vue';

  export default {
    components: {
      Card,
    },

    props: {
      pokemons: {
        type: Array,
        default: [],
      },
      selectedId: {
        type: Number,
      },
    },

    methods: {
      click(pokemon) {
        this.$emit('chosen', pokemon);
      },
    },
  };
</script>

<style scoped>
  img {
    width: 100%;
  }

  .cards {
    display: flex;
    justify-content: center;
  }

  .opace {
    opacity: 0.5;
  }

  .card:hover {
    opacity: 1;
  }
</style>
