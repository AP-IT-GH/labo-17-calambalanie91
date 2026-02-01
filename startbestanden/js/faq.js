const buttonElements = document.querySelectorAll(".collapsible");
for (let index = 0; index < buttonElements.length; index++) {
  const element = buttonElements[index];
  element.addEventListener("click", () => {
    const sibling = element.nextElementSibling;
    sibling.classList.toggle("hidden");
  });
}
