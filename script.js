document.querySelectorAll(".dropdown-button").forEach((button) => {
  button.addEventListener("click", (event) => {
    const content = event.target.nextElementSibling;
    content.classList.toggle("show");
    if (content.classList.contains("button")) {
      content.style.position = "absolute";
    } else {
      content.style.position = "static";
    }
  });
});
