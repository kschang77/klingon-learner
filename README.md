# Chinese-learner

## Main Program Concept

Use the burger app, but do it more like the vocab builder. 

Use HSK1 vocabulary list such as one given here:

https://www.digmandarin.com/hsk-1-vocabulary-list.html

Users can copy characters and paste them

Characters can be one of 2 statuses: learning, mastered

so table = learning.db
id integer autoinc primary key
word varchar(50)  (
mastered boolean

CREATE TABLE chinese-learning
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    word VARCHAR( 50 ) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
    mastered boolean default false
)

Then the MySQL connection would have to use 

SET character_set_client=utf8mb4
SET character_set_connection=utf8mb4

// -- fallback: use Klingon instead. :) 

# klingon-learner

change to Klingon learner

