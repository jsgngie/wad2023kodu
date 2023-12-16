<template>
    <div class="post">
      <h3>Title: {{ postData.title }}</h3>
      <p style="display: inline-block;"><b>Body:</b> {{ postData.body }}</p>
      <input id="body" type="text" />
      <br>
      <button @click="updatePost">Update</button>
      <button @click="deletePost">Delete</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      post: Object,
    },
    data() {
      return {
        postData: this.post,
      };
    },
    methods: {
                updatePost() {
        const updatedBody = document.getElementById("body").value;

        fetch(`http://localhost:3000/api/posts/${this.postData.id}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            title: new Date().toLocaleString(),
            body: updatedBody,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
            console.log(data);
            this.postData = data;
            this.$router.push("/");
            })
            .catch((error) => console.error(error));
        },

        deletePost() {
            const postId = this.postData.id;
            fetch(`http://localhost:3000/api/posts/${postId}`, {
                method: "DELETE",
            })
        .then((response) => {
        if (response.ok) {
            console.log(`Post with ID ${postId} deleted successfully.`);
            this.$router.push("/");
        } else {
            console.error(`Failed to delete post with ID ${postId}.`);
        }
        })
        .catch((error) => {
        console.error("Error deleting post:", error);
        });
    },

    },
    created() {
      const apiUrl = `http://localhost:3000/api/posts/${this.$route.params.id}`;
  
      fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.postData = data;
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
        });
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