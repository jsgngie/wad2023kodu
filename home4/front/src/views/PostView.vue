<template>
    <div class="post">
      <h3>Title: {{ postData.title }}</h3>
      <p style="display: inline-block;"><b>Body:</b> {{ postData.body }}</p>
      <textarea id="bodyArea" type="text" />
      <br>
      <div class="updateButtons">
      <button @click="updatePost" class="center">Update</button>
      <button @click="deletePost" class="center">Delete</button>
      </div>
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
        const updatedBody = document.getElementById("bodyArea").value;

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
  
.post {
  display:flex;
  flex-direction: column;
  justify-content: center;
  
}

#bodyArea {
  max-width:360px;
  min-width:360px;
  margin: auto auto;
}

</style>