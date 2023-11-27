<template>
  <header>
    <div id="home" class="buttons">Home</div>
    <p id="welcome">Welcome!</p>
    <div id="signUp" class="buttons">Sign Up</div>
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
