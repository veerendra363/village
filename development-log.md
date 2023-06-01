## Development Log  

### 2023-05-17  
- Create the project folder.  
- Initialized the project using ```npm init```.  
- Installed [express](https://expressjs.com/) using ```npm install express```.  
- Added File structure.  

### 2023-05-18
- Installed [Sequelize](https://sequelize.org/), [body-parser](https://www.npmjs.com/package/body-parser), [cors](https://www.npmjs.com/package/cors) using ```npm install express sequelize body-parser cors --save```.  
- Run the Server Using Express, body-parser, cors and command ```node index```.  

### 2023-05-29
- Using MacBook pro built in DBMS([sqlite](https://en.wikipedia.org/wiki/SQLite)).  
- Created sqlite db in project folder using command ```SQlite3 village.sqlite```.  
- Installed [sqlite3 package](https://www.npmjs.com/package/sqlite3) using command ```npm install sqlite3```.  
- Downloaded the GUI app [db browser for sqlite](https://sqlitebrowser.org/) which is used to interact with sqlite db.
- [Migrations and seeders](https://sequelize.org/docs/v6/other-topics/migrations/)
- Created config.js file to store the configuration settings for your database connection.  
- Created user roles migration file using the command ```npx sequelize-cli migration:generate --name create_user_roles_table```.  
- Created users migration file using the command ```npx sequelize-cli migration:generate --name create_users_table```.  
- Ran the above migrations using the command ```npx sequelize-cli db:migrate```.  
- Created user roles seeder file using the command ```npx sequelize-cli seed:generate --name create-user-roles```.  
- Ran above seeders using the command ```npx sequelize-cli db:seed:all```  
- Created a [model](https://sequelize.org/docs/v6/core-concepts/model-basics/) file for userRoles.  
- Copied code from my prev project and saved code in models/index.js which is used for dynamically loading Sequelize models.
- Written a sample code to get all roles from the roles table (just testing the models and connection).  

### 2023-05-30
- Added .gitignore file and code pushed to the git.
- Installed [bcrypt](https://www.npmjs.com/package/bcrypt) using command ```npm install bcrypt```.
- First time pushed code to git hub.  
- Written my first api which gets all user roles url: vlg/user/roles.
- Just added route and controller for the above api.
- Started adding comments for the better understanding of it.
- Installed vs extension [rest client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) (which allows you to send HTTP request and view the response in Visual Studio Code directly).
- Created rest client (.http)file to request and get response from user roles API.

### 2023-05-31
- Added ReadMe file
- Installed [Joi](https://joi.dev/) using the command ```npm install joi```
- Added a common function to return a custom response from all apis
- Added a common schema validator function
- Added a constants file which stores all constants variable of the app
- Created Post api to add new user role with schema validation

### 2023-06-01
- Created migration file to add unique constrain to role in userRoles table by running the command ```npx sequelize-cli migration:generate --name add_case_insensitive_unique_constraint_to_role_in_userRoles```.
- Created migration file to add castes table and renamed the file just to move above the create users table migration.
- Reverted the create users table migration using the command ```npx sequelize-cli db:migrate:undo --name 20230529124505-create_users_table```
- Updated the create users table migration to add castedId in it and allowNull to true.
- Applied the above migrations to the db using the command ```npx sequelize-cli db:migrate```.
- Added new caste migration and seeder file and migrated them both
- Created seeder file for admin user and seeded the data to the db.


