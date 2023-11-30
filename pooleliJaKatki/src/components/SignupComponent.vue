<template>
    <div>
        <div class="center general-background height-200">
        <form id="signupForm" class="center">
            <div class="form_div">
                <label class="signup_form_label" for="email">E-mail</label>
                <input id="email" type="email" />   
            </div>
            <div class="form_div">
                <label class="signup_form_label" for="password">Password</label>
                <input id="password" type="password"
       title="Must meet the requirements" required>
            </div>
            <div class="center-signup">
              <input type="submit" value="Signup">
            </div>
        </form>
        <div id="passwordRequirements" style="color: red; display: none;"></div>
      </div>
    </div>
  </template>
  
  <script>


  export default {
    name: 'SignupComponent',
  }
  </script>
  
  <style scoped>
.center {
    margin: auto;
    width: 300px;
    padding: 10px;
}

.center-signup {
  margin: auto;
  width: 100%;
  padding: 10px;
}

.general-background {
    margin-top: 25px;
    margin-bottom: 25px;
    display: flex;
    background-color: gainsboro;
    padding: 10px;
    border-radius: 25px 25px 25px 25px;
    align-items: center;
    flex-direction: row;
    border-style: groove;
    border-color: white;
    justify-content: flex-start;
}

.height-200 {
    height: 200px;
}

.signup_form_label {
    display: inline-block;
    width: 50px;
    text-align: right;
    padding-right: 20px;
}

.form_div {
    padding-bottom: 10px;
}

form input {
    display: inline-block;
}

input[type="email"], input[type="password"], input[type="submit"]{
    padding: 10px;
    border-radius: 20px;
    width: 50%;
}
input[type="submit"]{
  width: 100%;
}

</style>
  