<template>
    <header>
      <!-- Lisa siia oma headeri sisu -->
      <h1>Header component</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/signup">Signup</router-link>
      </nav>
      <!-- lisada veel muid elemente -->
    </header>
  </template>
  
  <script>
  export default {
    // Lisa komponendi loogika
  }
  </script>
  
  <style scoped>
  /* stiilid, mis kehtivad ainult sellele komponendile */
  header {
    background-color: #333;
    color: white;
    padding: 1rem;
    text-align: center;
  }
  
  nav {
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
  }
  
  nav a {
    color: white;
    text-decoration: none;
  }
  </style>
  
  
