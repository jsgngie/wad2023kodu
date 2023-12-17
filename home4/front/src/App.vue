<template>
  <nav>
    <router-link to="/">Home</router-link> |
<!--     <router-link to="/signup">SignUp</router-link> | -->
<!--     <router-link to="/login">LogIn</router-link> | -->
    <router-link to="/contacts">Contacts</router-link>
  </nav>
  <div class="mainContainer">
    <sideBar />
    <router-view />
    <sideBar />
  </div>
  <FooterComponent class="footer"/>
</template>


<script>
import FooterComponent from './views/FooterComponent.vue';
import sideBar from './views/sideBar.vue';

export default {
  name: 'App',
  components: {
    FooterComponent,
    sideBar
}
}


</script>

<style>

@font-face {
  font-family: "customFont";
  src: url(./assets/fonts/Jost-Regular.woff);
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "customFont";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  text-decoration: none;
}

body {
  background-color: #003049;
}

nav {
  padding: 30px;
  font-size: 30px;
  color: #fdf0d5;
}

nav a {
  font-weight: bolder;
  color: #fdf0d5;
  text-decoration: none;
}

nav a:hover {
  opacity: 50%;
  
}

.footer {
  margin-bottom: auto;
}

.mainContainer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}


</style>
