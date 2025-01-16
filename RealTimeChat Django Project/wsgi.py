import sys
import os

# Add your project directory to the sys.path
path = '/home/Mikey007/RealTimeChat'
if path not in sys.path:
    sys.path.append(path)

from app import app as application

# Initialize the database
from app import db
with application.app_context():
    db.create_all()
