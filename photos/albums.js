export const albums = {
  namespaced: true,

  state() {
    return {
      all: [],
      current: {},
    };
  },

  mutations: {
    setAlbums(state, albums) {
      state.all = albums;
    },

    setCurrentAlbum(state, album) {
      state.current = album;
    },
  },

  actions: {
    async fetch(ctx) {
      const res = await fetch('https://jsonplaceholder.typicode.com/albums');
      const json = await res.json();

      ctx.commit('setAlbums', json);
    },

    getCurrentAlbum(ctx, albumId) {
      const album = ctx.state.all.find((a) => {
        return a.id === +albumId;
      });

      if (!album) return;

      ctx.commit('setCurrentAlbum', album);
    },
  },
};
