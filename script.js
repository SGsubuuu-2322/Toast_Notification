const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "message-One",
  "message-Two",
  "message-Three",
  "message-Four",
];

button.addEventListener("click", () => createNotifications());

function createNotifications() {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.innerText = getRandomMessage();
  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
