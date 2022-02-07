<template>
  <img v-for="photo in photos" :key="photo.id" :src="photo.thumbnailUrl" />
</template>

<script>
  import { computed, watchEffect } from 'vue';
  import { useStore } from 'vuex';
  import { useRoute } from 'vue-router';

  export default {
    setup() {
      const store = useStore();
      const route = useRoute();

      watchEffect(() => {
        const id = route.params.id;
        store.dispatch('photos/getByAlbum', id);
        store.dispatch('albums/getCurrentAlbum', id);
      });

      const photos = computed(() => {
        return store.state.photos.current;
      });

      return {
        photos,
      };
    },
  };
</script>

<style></style>
