<template>
  <div>
    <h4>{{ post.title }}</h4>
    <p>{{ post.content }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      posts: {
        type: Array,
        default: [],
      },
    },

    computed: {
      post() {
        return (
          this.posts.find((p) => p.id === +this.$route.params.id) ||
          this.posts[0]
        );
      },
    },
  };
</script>

<style scoped></style>
