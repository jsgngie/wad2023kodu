<template>
    <div class="post">
      <h2>{{ title }}</h2>
      <p>{{ content }}</p>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'PostComponent',
    props: {
      title: String,
      content: String
    }
  };
  </script>
  
  <style scoped>
  .post {
    /* Your styles here */
  }
  </style>
  