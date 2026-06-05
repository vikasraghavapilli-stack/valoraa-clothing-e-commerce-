Valoraa Clothing E-Commerce 

A full-stack e-commerce web application for clothing, built with HTML/CSS/JavaScript on the frontend and Spring Boot on the backend.

 Project Description

Valoraa is an online clothing store that allows users to browse products, manage their cart, place orders, and handle authentication — all through a clean and responsive web interface.     

 Tech Stack

 Frontend
- HTML5
- CSS3
- JavaScript

 Backend
- Java
- Spring Boot
- Maven
- REST API

Database
- MySQL

How to Run the Project

 Prerequisites
- Java 17+
- Maven
- MySQL
- A browser (for frontend)

 Backend Setup
1. Clone the repository
bash
   git clone https://github.com/vikasraghavapilli-stack/valoraa-clothing-e-commerce-.git

2. Navigate to the backend folder`bash
   cd backend

3. Configure your database in `src/main/resources/application.properties`
properties
   spring.datasource.url=jdbc:mysql://localhost:3306/valoraa
   spring.datasource.username=your_username
   spring.datasource.password=your_password

4. Run the application
bash
   mvn spring-boot:run

 Frontend Setup
1. Navigate to the frontend folder
bash
   cd frontend

2. Open `index.html` in your browser



##  Folder Structure
valoraa-clothing-e-commerce/
├── frontend/         # HTML, CSS, JavaScript files
└── backend/          # Spring Boot application
├── src/
│   ├── main/
│   │   ├── java/com/valoraa/backend/
│   │   │   ├── controller/
│   │   │   ├── model/
│   │   │   ├── repository/
│   │   │   └── service/
│   │   └── resources/
└── pom.xml
