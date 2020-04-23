# Welcome to klingon-learner 👋
![Version](https://img.shields.io/badge/version-0.9-blue.svg?cacheSeconds=2592000)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/kschang77/klingon-learner#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/kschang77/klingon-learner/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/kschang77/klingon-learner)](https://github.com/kschang77/klingon-learner/blob/master/LICENSE)

> Klingon-learner is a program to help non-Klingon users learn the Klingon language. 

> The words being learned are on the left. Once they are learned, hit a button to move them to the right side. 

> You can move them back with a matching button. 

> If the word is on the right side (mastered) you can delete it with the appropriate button. 

> (Klingons do not believe in having computers nagging you "are you sure?" so there is no confirmation)

> You may ask for help by pressing the "What does this do?" button

> You may add additional words by using "Add Klingon Word" button at the bottom. You can choose to mark them as being learned, or already mastered. It is your honor at stake, so choose wisely. 

### 🏠 [Homepage](https://github.com/kschang77/klingon-learner#readme)

### Demo

https://kc-klingon-learner.herokuapp.com/

![demo gif](demo.gif)

## To Start

```sh
npm server.js
```

or open the demo app URL above

## How to Use

NOTE: This verbiage is also available in the program under the button "What does this do?"

*nuqneH, taghwI’ qaStaH nuq?*

That means "welcome, beginner! what's happening?" in Klingon.

Learn Klingon is an initiative from the [Klingon Language Institue](https://www.kli.org/) to help non-Klingons master the Klingon Language.

The program is very simple.

On the left, you have a series of Klingon words, under the heading "Klingon words being learned".

Each word has a button. If you think you have mastered the Klingon word, click on the button to move it to
the right side, under the heading "Klingon words mastered"

If you changed your mind, you can move it back with the matching button.

If you are not sure what the button does, the icon should give you a clue, or you can hover the pointing
device over the button to receive a hint.

You may only delete a Klingon word after you have mastered it.

Should these Klingon words proven to be insufficient challange, or you have previously mastered some other
Klingon words, please add them to this program in order to track your progress of Klingon language mastery.

You are welcome to add more Klingon words you wish to master to this program, either using KLI resources, or using [Microsoft Bing Translator](https://www.bing.com/translator). Be warned that machine translation can never capture the nuances of the Klingon language and thus you need this program so you may master the Klingon language the proper way.


## Implementation Details

This is a rather complicated program due to the requirement of using Terran primitive programming technologies. 


### Uses

* Bootstrap 4
* MySQL
* Node.js
* express.js
* express-handlebars
* jQuery

### Schema

There is only one MySQL table

```
CREATE TABLE klingons
(
	id int NOT NULL AUTO_INCREMENT,
	kword varchar(255) NOT NULL,
	english varchar(255) NOT NULL,
        mastered BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
```

A _seeds.sql_ is provided to pre-populate the table with six of the most used Klingon words and their English translations. 

There are three main layers to this program. 

### Layer 1: Express

Node.js and Express.js are used to create a web server that listens for web calls and calls upon the templates specified in the next layer, Handlebars to serve up the right ones, and to call upon Layer 3 for database contents such as the word list. 


### Layer 2: Handlebars

Handlebars is a template engine that is used to generate webpages or webpage blocks that can be easily reused without recoding by hand. In this case, it is used to separate the header, the footer, and the repeating blocks, so each can be modified separately, and in fact, while the server is running, and results can be seen immediately. 

### Layer 3: Object Relational Mapping (ORM)

The program uses ORM (object relational mapping) paradigm to create an object-oriented wrapper _orm.js_ around the mySQL query functions, specifically:

* all
* create
* update
* delete

As the pages generated in Express and Handlebars call upon the various ORM methods, database is being read and updated, and results used to generate and update the webpages being displayed. 

## Tools Used

* Microsoft Visual Studio Code
* Git-bash
* Screencastify for recording the demo
* ezgif.com for optimizing the demo.gif (from 11.8 MB to 7.2 MB)
* heroku.com for demo app hosting and MySQL plugin
* github for hosting the repo

## Author

👤 **Kasey Chang**

* aka **pagh Sovbogh Chang** (trans: Know-Nothing Chang)
* Website: https://www.linkedin.com/in/kasey-chang-0932b332/
* Github: [@kschang77](https://github.com/kschang77)

## Show your support

Give a ⭐️ if this project helped you!


## 📝 License

Copyright © 2020 [Kasey Chang](https://github.com/kschang77).

This project is [MIT](https://github.com/kschang77/klingon-learner/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
