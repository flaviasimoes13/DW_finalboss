# Recipe WebApp

This is a recipe app project developed with **Next.js**.

## Requirements

Before starting the project, make sure you have Node.js and npm installed on your machine. If not, you can install them from https://nodejs.org/.

## Installation

1. **Clone the repository:**

   If you haven't done it yet, start by cloning the repository to your local machine.

   git clone https://github.com/flaviasimoes13/DW_finalboss.git


2. **Connect to the database:**

   Open CMD

   Navigate to the project directory:

   cd [path]\DW_finalboss\
   
   Run: mongod --dbpath database --port 27017


3. **Import the collections to the database:**
   
   Create a database called "recipes" in mongoDB 
   
   Add the attached json files in the DW "files folder" as collections to "recipes".


4. **Install the dependencies:**

   Navigate to the project directory:

   cd [path]\DW_finalboss\code

   Then, install the necessary dependencies:

   npm install


## Running the App

To start the server locally, just run the following commands in cd [path]\DW_finalboss\code

npm run build

npm run start

The app will be available at http://localhost:3000 by default, unless the terminal says otherwise.


## Project Structure

Here's an overview of the project structure:

/public         # Contains images, fonts, and static files


/app            # Contains the app's components, different pages, general layout, styles, and a pages/api folder
   |
   /components     # Contains reusable components

   page.js
   /myRecipes
   /quickRecipes   # Sections pages
   /recipe

   /pages/api     # Contains calls to the database


## Features

- **Quick Recipe Viewing**: Users can browse and view recipes that are made under 35mins.
- **User-Created Recipes**: Each user can access the recipes they created.
- **Tabs in the Sidebar**: The sidebar menu displays some default sections and some user created sections, making navigation easier.
- **Meal Planning Section**: The "Add Section" feature allows users to create a new tab for meal planning (e.g., Tuesday). Users can add recipes for each day and generate a list of ingredients for each recipe, creating a ready-to-use shopping list.
- **Recipe Details Page**: By clicking on a recipe, the user is taken to a page where they can view the full list of ingredients and step-by-step instructions.



## Technologies Used

- **React**: A library for building user interfaces.
- **Next.js**: A framework for React that facilitates server-side rendering and the creation of optimized web apps.