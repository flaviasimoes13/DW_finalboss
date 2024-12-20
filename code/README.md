# Recipe WebApp

This is a recipe app project developed with **Next.js**.

## Requirements

Before starting the project, make sure you have Node.js and npm installed on your machine. If not, you can install them from https://nodejs.org/.

## Installation

1. **Clone the repository:**:

   If you haven't done it yet, start by cloning the repository to your local machine.

   git clone https://github.com/flaviasimoes13/DW_finalboss.git

2. **Install the dependencies:**:

   Navigate to the project directory:

   cd [path]\DW_finalboss\code

   Then, install the necessary dependencies:

   npm install

## Running the App

To start the development server locally, just run the following command:

npm run dev

The app will be available at http://localhost:3000.

## Available Scripts

In the project directory, you can run the following commands:

   - npm run dev: Starts the development server.
   - npm run build: Creates an optimized production version of the app.
   - npm run start: Starts the app in production mode (after running npm run build).

## Project Structure

Here's an overview of the project structure:

/pages          # Contains the app's pages
/components     # Contains reusable components
/public         # Contains images, fonts, and static files
/styles         # Global styles


## Features

- **Quick Recipe Viewing**:Users can browse and view recipes quickly.
- **User-Created Recipes**: Each user can access the recipes they created.
- **Tabs in the Sidebar**: The sidebar menu displays all the user's recipes, making navigation easier.
- **Meal Planning Section**: The "Add Section" feature allows users to create a new tab for meal planning (e.g., Tuesday). Users can add recipes for each day and generate a list of ingredients for each recipe, creating a ready-to-use shopping list.
- **Recipe Details Page**: By clicking on a recipe, the user is taken to a page where they can view the full list of ingredients and step-by-step instructions.

## Technologies Used


- **React**: A library for building user interfaces.
- **Next.js**: A framework for React that facilitates server-side rendering and the creation of optimized web apps.

## Contribution

If you'd like to contribute to this project, follow these steps:

Fork the repository.
Create a new branch for your changes.
Create a pull request describing the changes made.
This project was started with the command [`create-next-app`]

## Getting Started

First, start the development server:

npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

Open http://localhost:3000 in your browser to see the result.

You can start editing the page by modifying the app/page.js file. The page will update automatically as you edit the file.

This project uses next/font to automatically optimize and load the Geist font, a new font family for Vercel.

## Learn More

To learn more about Next.js, check out the following resources:

- Next.js Documentation - Learn about Next.js features and API.
- Learn Next.js - An interactive tutorial on Next.js.

You can check out the Next.js repository on GitHub - your feedback and contributions are welcome!

## Deployment on Vercel

The easiest way to deploy your Next.js app is to use the Vercel platform, created by the developers of Next.js.

Check out our Next.js deployment documentation for more details.