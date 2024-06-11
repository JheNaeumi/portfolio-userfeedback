# Jhe Naeumi - Personal Web Portfolio
## About

This personal portfolio website is built with Vite React for the frontend, Spring Boot for the backend, and MySQL/PostgresSQL for the database. It operates as a straightforward full-stack platform, leveraging REST API to collect user feedback and statistics, which are subsequently presented on the site. The project is presently in development, with the frontend deployed as a static website on render.com for viewing. You can access it through the following link: https://jhenaeumi.online. Ongoing improvements are being implemented for both the backend and design.

## REST API

### /api/user
POST : /api/users 

GET : /api/users/rating

GET : /api/users/rating/avg+count

### /api/stats
GET : /api/stats/get

PATCH : /api/stats/update/views

PATCH : /api/stats/update/last_updated

## Setup

1. Clone Repository
> git clone https://github.com/JheNaeumi/portfolio-userfeedback.git

2. Create Database
> CREATE DATABASE your_database;

3. Configure Properties for Database
rename application.properties.sample to application.properties
> spring.datasource.url=jdbc:mysql://localhost:3306/userfeedback
spring.datasource.username=your_username // ex: root
spring.datasource.password=your_password
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
spring.jpa.hibernate.ddl-auto=update

4. Navigate and Run Spring boot in Development
> UserfeedbackApplication.java

5. Navigate and Run Vite in Development
> cd frontend/porfolio-frontend
> npm run dev


