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
      
<h2 id="screenshots">Screenshots</h2>
    <p>Include screenshots of your application here.</p>
    
   ![foodDelight1](https://github.com/user-attachments/assets/9c529c4b-6ad8-4176-a6dc-65b6b06ed41d)
   ![foodDelight2](https://github.com/user-attachments/assets/8d2fafee-3d73-4919-8ab4-a582308828a7)
   ![foodDelight3](https://github.com/user-attachments/assets/60d1824f-3b61-4c64-a243-d688434360d9)
    <h1>FOOTER</h1>
   ![foodDelight4](https://github.com/user-attachments/assets/e3ca84cc-158e-4bdb-a26d-4479c299a97b)
    <h1>Logout and Orders</h1>
   ![foodDelight5](https://github.com/user-attachments/assets/a07e3fd4-990e-4f49-bdf1-9bd030c016f1)
    <h1>Cart</h1>
  ![foodDelightcart1](https://github.com/user-attachments/assets/2c03fc4b-00e0-4de9-815f-8af4b212caf6)
  ![foodDelight6](https://github.com/user-attachments/assets/d80fc5af-bbc1-40c1-b10c-2fa41665d304)
    <h1>Delivery information</h1>
  ![foodDelightaddress1](https://github.com/user-attachments/assets/428d12d6-f351-46ed-815b-59c2a6e020e0)
     <h1>Admin DashBoard (Where you can add newly arrived items)</h1>
   ![foodDelightadmin1](https://github.com/user-attachments/assets/3edf1cec-f603-4a84-88a2-2bc5c538c827)
 ![foodDelightadmin2](https://github.com/user-attachments/assets/c2aeeb40-d09e-473d-8bce-6d2268082e6c)
    <h1>Login and Register</h1>
 ![foodDelightlogin](https://github.com/user-attachments/assets/00dd6e64-dfdc-4ca6-9973-3b2889f45e92)
    <h1>Cart</h1>
![foodDelightcart2](https://github.com/user-attachments/assets/37f1e095-e06a-4b0e-9120-301d3695e437)
![foodDelightcart3](https://github.com/user-attachments/assets/806f94cf-4608-471d-a1a7-e7452cfce66a)
   
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
    
   ![foodDelight1](https://github.com/user-attachments/assets/9c529c4b-6ad8-4176-a6dc-65b6b06ed41d)
   ![foodDelight2](https://github.com/user-attachments/assets/8d2fafee-3d73-4919-8ab4-a582308828a7)
   ![foodDelight3](https://github.com/user-attachments/assets/60d1824f-3b61-4c64-a243-d688434360d9)
    <h1>FOOTER</h1>
   ![foodDelight4](https://github.com/user-attachments/assets/e3ca84cc-158e-4bdb-a26d-4479c299a97b)
    <h1>Logout and Orders</h1>
   ![foodDelight5](https://github.com/user-attachments/assets/a07e3fd4-990e-4f49-bdf1-9bd030c016f1)
    <h1>Cart</h1>
  ![foodDelightcart1](https://github.com/user-attachments/assets/2c03fc4b-00e0-4de9-815f-8af4b212caf6)
  ![foodDelight6](https://github.com/user-attachments/assets/d80fc5af-bbc1-40c1-b10c-2fa41665d304)
    <h1>Delivery information</h1>
  ![foodDelightaddress1](https://github.com/user-attachments/assets/428d12d6-f351-46ed-815b-59c2a6e020e0)
     <h1>Admin DashBoard (Where you can add newly arrived items)</h1>
   ![foodDelightadmin1](https://github.com/user-attachments/assets/3edf1cec-f603-4a84-88a2-2bc5c538c827)
 ![foodDelightadmin2](https://github.com/user-attachments/assets/c2aeeb40-d09e-473d-8bce-6d2268082e6c)
    <h1>Login and Register</h1>
 ![foodDelightlogin](https://github.com/user-attachments/assets/00dd6e64-dfdc-4ca6-9973-3b2889f45e92)
    <h1>Cart</h1>
![foodDelightcart2](https://github.com/user-attachments/assets/37f1e095-e06a-4b0e-9120-301d3695e437)
![foodDelightcart3](https://github.com/user-attachments/assets/806f94cf-4608-471d-a1a7-e7452cfce66a)

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
