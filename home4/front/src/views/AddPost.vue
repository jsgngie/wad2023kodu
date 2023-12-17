<!-- AddPost.vue -->

<template>
    <div class="add-post">
      <h2>Add New Post</h2>
      <label for="body"></label>
      <textarea id="body" v-model="newPost.body"></textarea>
      <button @click="addPost" class="center" id="but">Add Post</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newPost: {
          body: '',
        },
      };
    },
    methods: {
      addPost() {
        fetch('http://localhost:3000/api/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: new Date().toLocaleString(),
            body: this.newPost.body,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Post added successfully:', data);
            this.$router.push('/');
          })
          .catch((error) => console.error('Error adding post:', error));
      },
    },
  };
  </script>
  
<style>

#body {
  max-width:400px;
  min-width:400px;
  margin: auto auto;
}

.add-post {
  display:flex;
  flex-direction: column;
  width:400px;
  margin:auto auto;
  background-color: #fdf0d5;
  padding:30px;
  border-radius:5px;
}

.center {
  margin-top:30px;
}

#but {
  margin:auto auto;
  margin-top: 30px;
}
</style>