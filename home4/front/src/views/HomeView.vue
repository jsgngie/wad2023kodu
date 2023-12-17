<template>
  <div class="header">
    <div class="container">
    <button v-if = "authResult" @click="Logout" class="center">Logout</button>
    </div>
    <div class="post-list">
      <router-link v-for="post in posts" :to="{ name: 'PostView', params: { id: post.id } }" :key="post.id">
      <div class="post">
        <p>{{ post.title }}</p>
        <p>{{ post.body }}</p>
       </div>
      </router-link>

      <div class="container">
      <router-link to="/add-post" class="center" id="annoyingButton">Add Post</router-link>
      <button @click="deleteAll" class="center">Delete Posts</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import auth from "../auth";
import PostView from "./PostView.vue"

export default {
  name: "HomeView",
  components: {
    PostView,
  },
   data: function() {
    return {
    posts:[ ],
    authResult: auth.authenticated()
    }
  },
  methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
    deleteAll() {
      fetch(`http://localhost:3000/api/deleteall`, {
          method: "DELETE",
        })
        .then((response) => {
          if (response.ok) {
            console.log("All posts deleted successfully.");
            this.posts = [];
          } else {
            console.error("Failed to delete all posts. Status:", response.status);
          }
      })
    .catch((error) => console.error("Error deleting all posts:", error));
    },
  }, 


  mounted() {
  fetch('http://localhost:3000/api/posts', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      this.posts = data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
};
</script>

<style>

.post-list a {
  text-decoration: none;
  color: inherit;
}

.post {
  background-color: #fdf0d5;
  margin: auto auto 20px;
  width: 400px;
  border-radius:5px;
  text-decoration: none;
}

:visited {
  color:inherit;
}

.post p {
  padding: 20px;
  color: black;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
}

.router-link-active {
  text-decoration: none;
}

.container {
  display:flex;
  justify-content: center;
}

.center {
  font-family: "customFont";
  justify-content: center;
}
</style>