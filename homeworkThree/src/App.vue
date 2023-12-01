<template>
  <div>
    <HeaderComponent/>
    <router-view />
    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
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
  font-family: "customFont";
  background-color: lavender;
}

</style>


