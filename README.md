## Blogstone
---
Blogstone is a simple webapp for users to post their thoughts and experience regarding any subject they desire. There are a handful of categories to choose from, but you are not limited to these categories. Users can create an account and create their own blog, view others blogs as well as update or delete their own content.

## Getting Started
---
Clone this repo to your machine.

Install all required dependencies with command: `npm install` or `npm i`

Run the command `npm start` from the project directory. This command will open the application front-end in development mode under port `3000`.

Open http://localhost:3000 to view application in your browser.

## Description
---
Front-end will be displayed via `React.js`. Registration of users along with creating, updating or delete blogposts done via `async/await` methods that will communicate with the server routes on the back-end.

Front-end will store a user's auth token in `localStorage` for their browser so that this information can be sent to the back-end server routes to authenticate a user.

## User Demographic
--- 
Blogstone is targeted toward anyone who finds writing as a creative or peaceful outlet. 

## Front end dependencies:
---
 Install with `npm i`
    <li>`axios`: ^1.2.5
    <li>`bootstrap`: ^5.2.3
    <li>`cors`: ^2.8.5
    <li>`react`: ^18.2.0
    <li>`react-dom`: ^18.2.0
    <li>`react-jwt`: ^1.1.8
    <li>`react-router-dom`: ^6.7.0
    <li>`react-scripts`: 5.0.1
    <li>`sass`: ^1.57.1
    


## Data
--- 
Profiles are anonymous. While users can use their own info for username/email a random profile avatar is generated using `Faker`.

If users choose to omit blog images, an image will be provided using `Picsum`'s external API for image generation.

All posts are stored in a Postgresql Database, each post will have it's creators ID tied to it.

## Tech Stack
--- 
- ### Front-end: 
    - `React`
    - `React Router`
    - `Reactstrap`
    - `Picsum` (image generator)
- ### Back-end: 
    - `Node`
    - `Express`
    - `Faker` (profile photo generator)

## Database Schema
--- 
DB is `SQL` using `Postgres`. There are two tables, `Users` and `Posts`. User passwords are encrypted using `BCrypt`. Users will have a one-to-many relationship with `Posts` as they can add/delete as many as they want.

![DB-Schema](https://user-images.githubusercontent.com/91156228/220794690-06453fae-cb08-409e-9321-ba6dc82d5cce.png)


## User Flow
--- 
Blogstone is a Single Page Application using `React`. Users do not need to create an account to view blogs but will need to create an account to enable them to create their own blog and edit/delete them.

![User Flow](https://user-images.githubusercontent.com/91156228/220796658-d10b5cc3-4a82-4cc4-b4d7-f66f0172135f.png)
