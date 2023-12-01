<template>
    <div class="single-post">
      <div class="author">
        <img :src="post.profilePicName" alt="Profile Picture"/>
        <span id="postAuthor">{{ post.author }}</span>
      </div>
      <img v-if="post.picName" :src="post.picName" alt="Post Image" class="postImage"/>
      <div class="post-content">
        <p id="postText">{{ post.text }}</p>
        <span id="count">{{ counter }}</span>
        <img @click="incrementCounter" src="../../public/assets/images/heart.png" id="likeButton"/>
      </div>
      <p class="date">{{ post.date }}</p>
      <div class="divider"/>
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
      zeroCounter() {
        this.counter = 0;
      },
    },
  };

  </script>
  
  <style scoped>

  .single-post {
    display:flex;
    flex-direction: column;
    justify-content: center;
  }

  .postImage {
    
    max-width: 300px;
    max-height: 300px;
    
    width:100%;

    margin-left: auto;
    margin-right:auto;
    margin-bottom: 20px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  #postText {
    margin-left:10px;
  }

  #postAuthor {
    margin-right:10px;
  }
  
  .author {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
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
    margin-bottom: 10px;
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
    border-color: black;
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

  .divider {
    width:inherit;
    background-color:grey;

    height:1px;
    border-radius: 1px;
  }
  </style>
  