# sw-portfolio-react
Portfolio of Full Stack Developments

-----
![image](https://img.shields.io/badge/License-MIT-yellow.svg) 
## Description
This portfolio showcases the skills and talents I have for a role in website development. Applications include: 
- Horiseon (Marketing Home Page)
- Portfolio (Static HTML using CSS Flex for responsiveness) 
- Password Generator: meeting the highest level of security (using Web/Brower API)
- Online Code Quiz: Questions on Programming with time limits, final score and leader board (stored locally)
- Work Day Schedular: A daily ToDo list using local storage in your Browser or Device
- "realocator": An online Property search tool using the domain.com.au API in realtime (featuring your own Shortlist)
- Weather Dashboard: realtime weather information from cities around the world
- GitHub README.md Generator: A Questionnaire based document generator to save time
- Team Profile HTML Generator: A quick CLI App to generate an Org Chart for your organisation
---
- Note Taker: Shopping List? Points from a Meeting? Things to Remember? Thoughts?  Note Taker is perfect for remembering stuff when you are on the go (physically or mentally)
- Employee Tracker: ideal for larger organisations: add/promote/remove/delegate staff; perfect for HR
- E-Commerce: want to sell a service/something? All financial issues are avoided
- Tech-Blog: like any Blog: say something/raise a topic and get feedback; users included (ie they must logiin)
- Tutorial: regex.  If you don't know regex this will teach you.
- Social Network API: who says Facebook is the only one?
- Text Editor: who says you can't build a better mouse trap? Text editor works online and offline.
- Portfolio: looks the same but programmatically: a Porche/Mercedes/Rolls Royce/Mustang compared to a cheap car



My Full Stack showcase uses these technologies/techniques (listed by category):

- Source Control:
GitHub

- Front End:
React, HTML, CSS (vanilla, Flex, Bootstrap, Tailwind); JQuery.

- APIs': 
domain, openweathermap, gmail (2Factor Authentication), custom

- Back End:
node.js, ruby

Coding Styles:
OOP, Functional Programming, REST

Packages:
moment, fontawsone, inquirer, chalk, fs, express, bcrypt, sequalize, mysql2

Tools:
VS Code, Insomnia, RapidAPI, postman

ORM/ODM:
mysql2, Sequelize/Mongoose, Apollo/GraphQL

Persistence:
SQL: Sybase, ORACLE, GuptaSQL, MS-Access
JSON/Server side: MongoDB
JDON/Client side: localstorage, IndexDB
cookies

Authentication:
JWT

TDD:
jest

Services Utilised:
PWA using Service Worker and Manifest and Local Installation

Deployment:
Heroku, github.io

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [User Story](#user-story)
- [Mock-up](#mock-up)
- [License](#license)
- [Repository](#repository)
- [Credits](#credits)

## Installation
1. Clone the App from https://github.com/SeanU2022/sw-portfolio-react
2. npm i
3. npm start

## Usage
Browse to the single page React Web App and view contents here: 
https://seanu2022.github.io/sw-portfolio-react/

## Technologies Used

### Front-end
 - HTML
 - JavaScript/JQuery
 - Express
 - MiniCSS extract plugin
 - Webpack
 - idb for IndexDB
 - Babel
 - code-mirror-themes
 
### Back-end Dependencies
 - node.js
 - Express
 - if-env
 - concurrently
 - nodemon


## User Story

```md
AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position
```
## Acceptance Criteria

```md
GIVEN a single-page application portfolio for a web developer
1 WHEN I load the portfolio
THEN I am presented with a page containing a header, a section for content, and a footer

2 WHEN I view the header
THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio

3 WHEN I view the navigation titles
THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted

4 WHEN I click on a navigation title
THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted

5 WHEN I load the portfolio the first time
THEN the About Me title and section are selected by default

6 WHEN I am presented with the About Me section
THEN I see a recent photo or avatar of the developer and a short bio about them

7 WHEN I am presented with the Portfolio section
THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repositories

8 WHEN I am presented with the Contact section
THEN I see a contact form with fields for a name, an email address, and a message

9 WHEN I move my cursor out of one of the form fields without entering text
THEN I receive a notification that this field is required

10 WHEN I enter text into the email address field
THEN I receive a notification if I have entered an invalid email address

11 WHEN I am presented with the Resume section
THEN I see a link to a downloadable resume and a list of the developer’s proficiencies

12 WHEN I view the footer
THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)
```

## Mock-Up

The following mock-up shows the application:
[name of mock-up](./assets/1BuildWIthWebpack.gif)


### Manifest.json
![manifest.json](./assets/manifest.json.png)

## License
 This application is licencsed under [MIT license](https://opensource.org/licenses/MIT).
## Repository
https://github.com/SeanU2022/sw-portfolio-react

## Deployed Application
https://seanu2022.github.io/sw-portfolio-react/

## Credits
 - Sean Wallace: https://github.com/SeanU2022
