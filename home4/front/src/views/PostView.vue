<template>
    <div class="post">
      <h3>Title: {{ postData.title }}</h3>
      <p><b>Body:</b> {{ postData.body }}</p>
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
        postData: this.post, // Assign the prop value to a data property
      };
    },
    methods: {
      updatePost() {
        fetch(`http://localhost:3000/api/posts/${this.postData.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: "Updated Title",
            body: "Updated Body",
          }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
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
        // Optionally, redirect to the home view or perform other actions
        this.$router.push("/"); // Redirect to the home view
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
          // You might need to include any authentication headers if required
        },
      })
        .then((response) => response.json())
        .then((data) => {
          this.postData = data; // Set the fetched post data to the component's data
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
        });
    },
  };
  </script>
  
  <style scoped>
    /* Your styles here */
  </style>
  