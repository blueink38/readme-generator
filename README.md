# README Generator
A simple application that allows a user to write  professional REAME

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
In order to spend more time on a project, this little application allows the user to write a professional and unique README from the command line.

## Screenshots
![Example screenshot](./img/screenshot.png)

## Technologies
* Node.js
* Inquirer
* Markdown
* JavaScript

## Setup
`node index.js`

## Code Examples
```
function generateMarkdown(data) {
  return `
  # ${data.name}
  # License
    ${data.licenseBadge}
```

## Features
* Allows a README to be generated from the command line
* User is prompted for information to be dynamically uploaded to their README

<bold>To-do list:<bold>
* Add ability to upload a screenshot
* More license options

## Status
This project is in progress.  As new technologies and needs change, updates may happen.

## Inspiration
Inquirer was a big help making this project possible

## Contact
Created by [@me!](blueink38@yahoo.com) - feel free to contact me!

