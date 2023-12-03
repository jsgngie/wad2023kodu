<template>
  <div>
    <HeaderComponent/>
    <LeftSidebar/>
    <RightSidebar/>
    <router-view />
    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import LeftSidebar from './components/LeftSidebar.vue';
import RightSidebar from './components/RightSidebar.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent,
    LeftSidebar,
    RightSidebar
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


