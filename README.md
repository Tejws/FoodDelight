<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body>
    <h1>FoodDelight</h1>
    <p><strong>FoodDelight</strong> is a full-featured restaurant web application built using the MERN stack (MongoDB, Express.js, React, Node.js). This application allows users to explore menus, make reservations, place orders, and manage their profiles. It also provides restaurant administrators with tools to manage menus, orders, reservations, and customer interactions.</p>
    
 <h2>Table of Contents</h2>
    <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#technology-stack">Technology Stack</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#screenshots">Screenshots</a></li>
        <li><a href="#contributing">Contributing</a></li>
        <li><a href="#license">License</a></li>
    </ul>
    
 <h2 id="features">Features</h2>
    <h3>User Features</h3>
    <ul>
        <li><strong>Home Page:</strong> Welcoming landing page with featured dishes and special offers.</li>
        <li><strong>Menu:</strong> Detailed menu section with categories, item descriptions, prices, and images.</li>
        <li><strong>Reservations:</strong> Easy-to-use reservation system with confirmation emails.</li>
        <li><strong>Order Online:</strong> Online ordering system for takeout and delivery with smooth checkout.</li>
        <li><strong>User Profile:</strong> Manage order history, reservations, and personal information.</li>
    </ul>
    
<h3>Admin Features</h3>
    <ul>
        <li><strong>Dashboard:</strong> Overview of daily operations including orders, reservations, and feedback.</li>
        <li><strong>Menu Management:</strong> CRUD operations for menu items.</li>
        <li><strong>Order Management:</strong> Real-time order tracking and status updates.</li>
        <li><strong>Reservation Management:</strong> Manage reservations and availability.</li>
        <li><strong>Customer Management:</strong> Access customer profiles and handle feedback.</li>
    </ul>
    
 <h2 id="technology-stack">Technology Stack</h2>
    <ul>
        <li><strong>Frontend:</strong>
            <ul>
                <li>React.js</li>
                <li>CSS</li>
            </ul>
        </li>
        <li><strong>Backend:</strong>
            <ul>
                <li>Node.js</li>
                <li>Express.js</li>
            </ul>
        </li>
        <li><strong>Database:</strong> MongoDB</li>
        <li><strong>Additional Tools:</strong>
            <ul>
                <li>Mongoose</li>
                <li>JWT for authentication</li>
                <li>Socket.io for real-time communication</li>
                <li>Stripe/PayPal for payment processing</li>
                <li>AWS S3 for image storage</li>
            </ul>
        </li>
    </ul>
    
 <h2 id="installation">Installation</h2>
    <p>Follow these steps to set up the project locally:</p>
    <ol>
        <li><strong>Clone the repository:</strong></li>
        <pre><code>git clone https://github.com/Tejws/FoodDelight.git
cd FoodDelight</code></pre>
        
 <li><strong>Install server dependencies:</strong></li>
        <pre><code>cd backend
npm install</code></pre>
        
<li><strong>Install client dependencies:</strong></li>
        <pre><code>cd ../frontend
npm install</code></pre>
        
<li><strong>Set up environment variables:</strong></li>
        <p>Create a <code>.env</code> file in the <code>backend</code> directory and add the following:</p>
        <pre><code>MONGO_URI=your_mongo_database_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
AWS_ACCESS_KEY_ID=your_aws_access_key_id
AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key</code></pre>
    </ol>
    
<h2 id="usage">Usage</h2>
    <ol>
        <li><strong>Start the backend server:</strong></li>
        <pre><code>cd backend
npm start server</code></pre>
        
 <li><strong>Start the frontend server:</strong></li>
        <pre><code>cd frontend
npm run dev</code></pre>
        
<li><strong>Open your browser:</strong></li>
        <p>Navigate to <a href="http://localhost:4000" target="_blank">http://localhost:4000</a> to view the application.</p>
    </ol>
    
<h2 id="screenshots">Screenshots</h2>
    <p>Include screenshots of your application here.</p>
   <img src="![foodDelight3](https://github.com/user-attachments/assets/230cd1db-4ebe-4dc8-a451-b4e035ddd38e)alt="Home Page">
![foodDelight4](https://github.com/user-attachments/assets/01c51670-94e9-495e-b8d7-b57d939fd27c)
![foodDelight5](https://github.com/user-attachments/assets/6290b19b-f0c5-4fec-ac04-9afc15b9aaac)
![foodDelight1](https://github.com/user-attachments/assets/0bc86854-50d0-4005-8a12-d8c2ca073fae)
![foodDelight2](https://github.com/user-attachments/assets/ff971f10-d94e-4ec9-a20d-abc48c026890)
![foodDelight6](https://github.com/user-attachments/assets/7a3f9384-9901-42dd-bff6-ca763c815209)
![foodDelightaddress1](https://github.com/user-attachments/assets/f5ab2186-dbe2-4683-b08f-50de1778fdca)
![foodDelightadmin1](https://github.com/user-attachments/assets/e112439c-7d04-45cf-9c5a-cea67ab4d35f)
![foodDelightadmin2](https://github.com/user-attachments/assets/99ed3867-bf6c-4b27-9ed4-8132b13c7e84)
![foodDelightcart1](https://github.com/user-attachments/assets/ffb968c9-ff5a-4217-ae08-a81cf558b642)
![foodDelightlogin](https://github.com/user-attachments/assets/c231c334-a8d0-4cdf-809f-38c96ece493d)
![foodDelightcart2](https://github.com/user-attachments/assets/c82009ba-cb5a-4e80-85cb-57b14f0ec5b3)
![foodDelightcart3](https://github.com/user-attachments/assets/a393c79e-8485-4caa-8521-5569ab7091b8)
    <!-- Example screenshots
    <img src="screenshots/home.png" alt="Home Page">
    <img src="screenshots/menu.png" alt="Menu Page">
    <img src="screenshots/reservation.png" alt="Reservation Page">
    <img src="screenshots/order.png" alt="Order Page">
    <img src="screenshots/admin_dashboard.png" alt="Admin Dashboard">
    -->
    
 <h2 id="contributing">Contributing</h2>
    <p>Contributions are welcome! Please follow these steps to contribute:</p>
    <ol>
        <li>Fork the repository.</li>
        <li>Create a new branch.</li>
        <li>Make your changes.</li>
        <li>Submit a pull request.</li>
    </ol>
    
<h2 id="license">License</h2>
    <p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for more details.</p>
</body>
</html>
