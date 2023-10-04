document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginFields");
    const inputName = form.querySelector("input[name='loginName']");
    const inputPass = form.querySelector("input[name='loginPassword']");
    form.addEventListener("input", function (event) {
        // Check if the event target is the input field
        if (event.target === inputName || event.target === inputPass) {
            if (inputName.value.length > 0 && inputPass.value.length > 0) {
                document.getElementById("submit").disabled=false;
            } else {
                document.getElementById("submit").disabled=true;
            }
        }
      });
})

function rememberIt() {
    document.getElementById("loginBox").style.height="420px"
    document.getElementById("toolTip").style.visibility="visible"
}