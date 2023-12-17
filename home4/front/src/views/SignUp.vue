<template>
  <div class="form">
    <h2>SignUp</h2>
    <label for="email">Email</label>
    <input type="email" name="email"  required v-model="email">
    <label for="password">Password</label>
    <input type="password" name="password" required v-model="password">
    <button @click="SignUp" class="SignUp">Sign up</button>
  </div>
</template>

<script>
export default {
name: "SignUp", 

data: function() {
    return {
   email: '',
   password: '',
  }
  },
  methods: {


SignUp() {
      var data = {
        email: this.email,
        password: this.password
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/signup", {
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
      this.$router.push("/");
      //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  }, 
  }
</script>

<style scoped>

h2 {
  font-size: 40px;
  margin-top:10px;
}

button {
  padding:20px;
  width: 100px;
  border-radius:5px;
  background-color: #669bbc;
  border-style:none;
  margin:auto auto 10px;
  font-weight:bold;
}

button:hover {
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