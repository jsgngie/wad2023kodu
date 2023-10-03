function areFieldsEmpty() {
    loginName = document.getElementById('loginName').value 
    loginPassword = document.getElementById('loginPassword').value
    if (loginName.length == 0 || loginPassword.length == 0) {
        document.getElementById('errorMessage').style.visibility = 'visible'
    }
}