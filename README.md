# StudyNotion - Ed-Tech Platform
StudyNotion is a versatile ed-tech platform designed to provide an immersive learning experience for students while offering a platform for instructors to showcase their expertise. Built using the MERN stack (MongoDB, Express.js, ReactJS, Node.js), StudyNotion facilitates the creation, consumption, and rating of educational content.
### [Live Link](https://studynotion-edtech-project.vercel.app/)
## Table of Contents

1. [System Architecture](#system-architecture)
2. [Front-end](#front-end)
3. [Back-end](#back-end)
4. [API Design](#api-design)
5. [Deployment](#deployment)
6. [Testing](#testing)
7. [Future Enhancements](#future-enhancements)
8. [Conclusion](#conclusion)

## System Architecture

StudyNotion follows a client-server architecture with three main components: front end, back end, and database. The front end, built using ReactJS, interacts with the back end (Node.js and Express.js) through RESTful API calls. MongoDB serves as the database, storing course content, user data, and other platform-related information.

## Front-end

The StudyNotion front end is developed with ReactJS, utilizing Figma for design. It includes pages for students, instructors, and potential future administrative functions. The front end incorporates ReactJS, CSS, Tailwind, Redux for state management, and VSCode as the development environment.

### [Figma Design](https://www.figma.com/file/Mikd0FjHKAofUlWQSi70nf/StudyNotion_shared)

- For Students: Homepage, Course List, Wishlist, Cart Checkout, Course Content, User Details, User Edit Details.
- For Instructors: Dashboard, Insights, Course Management Pages, View and Edit Profile Details.
- For Admin (Future Scope): Dashboard, Insights, Instructor Management, Other Relevant Pages.

### React Application Setup

To run the React application locally, follow these steps:

1. Open a terminal and navigate to the project directory.
2. Run the following command to install dependencies:

   ```bash
   npm install
   ```

3. After the installation is complete, run the following command to start the React application:

   ```bash
   npm start
   ```

   This will launch the application in your default web browser.

## Back-end

StudyNotion employs a monolithic architecture using Node.js, Express.js, and MongoDB. Features include user authentication, course management, payment integration, and cloud-based media management using Cloudinary. Bcrypt ensures password hashing, and Mongoose acts as the Object Data Modeling library for MongoDB.

### Data Models and Database Schema

- Student Schema: Name, Email, Password, Course Details.
- Instructor Schema: Name, Email, Password, Course Details.
- Course Schema: Course Name, Description, Instructor Details, Media Content.

## API Design

The RESTful API is implemented using Node.js and Express.js, following standard HTTP methods. JSON is used for data exchange, and JWT ensures secure authentication and authorization. Sample API endpoints include user authentication, course management, and rating functionality.

### [Sample API Requests and Responses](#api-design)

- `/api/auth/signup` (POST) - Create a new user account.
- `/api/auth/login` (POST) - Log in and generate a JWT token.
- `/api/courses` (GET) - Get a list of all courses.

## Deployment

StudyNotion is deployed on cloud-based services for scalability, security, and reliability. Vercel hosts the front end, while Render or Railway host the back end. Cloudinary manages media files, and MongoDB Atlas hosts the database.

### Hosting Environment and Infrastructure

- Vercel: Fast and scalable hosting for the front end.
- Render or Railway: Scalable and reliable infrastructure for the back end.
- Cloudinary: Reliable media storage with optimization features.
- MongoDB Atlas: Highly available and secure database environment.

## Testing

StudyNotion undergoes rigorous testing using various frameworks and tools to ensure functionality and performance. Types of testing include unit testing, integration testing, and end-to-end testing.

## Future Enhancements

StudyNotion has a roadmap for future enhancements, including gamification features, personalized learning paths, social learning features, a mobile app, machine learning-powered recommendations, and virtual reality/augmented reality integration.

### [Conclusion](#conclusion)

In conclusion, StudyNotion strives to provide an optimal learning experience, combining technology, functionality, and user-centric design. The ongoing development will address challenges and implement improvements to meet the evolving needs of students, instructors, and administrators.
