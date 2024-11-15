const apiUrl = 'http://localhost:8080/api/v1/chat';
const messageElement = document.getElementById('message');
const outputElement = document.getElementById('messageArea');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (messageElement.value) {
        sendMessage(messageElement.value);
        messageElement.value = '';
    }
});

function sendMessage() {
    let msg = messageElement.value
    addToChatContent(msg);
    const message = new ChatMessage(messageElement.value);

  const response = fetch(apiUrl + "/send", {
    method: 'POST',
    body: JSON.stringify(message),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then((response) => response.json())
    .then((data) => {
        addToChatContent(data.response)
    })
}

function addToChatContent(msg) {
  let chatContent = document.createElement('p');
  chatContent.classList.add('message');
  chatContent.textContent = msg;
  outputElement.appendChild(chatContent);
}