React Application Setup Guide

This guide explains how to install Node.js and npm (if they are not already installed), create a React application, and run it locally.

Step 1: Check Node.js and npm Installation

Open your terminal or command prompt and execute:

bash
node -v
npm -v


If both commands display version numbers, Node.js and npm are installed. Continue to Step 3.

If the commands are not recognized, proceed to Step 2.

Step 2: Install Node.js and npm
Visit the official Node.js website: https://nodejs.org/
Download the LTS (Long-Term Support) version.
Run the installer.
Follow the installation instructions.
Ensure npm is included in the installation.
Restart your terminal.

Verify the installation:

bash
node -v
npm -v

Step 3: Create a React Application

Run the following command to create a new React project using Vite:

bash
npm create vite@latest my-react-app -- --template react


Here, my-react-app is the project name. You can replace it with your preferred name.

Step 4: Navigate to the Project Directory
bash
cd my-react-app

Step 5: Install Project Dependencies
bash
npm install


This command installs all the required dependencies for the React application.

Step 6: Start the React Development Server
bash
npm run dev


After starting the server, Vite will display a local URL, usually:

text
http://localhost:5173/


Open this URL in your browser to view your React application.

Step 7: Build the Application (Optional)

To create a production-ready build:

bash
npm run build


The generated production files will be available in the dist directory.

Step 8: Run the Production Preview (Optional)
bash
npm run preview

Quick Command Reference
Task	Command
Check Node.js	node -v
Check npm	npm -v
Create React app	npm create vite@latest my-react-app -- --template react
Navigate to project	cd my-react-app
Install dependencies	npm install
Start application	npm run dev
Build application	npm run build
Preview production build	npm run preview
Prerequisites
Node.js (LTS version)
npm (included with Node.js)
Code editor (VS Code recommended)
Web browser

Congratulations! Your React application is now ready for development.