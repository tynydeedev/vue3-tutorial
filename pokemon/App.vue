<template>
  <pokemon-cards
    :pokemons="pokemons"
    :selectedId="selectedId"
    @chosen="fetchEvolutions"
  />

  <pokemon-cards :pokemons="evolutions" />
</template>

<script>
  import PokemonCards from './PokemonCards.vue';

  const api = 'https://pokeapi.co/api/v2/pokemon';
  const IDs = [1, 4, 7];

  export default {
    components: {
      PokemonCards,
    },

    data() {
      return {
        pokemons: [],
        evolutions: [],
        selectedId: null,
      };
    },

    async created() {
      this.pokemons = await this.fetchData(IDs);
    },

    methods: {
      async fetchData(ids) {
        const responses = await Promise.all(
          ids.map((id) => fetch(`${api}/${id}`)),
        );

        const json = await Promise.all(responses.map((res) => res.json()));

        return json.map((pokemon) => ({
          id: pokemon.id,
          name: pokemon.name,
          sprite: pokemon.sprites.other['official-artwork'].front_default,
          types: pokemon.types.map((t) => t.type.name),
        }));
      },

      async fetchEvolutions(pokemon) {
        this.evolutions = await this.fetchData([
          pokemon.id + 1,
          pokemon.id + 2,
        ]);
        this.selectedId = pokemon.id;
      },
    },
  };
</script>

<style scoped></style>
