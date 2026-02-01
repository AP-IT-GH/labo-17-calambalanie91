const form = document.querySelector("#contactform");
const messageList = document.querySelector("#messages");
form.addEventListener("submit", (e) => {
  // stop de default submissie van je form
  e.preventDefault();
  checkFormIfEmpty(form.name);
  checkFormIfEmpty(form.email);
  checkFormIfEmpty(form.message);
});

function checkFormIfEmpty(input) {
  if (input.value === "") {
    const li = document.createElement("li");
    li.textContent = `The ${input.name} field is empty! Please fill in a value.`;
    messageList.appendChild(li);
  }
}
