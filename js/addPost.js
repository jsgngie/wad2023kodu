document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("addPostForm").onsubmit = function () {
        window.location.href = "index.html";
        return false;
    };
})