<template>
  <div>
    <HeaderComponent/>
    <!--<PostsComponent/>-->
    <router-view />
    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from './components/headerComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
/*import PostsComponent from './components/PostsComponent.vue';*/



export default {
  name: 'App',
  components: {
    HeaderComponent,
    /*PostsComponent,*/
    FooterComponent
  }
}
</script>

<style>
@font-face {
  font-family: "customFont";
  src: url(./assets/fonts/Jost-Regular.woff);
}

body {
  background-image: url("./assets/images/blur.jpg");
  background-size: auto;
  background-repeat: no-repeat;
  font-family: "customFont";
}
</style>


