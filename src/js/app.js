import "../scss/app.scss";

let a = document.querySelector("body");

let articleOne = document.createElement("article");
articleOne.classList.add("message");
articleOne.textContent = "hi";

let articleTwo = document.createElement("article");
articleTwo.classList.add("message");
articleTwo.textContent = "hi";

let articleThree = document.createElement("article");
articleThree.classList.add("message");
articleThree.textContent = "hi";

let articleFour = document.createElement("article");
articleFour.classList.add("message");
articleFour.textContent = "hi";

let articleFive = document.createElement("article");
articleFive.classList.add("message");
articleFive.textContent = "bb";

a.addEventListener("click", () => {
  
  a.appendChild(articleOne);
  a.appendChild(articleTwo);
  a.appendChild(articleThree);
  a.appendChild(articleFour);
  a.appendChild(articleFive);
})

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  const button = document.querySelector(".button");
  button.addEventListener("click", (event) => {
    event.preventDefault();

    alert("💣");
  });
});

