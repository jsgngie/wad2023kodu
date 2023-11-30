<template>
    <div class="posts">
      <SinglePostComponent v-for="(post, index) in posts" :key="index" :post="post" />
    </div>
    <resetComponent/>
  </template>
  
  <script>
  import SinglePostComponent from '../components/SinglePostComponent.vue'
  import things from '../../public/things.json'
  import resetComponent from '../components/resetLikesComponent.vue'
  
  export default {
    name: 'PostsComponent',
    components: {
      SinglePostComponent,
      resetComponent,
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
    background-color: gainsboro;
    width: fit-content;
    max-width:30%;
    
    padding:25px;
    margin: 50px auto;

    border-radius: 25px;
    border-style: groove;
    border-color: white;
  }
  </style>
  