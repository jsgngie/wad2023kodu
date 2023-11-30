<template>
    <div class="single-post">
      <div class="author">
        <img :src="post.profilePicName" alt="Profile Picture"/>
        <span>{{ post.author }}</span>
      </div>
      <img v-if="post.picName" :src="post.picName" alt="Post Image" />
      <div class="post-content">
        <p>{{ post.text }}</p>
        <span id="count">{{ counter }}</span>
        <img @click="incrementCounter" src="../assets/images/heart.png" id="likeButton"/>
      </div>
      <p class="date">{{ post.date }}</p>
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
    data() {
      return {
        counter: 0,
      }
    },
    methods: {
      incrementCounter() {
        this.counter++;
      },
    },
  };
  </script>
  
  <style scoped>
  .single-post > img {
    max-width: 300px;
    max-height: 300px;
  }
  
  .author {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  
  .author img {
    width: 40px;
    height: 40px;

    border-radius: 50%;
    margin-right: 10px;
    padding: 10px;
  }
  
  .post-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  
  .date {
    color: gray;
    font-size: 0.8em;
  }

  #likeButton {
    width:50px;
    height:50px;
    border-radius: 50px;
    border-style: groove;
    border-color: white;
  }

  #likeButton:hover {
    opacity: 80%;
    cursor:pointer;
  }

  #count {
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: 20px;

    font-size: 20px;
  }
  </style>
  