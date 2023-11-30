<template>
  <header>
    <router-link to="/" class="buttons">Home</router-link>
    <p id="welcome">Welcome!</p>
    <router-link to="/signup" class="buttons">Sign Up</router-link>
  </header>
</template>

<script>

export default {
  name: 'HeaderComponent'
}

</script>

<style scoped>
/* Your header styles here */

header {
  display:flex;
  background-color: gainsboro;
  height: 100px;
  width: device-width;
  padding: 10px;
  border-radius: 25px;
  align-items: center;
  flex-direction: row;
  border-style:groove;
  border-color: white;
  justify-content:space-between;
  position:inherit;
  
}

.buttons {
  margin:10px;
  padding:25px;
  background-color:rgb(203, 199, 199);
  border-radius: 10px;
  border-style: groove;
}

.buttons:hover {
  background-color: darkgray;
  cursor:pointer;
}

#welcome {
  font-size:40px;
}

</style>
