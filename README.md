# E-commerce-Back-End Application
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

This is the back end for an e-commerce site, equipped with a fully functional Express.js API and configured to seamlessly interact with a MySQL database through Sequelize. Developed with the latest technologies, this application is designed to meet the needs of a manager at an internet retail company, aiming to enhance competitiveness in the ever-evolving e-commerce landscape.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [How To Contribute](#how-to-contribute)
- [Credits](#credits)
- [License](#license)

## Installation

In order to use the E-commerce-Back-End Application, it is necessary to have a code editor, such as Visual Studio Code (VSCode), Node.js, and MySQL installed on your system.

1. Begin by installing Node.js and MySQL on your computer's terminal/command-line. For detailed installation instructions, vist <a href="https://nodejs.org/en/">Node.js.org</a> and <a href="https://dev.mysql.com/downloads/mysql/">MySQL Community Downloads</a>  

2. Initiate the cloning process from the GitHub repository by selecting "Code." Copy the SSH link then execute the `git clone <paste SSH link>` command in your terminal/command-line. Next, open the cloned project in your preferred code editor.

3. Verify the installation of npm, which usually comes bundled with Node.js. Execute the command `npm -v` in the integrated terminal to confirm that you have the latest version downloaded. If npm is not installed, run the command `npm i` before continuing to install dependencies.

4. Next, create the `.env` file in the root directory. Add your MySQL database name, username, and password to the `.env` file shown like the example below: <br>
`DB_NAME='your_database_name'` <br>
`DB_USER='your_mysql_username'`<br>
`DB_PASSWORD='your_mysql_password'`

5. To create and seed the development datatbase, run the followings commands in order:<br>
`node server.js`<br>
`node seeds/index.js`<br>
`nodemon server.js`

6. If you've completed all the steps above, the server is now running. Access the API endpoints using tools like <a href="https://insomnia.rest/download">Insomnia</a> to interact with the routes. See [Usage](#usage) for a demonstration.

## Usage

The following steps outline the usage of the E-commerce-Back-End Application. Complete all installation requirements before proceeding with the usage instructions.

**Explore API Routes:**
- Open <a href="https://insomnia.rest/download">Insomnia</a> and test the API routes for categories, products, and tags.
- View formatted JSON responses for each route, displaying the relevant data.

**Test CRUD Operations:**
- Utilize <a href="https://insomnia.rest/download">Insomnia</a> to test API POST, PUT, and DELETE routes.
- Successfully create, update, and delete data in the connected MySQL database.

add demo video here

## How to Contribute

If come across any problems while using the E-commerce-Back-End Application, feel free to open a new issue or submit a pull request through this repository. Your feedback and contributions are welcomed. 

Please don't hesitate to reach out regarding any concerns, propose improvements, or share suggestions. I look forward to collaborating with you to enhance the E-commerce-Back-End Application.

GitHub Profile: <a href="https://github.com/samanthashleyrose">samanthashleyrose</a><br>
Email: samantha.rose327@gmail.com

### Thank you for your interest and support!

## Credits

#### Knowledge Assitance From:
<li>Lee Warrrick <a href="https://leewarrick.com/">Personal Portfolio</a></li>
<li>Mia Ciasullo <a href="https://github.com/miacias">GitHub Portfolio</a></li>

#### Technologies Used:
<li><a href="https://chat.openai.com/">ChatGPT</a></li>
<li><a href="https://nodejs.org/en/">Node.js</a></li>
<li><a href="https://www.mysql.com/">MySQL</a></li>
<li><a href="https://sequelize.org/">Sequelize</a></li>
<li><a href="https://www.npmjs.com/package/express">NPM - express</a></li>

#### Documentation Used:
<li><a href="https://github.com/coding-boot-camp/fantastic-umbrella/tree/main/Develop">Starter Code</a></li>
<li><a href="https://sequelize.org/docs/v6/category/core-concepts/">Sequelize.org Docs</a></li>

## License

This project is licensed under the <a href="https://opensource.org/licenses/MIT">MIT LICENSE</a> - see the [LICENSE](./LICENSE) file for details.