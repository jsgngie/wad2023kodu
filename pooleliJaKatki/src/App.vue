<template>
  <div>
    <HeaderComponent/>
    <router-view />
    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from './components/headerComponent.vue';
import FooterComponent from './components/FooterComponent.vue';


export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
  }
}
</script>

<style>
@font-face {
  font-family: "customFont";
  src: url(./assets/fonts/Jost-Regular.woff);
}

body {
  background-image: url("assets/images/blur.jpg");
  background-size:cover;
  font-family: "customFont";
}

footer {

}
</style>


