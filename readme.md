
# Real Estate Listings App

The Real Estate Listings App is a server-side rendered web application developed during my software development bootcamp at NYU. The app was built using the MERN stack (MongoDB, Express, React, Node.js), with server-side rendering achieved through Express-React-Views. It allows users to view, add, update, edit, and delete real estate listings. The app features a clean, simple, and responsive user interface designed with SCSS (Sass).

This README provides an overview of the app, installation instructions, usage details, configuration guidelines, license information, credits, and contact details.

## Live Demo
Check out the live demo of the Real Estate Listings App [here](https://real-estate-listings-3588c5997453.herokuapp.com/listings).

This app is deployed on [Heroku](https://www.heroku.com/), a cloud platform that enables easy deployment and hosting of web applications.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [License](#license)
- [Credits](#credits)
- [Contact Information](#contact-information)

## Installation
1. Fork this repository and clone it to your local machine.
2. Open the project in your preferred IDE.
3. Run `npm install` to install the dependencies.
4. Start the server by typing `nodemon` in the command line and hit enter.

**Note:** The MongoDB credentials are stored in a `.env` file, which is not pushed to GitHub. To fully utilize the app's functionality, follow these steps:
1. Create your own MongoDB database and obtain the connection URI.
2. Create a `.env` file in the project root directory.
3. Add the following lines to the `.env` file, replacing `<your_MONGO_URI>` with your MongoDB connection URI:

If you prefer to use sample data, you can run `http://localhost:8000/listings/data/seed` in your browser to populate the database with seed listings.

## Usage
The main page displays a table view of all the listings, including thumbnail images. You can perform the following actions:
- **Create:** Click the "Create" button to add a new listing. If no image is selected, a default image will be added.
- **View:** Click on a listing to view it on its own page.
- **Edit:** Use the "Edit" button to update a listing's information.
- **Delete:** Click the "Delete" button to remove a listing.

## Configuration
If you would like to install this project on your own computer, you will need to connect the database to your MongoDB account and add a `.env` file with your `MONGO_URI`. In addition, you will need to specify the `PORT` number. You can use the seed file by running `http://localhost:8000/listings/data/seed` in your browser.

## License
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Credits
I primarily followed the instructions provided by NYU for creating an Express app with server-side rendering.

## Contact Information
For any questions or feedback, please feel free to reach out to me:
- Scott Rubin
- Email: scottrubin@gmail.com