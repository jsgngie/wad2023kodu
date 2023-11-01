//Dropdown logic
const profPic = document.getElementById("dropDownBtn")
const dropdown = document.getElementById("profDropDown")
// hetkel ei tea miks ta esimesel clickil popib ja teistel
// transitionit teeb aga ma täna ei jõua enam tegeleda.

profPic.addEventListener("click", () => {
    var computed = getComputedStyle(dropdown)
    if (computed.visibility == "visible") {
        dropdown.style.visibility = "hidden"
        dropdown.style.transform = "scaleY(0)"
    } else {
        dropdown.style.transform = "scaleY(1)"
        dropdown.style.visibility = "visible"
    }
})

/**
fetch('https://api.npoint.io/21b1db5b0e48a83466da')
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
*/