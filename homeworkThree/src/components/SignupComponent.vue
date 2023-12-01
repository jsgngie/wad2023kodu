<template>
    <div>
      <div class="signup-container">
        <div class="signup-content">
          <div class="center general-background">
            <div style="display: block;">
              <form id="signupForm" class="center">
                  <div class="form_div">
                      <label class="signup_form_label" for="email">E-mail</label>
                      <input id="email" type="email" required/>   
                  </div>
                  <div class="form_div">
                      <label class="signup_form_label" for="password">Password</label>
                      <input id="password" type="password" title="Must meet the requirements" required />
                  </div>
                  <div class="center-signup">
                    <input type="submit" value="Signup">
                  </div>
              </form>
            </div>
          <div id="passwordRequirements" style="color: red; display: none;"></div>
      </div>
    </div>
     </div>
    </div>
  </template>
  
  <script>
export default {
  name: 'SignupComponent',
  methods: {
    signup() {
      const passwordRequirements = document.getElementById('passwordRequirements');
      var password = document.getElementById('password').value
      const lengthCondition = password.length >= 8 && password.length < 15;
      const uppercaseCondition = /[A-Z]/.test(password);
      const lowercaseCondition = /[a-z].*[a-z]/.test(password);
      const numericCondition = /\d/.test(password);
      const startUppercaseCondition = /^[A-Z]/.test(password);
      const underscoreCondition = /_/.test(password);

      if (lengthCondition && uppercaseCondition && lowercaseCondition && numericCondition && startUppercaseCondition && underscoreCondition) {
        passwordRequirements.style.display = 'none';
        alert('Signup successful!');
      } else {
        passwordRequirements.style.display = 'block';
        passwordRequirements.innerHTML =
          'Password is not valid. Please follow these conditions: ' +
          '<ul>' +
          '<li>At least 8 characters and less than 15 characters</li>' +
          '<li>At least one uppercase alphabet character</li>' +
          '<li>At least two lowercase alphabet characters</li>' +
          '<li>At least one numeric value</li>' +
          '<li>Should start with an uppercase alphabet</li>' +
          '<li>Should include the character “_”</li>' +
          '</ul>';
      }
    },
  },
  mounted() {
    document.getElementById('signupForm').addEventListener('submit', (event) => {
      this.signup();
      event.preventDefault();
    });
  },
};
  </script>
  
<style scoped>
.signup-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.signup-content {
  flex: 1; /* See tagab, et sisu venib lehe kõrgusele */
}


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
    background-color: gainsboro;
    padding: 10px;
    border-radius: 25px 25px 25px 25px;
    align-items: center;
    flex-direction: row;
    border-style: groove;
    border-color: black;
    justify-content: flex-start;
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
  width: 90%;
}

</style>
  