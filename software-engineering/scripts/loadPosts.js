const postFiles = ["se_post1.html", "se_post2.html"];

const container = document.getElementById("blog-container");

// Convert the logic into a function that returns a promise
const fetchPost = (postFile) => {
  return fetch(`posts/${postFile}`)
    .then((response) => response.text())
    .then((content) => {
      const postElement = document.createElement("div");
      postElement.className = "blog-post";
      postElement.innerHTML = content;
      return postElement;
    });
};

// Create an array of promises
const postPromises = postFiles.map(fetchPost);

// Wait for all promises to complete
Promise.all(postPromises).then((posts) => {
  posts.reverse().forEach((post) => {
    container.appendChild(post);
  });
});
