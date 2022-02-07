import { reactive } from 'vue';
import { testPosts } from './testPosts';

class Store {
  constructor() {
    this.state = reactive({
      posts: testPosts,
      currentTag: '',
    });
  }

  setHashtag(tag) {
    this.state.currentTag = tag;
  }

  like(post) {
    post.likes++;
  }

  get filteredPosts() {
    if (!this.state.currentTag) return this.state.posts;

    return this.state.posts.filter((post) =>
      post.hashtags.some((hashtag) => hashtag.includes(this.state.currentTag)),
    );
  }
}

export const store = new Store();
