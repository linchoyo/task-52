import "../scss/app.scss";

let a = document.querySelector("body");

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  window.addEventListener("click", () => {
    for (let i = 0; i < 5; i++)
    {
    let article = document.createElement("article");
    article.classList.add("message");
    article.textContent = "hi";
    a.appendChild(article);
    }
  })
});
