# Real-Time Chat Application

A modern, real-time chat application built with Flask, SQLAlchemy, and WebSocket. Features a clean, responsive UI with user authentication and instant messaging capabilities.

pythonanywhere link =  https://mikey007.pythonanywhere.com/login

## Features

- **User Authentication**
  - Secure signup and login
  - Password hashing for security
  - Session management

- **Real-Time Messaging**
  - Instant message delivery using WebSocket
  - Message history
  - Read receipts
  - Online status indicators

- **Modern UI/UX**
  - Clean and responsive design
  - Collapsible user list
  - User search functionality
  - Message timestamps
  - User avatars
  - Smooth animations and transitions

## Technology Stack

- **Backend**
  - Python 3.x
  - Flask 2.3.3
  - Flask-SQLAlchemy 3.1.1
  - Flask-Login 0.6.2
  - Flask-SocketIO 5.3.6
  - SQLite Database

- **Frontend**
  - HTML5
  - CSS3
  - JavaScript
  - Font Awesome Icons
  - Google Fonts (Poppins, Quicksand)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install required packages:
   ```bash
   pip install -r requirements.txt
   ```

3. Create sample users (optional):
   ```bash
   python create_sample_users.py
   ```

4. Run the application:
   ```bash
   python app.py
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

## Sample Users

The application comes with pre-configured sample users for testing:

1. **Vivek**
   - Username: vivek
   - Password: vivek123

2. **Rahul**
   - Username: rahul
   - Password: rahul123

3. **Aman**
   - Username: aman
   - Password: aman123

4. **Mohit**
   - Username: mohit
   - Password: mohit123

## Project Structure

```
chat-application/
│
├── app.py                 # Main application file
├── requirements.txt       # Python dependencies
├── create_sample_users.py # Script to create sample users
│
├── static/
│   ├── css/
│   │   └── style.css     # Application styles
│   └── js/
│       └── chat.js       # Frontend JavaScript
│
└── templates/
    ├── base.html         # Base template
    ├── index.html        # Main chat interface
    ├── login.html        # Login page
    ├── signup.html       # Signup page
    └── messages.html     # Message template
```

## Features in Detail

### User Authentication
- Secure password hashing using Werkzeug
- Protected routes using Flask-Login
- Remember me functionality
- Logout capability

### Real-Time Chat
- WebSocket connection for instant messaging
- Message persistence in SQLite database
- Chat history loading
- User online status

### User Interface
- Responsive sidebar with user list
- Collapsible user menu
- Real-time user search
- Modern messaging interface
- Clean and intuitive design

#
## Acknowledgments

- Flask and its extensions developers
- Font Awesome for icons
- Google Fonts for typography
