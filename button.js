const button = document.getElementById("btn");
const title = document.getElementById("title");

button.addEventListener("click", () => {
  title.classList.toggle("active");
  button.classList.toggle("clicked");
});
