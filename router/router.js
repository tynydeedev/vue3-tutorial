import { createRouter, createWebHistory } from 'vue-router';
import Hello from './Hello.vue';
import Main from './Main.vue';
import NewPost from './NewPost.vue';
import Post from './Post.vue';
import Posts from './Posts.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Main,
    },
    {
      path: '/hello',
      component: Hello,
    },
    {
      path: '/posts',
      component: Posts,
      children: [
        {
          path: ':id',
          component: Post,
        },
        {
          path: 'new',
          component: NewPost,
        },
      ],
    },
  ],
});

export { router };
