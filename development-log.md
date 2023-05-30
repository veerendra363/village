## Development Log  

### 2023-05-17  
    - Create the project folder.  
    - Initialized the project using `npm init`.  
    - Installed express using 'npm install express'  
    - Added File structure  

### 2023-05-18
    - Installed Sequelize, mysql2, body-parser, cors using 'npm install express sequelize mysql2 body-parser cors --save'  
    - Run the Server Using Express, body-parser, cors and command 'node index'  

### 2023-05-29
    - Using MacBook pro built in DBMS(sqlite)  
    - created sqlite db in project folder using command 'SQlite3 village.sqlite'  
    - installed sqlite3 package using command 'npm install sqlite3'  
    - downloaded the GUI app 'db browser for sqlite' which is used to interact with sqlite db
    - created config.js file to store the configuration settings for your database connection  
    - created user roles migration file using the command 'npx sequelize-cli migration:generate --name create_user_roles_table'  
    - created users migration file using the command 'npx sequelize-cli migration:generate --name create_users_table'  
    - ran the above migrations using the command 'npx sequelize-cli db:migrate'  
    - created user roles seeder file using the command 'npx sequelize-cli seed:generate --name create-user-roles'  
    - ran above seeders using the command 'npx sequelize-cli db:seed:all'  
    - created a model file for userRoles  
    - copied code from my prev project and saved code in models/index.js which is used for dynamically loading Sequelize models
    - written a sample code to get all roles from the roles table (just testing the models and connection)  

### 2023-05-30
