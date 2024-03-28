# HMO Corona System

This project is a comprehensive system designed to manage a health fund for corona patients. It facilitates various actions such as adding, updating, and deleting members, as well as viewing all members' details at a glance.

## Description

The system provides the following functionalities:

1. **Adding a Friend**: Allows adding a new member to the health fund system.
2. **Deleting a Friend**: Enables removing a member from the system.
3. **Updating Member Details**: Allows updating member information, including vaccination status, date of receiving the virus, etc.
4. **Viewing Members**: Provides a comprehensive view of all members, including their personal details.

## Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org)
- [MongoDB](https://www.mongodb.com)
- [React](https://react.dev/)

## Dependencies

### Frontend (React)

- **react**: A JavaScript library for building user interfaces.
- **react-dom**: React package for working with the DOM.
- **react-router-dom**: Declarative routing for React applications.
- **axios**: Promise-based HTTP client for the browser and Node.js.
- **react-hook-form**: Performant, flexible, and extensible forms with easy-to-use validation.
- **styled-components**: Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress.
- **web-vitals**: Easily measure performance metrics of your website.

### UI Frameworks and Libraries

- **@mui/icons-material**: Material-UI icons as React components.
- **@mui/material**: React components that implement Google's Material Design.
- **@mui/styled-engine-sc**: A Material-UI styled engine for styled-components.
- **@emotion/react**: CSS-in-JS library designed for high performance style composition.
- **@emotion/styled**: Styled component implementation for Emotion.

## Backend Dependencies

- **cors**: CORS is a Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
- **dotenv**: Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
- **express**: Express is a fast, unopinionated, minimalist web framework for Node.js.
- **joi**: Joi is a powerful schema description language and data validator for JavaScript.
- **mongoose**: Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.

## Environment Variables

This project uses an `.env` file to manage environment variables. Below are the variables used and their descriptions:

- **PORT**: The port number on which the server will run. Default value is `8000`.
- **DB_NAME**: The name of the MongoDB database used by the project. Default value is `HMO`.
- **DB_CONNECTION**: The connection string for connecting to the MongoDB database. This should include the necessary credentials and connection details.

Make sure to create an `.env` file in the root directory of your project and populate it with the appropriate values.

## API Documentation

### CRUD Operations

| CRUD   | Response              | Description             | Method | Body | URL             | Query Params    |
|--------|-----------------------|------------------------|--------|------|-----------------|------------------|
| Create | New Patient object    | Add a new patient to the system | POST   | JSON Object | /api/patient   | -----            |
| Read   | List of Patients      | Retrieve a list of all patients | GET    | -----        | /api/patient   | Optional: `page`, `perPage`, `search` |
| Read   | Single Patient by ID  | Retrieve details of a specific patient | GET    | -----        | /api/patient/:id | -----          |
| Update | Updated Patient object| Update an existing patient | PUT    | JSON Object | /api/patient/:id | -----          |
| Delete | Deleted Patient object| Delete a patient from the system | DELETE | -----        | /api/patient/:id | -----          |
| Read   | Count of Unvaccinated Patients | Count | GET    | -----        | /api/cnt        | -----          |
| Read   | Count of All Patients | Count | GET    | -----        | /api/cntpatient | -----          |

### Additional Notes

To retrieve a patient by ID, enter the patient's ID, not the MongoDB ID.

## Request and Response Examples

### Create Patient (POST /api/patient)

```json
{
  "firstName": "מיכל",
  "lastName": "גרוס",
  "id": "555877222",
  "dob": "2024-03-25T00:00:00.000Z",
  "telephonNum": "036199584",
  "phonNum": "0504174882",
  "receivingVaccineDate": [
    {
      "date": "2024-03-28T00:00:00.000Z",
      "manufacturer": "Moderna",
      "_id": "66042d16f9830e4b0751d61a"
    }
  ],
  "positiveDate": "2024-03

-02T22:00:00.000Z",
  "recoveryDate": "2024-02-29T22:00:00.000Z"
}
```

### Update Patient Status (PUT /api/patient/:id)

```json
{
  "firstName": "מיכל",
  "lastName": "גרוס",
  "telephonNum": "036199584",
  "phonNum": "0504174882",
  "receivingVaccineDate": [
    {
      "date": "2024-03-28T00:00:00.000Z",
      "manufacturer": "Moderna",
      "_id": "66042d16f9830e4b0751d61a"
    }
  ]
}
```

### Additional Notes

To update a patient, you may enter the following fields: firstName, lastName, telephonNum, phonNum, receivingVaccineDate. If any of these fields are not filled, you may update positiveDate and recoveryDate.

## Usage

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/your-project.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the server:

   ```bash
   npm start
   ```

## Screenshots

Here are some screenshots of the project:

![All Patients](https://github.com/SaraFei/HaddassimProject/blob/master/images/allPatients.png)

![Pagination](https://github.com/SaraFei/HaddassimProject/blob/master/images/pagination.png)

![Edit](https://github.com/SaraFei/HaddassimProject/blob/master/images/edit.png)

![Validation](https://github.com/SaraFei/HaddassimProject/blob/master/images/validation%20(2).png)

![Validation](https://github.com/SaraFei/HaddassimProject/blob/master/images/validation.png)

![Delete](https://github.com/SaraFei/HaddassimProject/blob/master/images/delete%20(2).png)

![After Delete](https://github.com/SaraFei/HaddassimProject/blob/master/images/afterDeletePatient.png)

![Delete](https://github.com/SaraFei/HaddassimProject/blob/master/images/delete.png)

![Details](https://github.com/SaraFei/HaddassimProject/blob/master/images/details%20(2).png)

![Details](https://github.com/SaraFei/HaddassimProject/blob/master/images/details%20(3).png)

![Details](https://github.com/SaraFei/HaddassimProject/blob/master/images/details%20(4).png)

![Details](https://github.com/SaraFei/HaddassimProject/blob/master/images/details.png)
