from app import app, db, User
from werkzeug.security import generate_password_hash

# Sample users data
sample_users = [
    {"username": "vivek", "password": "vivek123"},
    {"username": "rahul", "password": "rahul123"},
    {"username": "aman", "password": "aman123"},
    {"username": "mohit", "password": "mohit123"}
]

def create_sample_users():
    with app.app_context():
        # Create tables if they don't exist
        db.create_all()
        
        # Add sample users
        for user_data in sample_users:
            # Check if user already exists
            existing_user = User.query.filter_by(username=user_data["username"]).first()
            if not existing_user:
                user = User(
                    username=user_data["username"],
                    password_hash=generate_password_hash(user_data["password"])
                )
                db.session.add(user)
        
        # Commit the changes
        db.session.commit()
        print("Sample users created successfully!")
        print("\nSample Users Credentials:")
        for user in sample_users:
            print(f"Username: {user['username']}, Password: {user['password']}")

if __name__ == "__main__":
    create_sample_users()
