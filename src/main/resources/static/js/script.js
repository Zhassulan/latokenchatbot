const apiUrl = 'localhost:8080/api/v1/chat';
const messageElement = document.getElementById('message');
const outputElement = document.getElementById('messageArea');

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

addToChatContent(msg) {
  let chatContent = document.createElement('p');
  chatContent.classList.add('message');
  chatContent.textContent = msg;
  outputElement.appendChild(chatContent);
}