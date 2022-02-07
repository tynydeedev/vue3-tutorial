<template>
  <input :value="currentTag" @input="setHashtag" />

  <card v-for="post in filteredPosts" :key="post.id">
    <template v-slot:title>
      {{ post.title }}
    </template>

    <template v-slot:content>
      {{ post.content }}
    </template>

    <template v-slot:description>
      <controls :post="post" />
    </template>
  </card>
</template>

<script>
  import { store } from './store';
  import Card from '../pokemon/Cards.vue';
  import Controls from './Controls.vue';
  import { computed, ref, watch } from 'vue';

  export default {
    components: {
      Card,
      Controls,
    },

    setup() {
      const currentTag = computed(() => store.state.currentTag);

      const filteredPosts = computed(() => store.filteredPosts);

      const setHashtag = ($e) => {
        store.setHashtag($e.target.value);
      };

      return {
        filteredPosts,
        currentTag,
        setHashtag,
      };
    },
  };
</script>

<style scoped></style>
