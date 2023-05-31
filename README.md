# Village Management System

This project is a simple Node.js application designed for the purpose of understanding and practicing various concepts of web development. It focuses on managing basic information about villages.  

## Table of Contents
1) [Project Overview](#project-overview)
2) [Technologies Used](#technologied-used)
3) [Getting Started](#getting-started)
    1) [prerequisites](#prerequisites)
    2) [installation](#installation)
    

## Project Overview<

The Village Management Project aims to provide a user-friendly interface to handle village-related data. It allows users to perform CRUD (Create, Read, Update, Delete) operations on the village data using a web interface.

## Technologies Used
The following technologies and frameworks are used in this project:

* Node Js
* Express Js
* Sequelize
* Sqlite3

## Getting Started
To run the project locally and explore its features, follow these steps:

Recommend IDE: VS code

### Prerequisites
1) Node Js(v18.14.2)
2) SQLite3(v3.36.0)

### Installation
1) Clone this repository to your local machine.
2) Install the required dependencies by running ```npm install``` in the project directory.
3) Run the application using the command ```node server.js``` or ```npm start```.
4) Open your web browser and access the application at http://localhost:8080.
5) Create a new SQLite3 DB by running ```Sqlite3 DB_Name.sqlite``` in the desired directory.
6) Open config/config.js and update the storage property with new path and DB ```(storage: path/to/DB_Name.sqlite)```
7) Run the migrations using the command ```npx sequelize-cli db:migrate```
8) Run the seeders using the command ```npx sequelize-cli db:seed:all```
9) If you are using vs code IDE Then add REST client extension
10) Open any .http file and check whether APIS are working or not by send the request directly for VS code. If your IDE don't support REST client then copy the APIS from .http file and check it on web browser.


