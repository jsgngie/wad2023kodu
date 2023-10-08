
// fetch('https://api.npoint.io/21b1db5b0e48a83466da')
fetch('things.json') // NB! things.json needs to be on a local server for this to work
    .then((response) => response.json())
    .then(json => {

        let posts = document.querySelector('#posts');
        let out = '';

        for (let post of json.posts) {

            if (post.picName != null) {
                out += `
                    <br>
                    <br>
                
                    <div class="post">
                        <small>` + post.author + `</small>
                        <br>
                        <br>
                        <img src="` + post.profilePicName + `" width="40" height="40" alt="user">
                        <br>
                        <br>
                        <p>` + post.text + `</p>
                        <img src="` + post.picName + `">
                        <br>
                        <br>
                        <small>` + post.date + `</small>
                    </div>
                `;
            } else {
                out += `
                    <br>
                    <br>
                
                    <div class="post">
                        <small>` + post.author + `</small>
                        <br>
                        <br>
                        <img src="` + post.profilePicName + `" width="40" height="40" alt="user">
                        <br>
                        <br>
                        <p>` + post.text + `</p>
                        <br>
                        <small>` + post.date + `</small>
                    </div>
                `;
            }

        }

        posts.innerHTML = out;
})

// for some reason the HTML files do not call the function
// they don't give an error message either
function userInfo() { 
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (event.target.matches('.dropimg')) {
        var dropdowns = document.getElementsByClassName("user-info");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}  