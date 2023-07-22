# Project Name
Welcome to the client of my MERN project called web-personal-client.

# Description
This project is a personal website developed using the MERN stack, which combines MongoDB, Express.js, React.js and Node.js technologies. The main goal of this application is to provide a platform for displaying personal information and sharing relevant resources.

## Home Page
![home-page](https://github.com/BrayanFSanchez/MERN-web-personal-client/assets/49698030/313ab973-e77c-4cb4-a4df-a5e0f334248e)

# Installation
1. Clone the repository: https://github.com/BrayanFSanchez/MERN-web-personal-client.git
2. Navigate to the directory.
3. Install the dependencies using Yarn: yarn install or npm install.

# Configuration
1. Create a .env file in the root directory of the server.
2. Define the required environment variables, such as the database connection string or other project-specific configurations.

# Usage
Once you have cloned or downloaded the project, you can use the following command line commands to interact with the application:

npm install: This command will install all the necessary dependencies for the project.

npm start: By executing this command, the application will start in development mode. It will automatically open in your default browser at http://localhost:3000. Here you will be able to view and test the application in real time, and any changes you make to the code will be reflected automatically.

npm run build: Use this command when you are ready to compile and build the production version of the application. This will generate a build folder containing all the optimized files ready to be deployed to a web server.

# Main functionalities
1. User Authentication: The application allows users to securely authenticate themselves. This involves the implementation of a registration and login system, where users can create an account and access their personalized profile.

![login](https://github.com/BrayanFSanchez/MERN-web-personal-client/assets/49698030/80b26e4f-61d5-478c-be58-d2c5e90f00f4)

2. Administration Dashboard: The project has a dashboard to manage various sections, including:

* Users: Allows the management of registered user information, such as editing profiles, roles and permissions.

* Menus: Provides the ability to manage and customize the navigation menus of the application.

* Courses: Allows adding, editing and deleting scheduling courses available to users.

* Newsletters: Provides the option to create and send newsletters to subscribed users.

* Blogs: Allows managing and publishing blogs related to courses and programming topics.

![dashboard](https://github.com/BrayanFSanchez/MERN-web-personal-client/assets/49698030/5dc0471c-bfcf-4440-90f0-f184c3da65bf)

3. Attractive Home Page: The application has a well-designed and attractive home page. This page is used to invite visitors to learn more about you and the programming courses you offer. It can include relevant information about your experience, featured skills, testimonials from previous students and links to more details about the courses.

# Dependencies and requirements
* @tinymce/tinymce-react: Version ^4.3.0. This dependency provides a React.js integration for TinyMCE, a rich text editor. It allows you to incorporate rich text editing functionality into your application.

* dotenv: Version ^16.1.4. dotenv is a library that loads environment variables from an .env file. It allows you to store sensitive information, such as API keys or database credentials, securely and access them in your application.

* formik: Version ^2.4.1. Formik is a forms library in React.js that facilitates the creation and validation of forms. It provides a set of utilities and components that simplify the handling of forms in your application.

* jwt-decode: Version ^3.1.2. This dependency provides a function to decode JWT tokens (JSON Web Tokens) in your application. It is useful when you need to extract information from a JWT token, such as user ID or roles.

* lodash: Version ^4.17.21. Lodash is a JavaScript utility library that provides functions and methods for data manipulation, handling arrays, objects, strings and more. It is a useful tool to simplify and optimize the code in your application.

* luxon: Version ^3.3.0. Luxon is a JavaScript date and time manipulation library. It provides an easy-to-use API to perform date-related operations such as parsing, formatting, calculations and manipulations.

* react-dropzone: Version ^14.2.3. React-dropzone is a library that provides a UI component for dragging and dropping files. It makes it easy to implement file upload functionality in your application.

* react-router-dom: Version ^6.11.2. React-router-dom is a library that facilitates the creation of routes and navigation in your React.js application. It allows you to define routes and links between different components in a declarative way.

* sass: Version ^1.62.1. Sass is a CSS preprocessor that extends the standard CSS syntax and provides additional features, such as variables, mixins and nesting.

* semantic-ui-react: This dependency complements semantic-ui-css by providing React.js components corresponding to Semantic UI CSS styles. It allows you to use Semantic UI components directly in your React application without having to worry about manual DOM manipulation.

* yup: This dependency is a schema validation library for JavaScript. It provides an easy way to define and validate the form and structure of data in your application. You can define validation schemes with custom rules and use them to validate user input, data received from API and other cases where data integrity is important.
