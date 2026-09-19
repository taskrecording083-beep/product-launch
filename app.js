const button = document.getElementById("checkButton");
const status = document.getElementById("status");

button.addEventListener("click", () => {
  status.textContent = "Launch checklist is ready for review.";
});

console.log("Launch dashboard loaded")