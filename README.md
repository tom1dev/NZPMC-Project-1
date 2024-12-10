# NZPMC-Project-1

This is the first miniproject created by tdev429(tom).

## About the project:
### Project Stack:
 * JavaScript
 * NodeJS
 * ExpressJS
 * mongoDB
 * mongoose

This project is a user event registration site where users can join events after signing in. Admins can also view all users and create events directly through the application.

### Key Design Decisions:
This project contains many key design decisions which were integeral to the design past the initial project requirements and decisions:

- SideBar: The sidebar is key for allowing the user to always be in controll about their log in status as well as their account details. By adding the sidebar now it will allow for easier routing between features of the page as the sites requirements grow.

- Security, Authentication, and Cookies: Security is a major concern when creating online applications and websites. As such I applied hashing before storing user passwords, as well as sending the user a jwt autherisation token after they sign in. This JWT token is used for autherisation of the user to use certain endpoints in the backend. For example a query with no jwt token (e.g. non signed in user) cannot access the get user info endpoint or a non-admin user cannot access create event endpoint. This JWT token is also used in the cookie to save user signin even if page is refreshed.

- Event and user detail popups: I have opted to use popups for showing user and event details. This has allowed me more flexibility in the amount of paramenters and they way i desplay parrameters for events and users. For example this has allowed me to add additional parrameters to the event display (amount of attendies and Location) without making the pages look chunky.

- Signout: I have also opted to add a signout button as users may want to use different accounts. For example a admin may also want a regular user account.

- Scalability: When designing this project scalability is a major concern as the requirements grow. To combat this I have implemented good code design pratices for example single responsibility princaple and restful archetecture. I have also implemented elements in the website for example popups to see aditional parrameters, and good use of components.

The Initial Wireframe of the project with some of these attributes is visable here (please note this is the initial design and doesn't reflect the final design and state of the project):


## Structure:

### FrontEnd:
created using a vite template.
#### /src/:
- /App.jsx: initialises our pages and defines the routes beween them('/','/signin','/admin')

- /pages/: contains main .jsx component for each page(Admin,Landing,Signin)

- /components/: contains suplementary components used by /src/pages

- /styles/: contains CSS styles used by the components

- /services/: contains services used for querying the backend

### Backend:
#### index.js:
- Main JavaScript file used by our application, is executed on launch
#### /config/mongoDB.js:
- create a connection between the backend and mongodb server

#### /routers/:
-    defines endpoint for different user quiries

#### /controllers/:
-   controlls the data manipulation of http requests and responses

#### /services/:
-   used to quirey mongoDB and return responses. To do this it uses mongoose

#### /models/:
-   contains the mongoose schemas and objects for different objects stored in the database


## Getting Started:
To run the dev verson of the application we will need to proform initialisation for both the frontend and backend.

### General:
1. clone the project (git Clone)

### Frontend:
1. In the 'frontend' folder run 'npm install'
2. In the 'frontend' folder run 'npm run dev'

### Backend:
1. In the 'frontend' folder run 'npm install'
2. .env file is required to run this application to be in the 'backend' directory. It contains the URI for the database, A prefered port for the backend to run on and the secret key for generating jwt auth tokens. it can be created with the template here:
<br>
<br>
MONGODB_URI  = {MongoDB URI HERE}
<br>
PORT = {PortNum}
<br>
JWT_SECRET = "{secret here}"

3. In the 'backend ' folder run 'npm run dev'




