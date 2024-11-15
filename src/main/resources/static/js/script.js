const apiUrl = 'localhost:8080/api/v1/chat';
const messageElement = document.getElementById('message');
const outputElement = document.getElementById('messageArea');

function sendMessage() {
  const message = new ChatMessage(messageElement.value);
  addToChatContent(message);
  const response = await fetch(apiUrl, {
    method: 'POST',
    body: message,
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const response = await response.json();
  addToChatContent(response);
}

addToChatContent(msg) {
  let chatContent = document.createElement('p');
  chatContent.classList.add('message');
  chatContent.textContent = msg;
  outputElement.appendChild(chatContent);
}