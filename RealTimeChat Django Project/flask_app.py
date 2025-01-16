import sys
import os

# Add your project directory to the sys.path
path = '/home/Mikey007/RealTimeChat'
if path not in sys.path:
    sys.path.append(path)

from app import app as application
from app import db, socketio

# Initialize the database
with application.app_context():
    db.create_all()

if __name__ == '__main__':
    socketio.run(application)
