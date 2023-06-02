# Migrations

Migrations directory is used to store only migration files. 

Migrations in the context of web development and databases refer to a way of managing and versioning changes to your database schema over time.

In simple terms, a migration is a file or a set of files that contains instructions on how to make changes to your database schema, such as creating tables, modifying columns, adding indexes, and more. Migrations are typically written in a specific format or using a framework-specific tool(In this project we are using **sequelize ORM** for migrations).

Migrations are useful in several scenarios, including:

**Setting up a new database:** Migrations can be used to create the initial structure of your database, including tables, relationships, and indexes.

**Evolving the database schema:** As your application evolves and new features are added, migrations allow you to make changes to the database schema while preserving existing data.

**Collaborative development:** Migrations enable multiple developers to work on the same database schema by keeping track of changes and applying them consistently across different environments.

**Rollbacks and version control:** Migrations keep a history of changes, allowing you to roll back to a previous version of the database schema if needed. This is particularly useful when collaborating with a team or in case of errors.

Overall, migrations provide a systematic and organized way to manage database changes, ensuring that your database schema stays in sync with your application code as it evolves over time.

[Click here to learn about migrations in sequelize](https://sequelize.org/docs/v6/other-topics/migrations/)


