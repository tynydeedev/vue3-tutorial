export const photos = {
  namespaced: true,

  state() {
    return {
      current: [],
      cache: {},
    };
  },

  mutations: {
    setPhotosForCurrentAlbum(state, { photos, albumId }) {
      state.current = photos;
      state.cache[albumId] = photos;
    },
  },

  actions: {
    async getByAlbum(ctx, albumId) {
      if (ctx.state.cache[albumId]) {
        return ctx.commit('setPhotosForCurrentAlbum', {
          photos: ctx.state.cache[albumId],
          albumId,
        });
      }

      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`,
      );
      const json = await res.json();

      ctx.commit('setPhotosForCurrentAlbum', { photos: json, albumId });
    },
  },
};
