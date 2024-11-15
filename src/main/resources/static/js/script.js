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

  const response = fetch(apiUrl, {
    method: 'POST',
    body: message,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  addToChatContent(response.json().response);
}

function addToChatContent(msg) {
  let chatContent = document.createElement('p');
  chatContent.classList.add('message');
  chatContent.textContent = msg;
  outputElement.appendChild(chatContent);
}