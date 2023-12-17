<template>
  <div class="form">
    <h2>Login</h2>
    <b><label for="email">Email</label></b>
    <input type="email" name="email"  required v-model="email">
    <b><label for="password">Password</label></b>
    <input type="password" name="password" required v-model="password">
    <div class="container">
      <button @click="LogIn"  class="center">LogIn</button>
      <button @click='this.$router.push("/signup")' class="center">Signup</button>
    </div>
  </div>
</template>

<script>
export default {
name: "LogIn", 

data: function() {
    return {
   email: '',
   password: '',
  }
  },
  methods: {


LogIn() {
      var data = {
        email: this.email,
        password: this.password
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          credentials: 'include', //  Don't forget to specify this if you need cookies
          body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
      console.log(data);
      //this.$router.push("/");
      location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  }, 
  }

</script>

<style>

h2 {
  font-size: 40px;
  margin-top:10px;
}

.center {
  padding:20px;
  width: 100px;
  border-radius:5px;
  background-color: #669bbc;
  border-style:none;
  margin:20px;
  font-weight:bold;
}

.center:hover {
  cursor:pointer;
  opacity: 70%;
  background-color: #780000;
  color: #fdf0d5;
}

.form {
  margin: auto auto;
  display: flex;
  flex-direction:column;
  width:300px;
  padding:15px;
  border-radius: 5px;
  background-color: #fdf0d5;
}

.form input {
  width: 200px;
  margin: auto auto 20px;
  margin-top: 5px;
  padding:5px;
  border-style:inset;
}

</style>