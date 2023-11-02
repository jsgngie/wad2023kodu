//see kõik on vaja loopi panna et ta teeks kõik elemendid,
// kontrolliks kas on img 
// jne 

/*
// creating new posts.
const posts = document.getElementById('postsBox')
//new post
const newPost = document.createElement('div')
newPost.className = 'firstPost'
//post header
const postHeader = document.createElement('div')
postHeader.className = 'postHeader'
//header image
const postImg = document.createElement('img')
postImg.className = 'postProfileImg'
postImg.src = 'img\\d01fc02d91b442b9506900f879d4eeec.png'
//header date
const postDate = document.createElement('p')
const dateNode = document.createTextNode("Sept 8, 2023")
postDate.append(dateNode)
postDate.id = 'postDate'
//post body
const postBodyImg = document.createElement('img')
postBodyImg.id = 'firstPostImg'
postBodyImg.src = 'img\\banaan.jpg'
//post footer
const postFooter = document.createElement('div')
postFooter.className = 'postFooter'
const postText = document.createElement('p')
postText.id = 'postText'
const pTextNode = document.createTextNode('This is what a banana looks like')
postText.append(pTextNode)
const likeButton = document.createElement('img')
likeButton.id = 'likeButton'
likeButton.src = 'img\\heart.png'

postFooter.append(postText)
postFooter.append(likeButton)
//append all elements
postHeader.append(postImg)
postHeader.append(postDate)
newPost.append(postHeader)
newPost.append(postBodyImg)
newPost.append(postFooter)

posts.append(newPost)
*/

//Dropdown logic
const profPic = document.getElementById("dropDownBtn")
const dropdown = document.getElementById("profDropDown")
const dropdownText = document.getElementById("dropDownText")
// hetkel ei tea miks ta esimesel clickil popib ja teistel
// transitionit teeb aga ma täna ei jõua enam tegeleda.

profPic.addEventListener("click", () => {
    var computed = getComputedStyle(dropdown)
    if (computed.visibility == "visible") {
        dropdown.style.visibility = "hidden"
        dropdown.style.transform = "scaleY(0)"
        dropdownText.style.transform = "scale(0.2)"

    } else {
        dropdown.style.transform = "scaleY(1)"
        dropdown.style.visibility = "visible"
        dropdownText.style.transform = "scale(1)"
    }
})



fetch('https://api.npoint.io/21b1db5b0e48a83466da') 
  .then((response) => response.json())
  .then((data) => {
    const posts = data.posts; // Array of post objects

    // Loop through the post objects and create HTML elements for each post
    for (const post of posts) {
      //(code to create post elements)
      const postElement = document.createElement('div');
      postElement.className = 'post';

      // Create HTML structure for the post content
      postElement.innerHTML = `
        <img src="${post.profilePicName}" class="postProfileImg">
        <p id="postDate">${post.date}</p>
        <img src="${post.picName}" id="firstPostImg">
        <div class="postFooter">
            <p id="postText">${post.text}</p>
            <img id="likeButton" src="img/heart.png">
        </div>
  `;

    // Append the post to the #postsBox element
    postsBox.appendChild(postElement);;
    }
  })
  .catch((error) => console.error('Error fetching data:', error));




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


