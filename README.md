# Woolybully

The "Damn, You Live Like This?" reminder app. Set up to-do lists and goals, and Wooly Bully will bully you into being the best version of yourself with timed reminders, phone calls, and public shaming. Be Better. Get Bullied. Wooly Bully.

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Contact](#contact)

## General info
A node based reminder app using Node, Express, MySQL, and a handmade ORM,  in which the user can choose a category for self-improvement, set a goal, and a time to complete it by.  The app will then "bully" the user by sending reminders until the goal is completed.


## Screenshots

Filling out the user information.

![Filling out User information]()


![Setting a Goal](https://media.giphy.com/media/SXlJrlwjvpAUloKm06/giphy.gif)


Goal Updated on the Table.


User then bullied into completing goal.


## Technologies

*   materialize version 1.0.0
*   jquery version 3.4.1
*   dotenv version 8.0.0
*   express version 4.17.1
*   mysql version 2.17.1 
*   node-cron version 2.0.3
*   nodemon version 1.19.1
*   passport-twitter version 1.0.4
*   twilio version 3.33.0
*   twitter version 1.7.1

## Setup
Describe how to install / setup your local environement / add link to demo version.

Install all dependencies

Open your terminal and enter the following command.

```bash
npm i
```
Setup your local environment

 *Create a process.env file with the following code in order to connect to the database.

```
 APP_ENV=local

DB_URL=mysql://qvi25n47mbm3c8da:ffx51olsemcudjmv@v02yrnuhptcod7dk.cbetxkdyhwsb.us-east-1.rds.amazonaws.com/w5rf5aqxit0qej3v

```

Directory Structure using MVC design pattern

```
.
├── app
│   ├── schedule.js
│   └── tweet.js
│   └── twitter.js
|   
|── config
│   ├── config.js
│   └── orm.js
|
├── db
│   ├── schema.sql
│   └── category_seed.sql
│ 
├── models
│   └── bully.js
│   └── goal_config.js
│   └── users.js
│
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── imgs
│   └── js
|       └── goalLists.js
|       └── userForm.js
|       └── view.js
|   └── testpages
|   └── about.html
|   └── goalLists.html
|   └── index.html
|   └── userForm.html
|
│
└── server.js

```
  

## Code Examples


`




`


## Features
List of features ready and TODOs for future development
* 
* 
* 

To-do list:
* Bully automatically will post a message to your twitter account for public shaming.
* 

## Status
Project is: in progress because we want to continue to make improvements and improve the user experience. 


## Contact
Created by [@PhilD203]() - feel free to contact us!