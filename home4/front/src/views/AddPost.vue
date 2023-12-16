<!-- AddPost.vue -->

<template>
    <div class="add-post">
      <h2>Add New Post</h2>
      <label for="body">Body:</label>
      <textarea id="body" v-model="newPost.body"></textarea>
      <button @click="addPost">Add Post</button>
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
  
  <style scoped>
  body{
  margin: 20px 40px;
  font-size: 1.2rem;
  letter-spacing: 1px;
  background: #fafafa;
  position: relative;
}
.post-list{
  background: rgb(189, 212, 199);
  margin-bottom: 5px;
  padding: 3px 5px;
  border-radius: 10px;
}
h3{
    margin: 0;
  padding: 0;
  font-family: 'Quicksand', sans-serif;
  color: #444;
  background: #7e9756;
}
p{
  background: #796dbd;
}
h1, h2, h3, h4, ul, li, a, input, label, button, div, footer{
  margin: 0;
  padding: 0;
  font-family: 'Quicksand', sans-serif;
  color: #444;
}
nav{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 80px;
}
input{
  padding: 10px 12px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 1em;
  width: 100%;
}
label{
  display: block;
  margin: 20px 0 10px;
}
button{
  margin-top: 30px;
  border-radius: 36px;
  background: #FEE996;
  border:0;
  font-weight: 700;
  font-size: 0.8em;
  display: block;
  padding: 10px 16px;
  letter-spacing: 2px;
}
nav{
  display: flex;
  align-items: center;
}
.post {
    width: 80%;
    position: relative;
    padding: 10px;
    margin: 10px auto;
    border: 1px solid gray;
    text-align: left;
}
.center {
  margin: auto;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  margin: 10px auto;
  width: 30%; 
}
.container {
  display: flex;
  justify-content: center;
}
</style>