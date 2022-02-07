<template>
  <h4>{{ post.title }}</h4>
  <p>{{ post.content }}</p>
</template>

<script>
  import { useRoute } from 'vue-router';
  import { computed } from 'vue';
  import { usePosts } from './usePosts';

  export default {
    setup() {
      const route = useRoute();
      const postStore = usePosts();

      const posts = postStore.posts.value;

      const post = computed(
        () => posts.find((p) => p.id === +route.params.id) || posts[0],
      );

      return {
        post,
      };
    },
  };
</script>

<style scoped></style>
