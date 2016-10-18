CREATE DATABASE personality_test;

USE personality_test;

CREATE TABLE users (
  id int PRIMARY KEY AUTO_INCREMENT,
  email varchar(255), 
  score int
);

CREATE TABLE tests (
  id int PRIMARY KEY AUTO_INCREMENT,
  name varchar(255)
);

CREATE TABLE results (
  id int PRIMARY KEY AUTO_INCREMENT,
  userId int,
  testId int,
  score int,
  FOREIGN KEY (userId) REFERENCES users(id),
  FOREIGN KEY (testId) REFERENCES tests(id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.
 *  "drop database + dbname" will delete it if
 *  it's not working the way you want.  
 *  "show databases" will show you all of them
 *  "use database" will get you into a particular
 *  database.  "show tables" will show you the 
 *  tables.  "describe tablename" will show you
 *  the setup for that table. */