document.addEventListener('DOMContentLoaded', () => {
    const socket = io({
        transports: ['polling'], // Force long polling
        timeout: 60000, // Increase timeout
        upgrade: false // Disable upgrade to WebSocket
    });
    let selectedUserId = null;
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const messagesDiv = document.getElementById('messages');
    const userItems = document.querySelectorAll('.user-item');
    const toggleUsers = document.getElementById('toggleUsers');
    const usersList = document.getElementById('usersList');
    const searchUsers = document.getElementById('searchUsers');

    // Toggle users list
    toggleUsers.addEventListener('click', () => {
        toggleUsers.classList.toggle('collapsed');
        usersList.classList.toggle('collapsed');
    });

    // Search functionality
    searchUsers.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        userItems.forEach(userItem => {
            const userName = userItem.querySelector('.user-name').textContent.toLowerCase();
            if (userName.includes(searchTerm)) {
                userItem.style.display = 'flex';
            } else {
                userItem.style.display = 'none';
            }
        });
    });

    socket.on('connect', () => {
        socket.emit('join');
    });

    socket.on('receive_message', (data) => {
        if (selectedUserId !== null) {
            appendMessage(data.message, data.sender_id === selectedUserId ? 'received' : 'sent', data.timestamp);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }
    });

    userItems.forEach(userItem => {
        userItem.addEventListener('click', async () => {
            selectedUserId = userItem.dataset.userId;
            
            // Update active state
            userItems.forEach(item => item.classList.remove('active'));
            userItem.classList.add('active');

            // Enable input and button
            messageInput.disabled = false;
            sendButton.disabled = false;

            // Clear messages
            messagesDiv.innerHTML = '';

            // Load previous messages
            const response = await fetch(`/get_messages/${selectedUserId}`);
            const messagesHtml = await response.text();
            messagesDiv.innerHTML = messagesHtml;
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        });
    });

    function appendMessage(content, type, timestamp) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        messageDiv.innerHTML = `
            <div class="message-content">${content}</div>
            <div class="message-timestamp">${timestamp}</div>
        `;
        messagesDiv.appendChild(messageDiv);
    }

    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    function sendMessage() {
        const message = messageInput.value.trim();
        if (message && selectedUserId) {
            socket.emit('send_message', {
                message: message,
                receiver_id: parseInt(selectedUserId)
            });
            messageInput.value = '';
        }
    }
});
