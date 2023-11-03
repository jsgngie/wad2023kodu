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

const postsBox = document.getElementById("postsBox");
//creating posts from local server.

//json validation https://jsonlint.com/

fetch('./js/things.json') 
  .then((response) => response.json())
  .then((data) => {
    const posts = data.posts;
    // Loop through the post objects and create HTML elements for each post
    for (const post of posts) {
        console.log(post)
        const postElement = document.createElement('div')
        //check if the post has a picture defined.

        if (post.picName == null) {
            //if there is no picture
            postElement.className = 'secondPost'
            postElement.innerHTML = `
            <div class="postHeader">
                <img src=${post.profilePicName} class="postProfileImg"></img>
                <p class="postDate">${post.date}</p>
            </div>
            <div class="postFooter">
                <p class="postText">${post.text}</p>
                <img src="assets\\images\\heart.png" class="likeButton"></img>
            </div>`;
        } else {
            //if there is a picture
            postElement.className = 'firstPost'
            postElement.innerHTML = `
            <div class="postHeader">
                <img src=${post.profilePicName} class="postProfileImg"></img>
                <p class="postDate">${post.date}</p>
            </div>
            <img src=${post.picName} class="firstPostImg"></img>
            <div class="postFooter">
                <p class="postText">${post.text}</p>
                <img src="assets\\images\\heart.png" class="likeButton"></img>
            </div>`;
        }
        //append the post to the posts element of html
        postsBox.appendChild(postElement)
    } 

  })
  .catch((error) => console.error('Error fetching data:', error));

// https://www.npoint.io/docs/3d7a1e51fc83d0dc414a
//fetching from endpoint
/**
fetch('https://api.npoint.io/3d7a1e51fc83d0dc414a') 
  .then((response) => response.json())
  .then((data) => {
    const posts = data.posts; // Array of post objects

    // Loop through the post objects and create HTML elements for each post
    for (const post of posts) {
      //(code to create post elements)
      const postElement = document.createElement('div');

      //check if post has photo
      if (post.picName == null) {
        //if has no photo
        postElement.className = 'secondPost'
        postElement.innerHTML = `
        <div class="postHeader">
            <img src=${post.profilePicName} class="postProfileImg"></img>
            <p class="postDate">${post.date}</p>
        </div>
        <div class="postFooter">
            <p class="postText">${post.text}</p>
            <img src="assets\\images\\heart.png" class="likeButton"></img>
        </div>`;
      } else {
        //if it has a photo
        postElement.className = 'firstPost'
        postElement.innerHTML = `
        <div class="postHeader">
            <img src=${post.profilePicName} class="postProfileImg"></img>
            <p class="postDate">${post.date}</p>
        </div>
        <img src=${post.picName} class="firstPostImg"></img>
        <div class="postFooter">
            <p class="postText">${post.text}</p>
            <img src="assets\\images\\heart.png" class="likeButton"></img>
        </div>`;
      }

    // Append the post to the #postsBox element
    postsBox.appendChild(postElement);
    }
  })
  .catch((error) => console.error('Error fetching data:', error));
*/