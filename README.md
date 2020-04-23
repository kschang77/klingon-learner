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


Warning: This is a 7MB animated GIF

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

### Program Flow

There are three main layers to this program. L0 is technically a part of L1 but may be easier mentally to consider them separate. 

```
L0: UI  <-->  L1: Express.js  <---> L2: ORM <---> L3:DATA/SQL   
```

The reason for multiple layer of abstraction like this is flexibility. Different people can be working on different parts of the app at the same time, without affecting each other, once the basic logic and interface has been agreed upon. A team can be fleshing out the basic template with Bootstrap or other CSS framework, while another team can be working on the backend (layer 2 to 3) to migrate the data and app to a cloud-based database engine rather than dependent on local data server. 


### Layer 0: browser-level Javascript and UI elements

There are some browser-level JavaScript that works with layer one webpages to form the UI. It uses jQuery to attach action code to the buttons. This, when combined with the standard HTML forms and the basic HTTP get, post, put, delete methods, forms level 0. Though they could be thought as a part of layer 1.


### Layer 1: Express

Node.js and Express.js are used to create a web server that listens for api "routes" denoting specific actions. It also serve up some initial pages to work with layer 0 JavaScript to render the initial UI. This has been abstracted into layer 1.5 Handlebars, but it could all be considered a single layer depending on how deep one wishes to consider this model. 

Once the api routes are reached, the matching object interface of object relational mapping (ORM) is called. One can consider this "routing" (as it's often used with express.router() method) from UI to first action as interface between level 1 and level 2. This uses HTML methods, like GET, PUT, DELETE and so on. 

For example, add button is pushed (layer 0), webpage submits to itself (layer 1) with a POST, which is translated to a create call for level 2, along with a callback function(). 

Once the callback function returned, the result(s) can be rendered, and screen updated. 


### Layer 1.5: Handlebars

Handlebars is a web template engine that works well with express.js. Instead of working with raw HTML pages and generate everything by Javascript, a series of templates such as index.handlebars is created, and data fields are "merged" into these templates and served. 

There can be a series of templates depending on the complexity of the setup. For this single-page app, there are three templates: 

* main.handlebars -- the page header and footer, without the body. This is where you render the repeating header and footer of the page, as well as any script includes, such as jQuery, Bootstrap, and other includes, such as layer 0 stuff. 

* index.handlebars -- the main "body" that fits in the middle of "main". In this case, it contains the layout grid of Bootstrap 4, that would contain some repeating elements. 

* <repeating>.handlebars -- whatever the name, this is the repeating element within the page. For this app, it's the individual "word block" with the button(s). Remember to make sure the layer 0 Javascript matches up here. 

One advantage of handlebars is you can modify the different blocks without restarting the server. Simply reload the page and you will see the modifications. 


### Layer 2: Object Relational Mapping (ORM)

The program uses ORM (object relational mapping) paradigm to create an object-oriented wrapper _orm.js_ around the mySQL query functions, specifically:

* get/read
* create
* update
* delete

You can think of ORM as the manager of relationship between layer 2 and layer 3, the SQL server. The "router" in level 1 translated the api action into a level 2 action. Now, the ORM.js file will convert the level 2 action into a level 3 qaction. A callback function will ensure the data wil lbe returned, and passed back up to level 1. 

### Layer 3: The Actual Data Engine

At layer 3 the actual SQL statemetns are being executed. This is where the connection to MySQL (or any other SQL engine) is made, then queries run, and results returned. 

Depending on the command given, results or result codes will be passed up through the use of callback functions back to level 2 and probably back through level one through another level of callback function. 


## Tools Used

* Microsoft Visual Studio Code
* Git-bash
* Screencastify for recording the demo
* ezgif.com for optimizing the demo.gif (from 11.8 MB to 7.2 MB)
* heroku.com for demo app hosting and MySQL plugin
* github for hosting the repo
* and Klingon Language Institute (KLI.org) for logo and Klingon phrases. 

## Future Enhancements? 

* A "flash card" capability like "Anki"
* A quiz
* have the wording verified by KLI.org
* Add pronouciations through a blob field for recording, and a audio player
* ????

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
