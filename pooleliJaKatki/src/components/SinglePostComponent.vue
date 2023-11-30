<template>
    <div class="single-post">
      <div class="author">
        <img :src="post.profilePicName" alt="Profile Picture" />
        <span>{{ post.author }}</span>
      </div>
      <div class="post-content">
        <p>{{ post.text }}</p>
        <img v-if="post.picName" :src="post.picName" alt="Post Image" />
        <p class="date">{{ post.date }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SinglePostComponent',
    props: {
      post: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .single-post {
    
  }
  
  .author {
    display: flex;
    align-items: center;
  }
  
  .author img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .post-content {
    
  }
  
  .date {
    color: gray;
    font-size: 0.8em;
  }
  </style>
  