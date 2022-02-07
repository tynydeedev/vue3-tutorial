<template>
  <layout>
    <template v-slot:header>
      <h1>{{ currentAlbum.title }}</h1>
    </template>
    <template v-slot:sidebar>
      <album v-for="album in albums" :key="album.id" :album="album" />
    </template>
    <template v-slot:content>
      <router-view />
    </template>
  </layout>
</template>

<script>
  import { computed, onMounted } from 'vue';
  import Layout from './Layout.vue';
  import Album from './Album.vue';
  import { useStore } from 'vuex';

  export default {
    components: {
      Layout,
      Album,
    },

    setup() {
      const store = useStore();

      onMounted(() => {
        store.dispatch('albums/fetch');
      });

      const albums = computed(() => {
        return store.state.albums.all;
      });

      const currentAlbum = computed(() => {
        return store.state.albums.current;
      });

      return {
        albums,
        currentAlbum,
      };
    },
  };
</script>

<style>
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }
</style>
