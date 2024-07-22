
FoodDelight:

FoodDelight is a full-featured restaurant web application built using the MERN stack (MongoDB, Express.js, React, Node.js). This application allows users to explore menus, make reservations, place orders, and manage their profiles. It also provides restaurant administrators with tools to manage menus, orders, reservations, and customer interactions.

Installation
Clone the repository:

sh
Copy code
git clone https://github.com/Tejws/FoodDelight.git
cd FoodDelight
Install server dependencies:

sh
Copy code
cd backend
npm install
Install client dependencies:

sh
Copy code
cd ../frontend
npm install
Set up environment variables:

Create a .env file in the backend directory.
Add the following environment variables:
env
Copy code
MONGO_URI=your_mongo_database_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key

Table of Contents
Features
Technology Stack
Installation
Usage
Screenshots
Contributing
License
Features
User Features
Home Page: Welcoming landing page with featured dishes and special offers.
Menu: Detailed menu section with categories, item descriptions, prices, and images.
Reservations: Easy-to-use reservation system with confirmation emails.
Order Online: Online ordering system for takeout and delivery with smooth checkout.
User Profile: Manage order history, reservations, and personal information.



Admin Features:

Dashboard: Overview of daily operations including orders, reservations, and feedback.
Menu Management: CRUD operations for menu items.
Order Management: Real-time order tracking and status updates.


Technology Stack:

Frontend:
React.js

Backend:
Node.js,
Express.js,

Database:
MongoDB

Additional Tools:
Mongoose,
JWT for authentication,
Socket.io for real-time communication
