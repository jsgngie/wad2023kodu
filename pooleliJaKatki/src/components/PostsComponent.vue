<template>
    <div class="posts">
      <SinglePostComponent v-for="(post, index) in posts" :key="index" :post="post" />
    </div>
  </template>
  
  <script>
  import SinglePostComponent from '../components/SinglePostComponent.vue'
  import things from '../../public/things.json'
  
  export default {
    name: 'PostsComponent',
    components: {
      SinglePostComponent,
    },
    data() {
      return {
        posts: things.posts,
      };
    },
  };
  </script>
  
  <style scoped>
  .posts {
    /* Your styles here */
  }
  </style>
  