
# Pserver address http://localhost:8000
<br/>

# Patient API Documentation

| CRUD   | Response              | Explain                 | Method | Send in Body | URL                  | Query Params    |
|--------|-----------------------|------------------------|--------|--------------|----------------------|------------------|
| Create | New Patient object       | Add a new patient to the system | POST   | JSON Object (see below) | /api/patient           | -----             |
| Read   | List of Patient         | Retrieve a list of all products | GET    | -----         | /api/patient           | Optional: `page`, `perPage`, `search` |
| Read   | Single Patient by ID     | Retrieve details of a specific Patient | GET    | -----         | /api/patient/:id       | -----             |
| Update | Updated Product object   | Update an existing product | PUT    | JSON Object (see below) | /api/Patient/:id       | -----             |
| Delete | Deleted Patient object   | Delete a Patient from the system | DELETE | -----         | /api/Patient/:id       | -----             |
| Read   | cnt of unVaccin      | count| GET    | -----         | /api/cnt     | -----             |
| Read   | cnt of all patients      | count| GET    | -----         | /api/cntpatient    | -----             |
## Additional Notes
In order to get a patientby ID enter the ID man not mongoose's ID:
<br/>

## Request and Response Examples

### Create patient (POST /api/patient)
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

  "positiveDate": "2024-03-02T22:00:00.000Z",
  "recoveryDate": "2024-02-29T22:00:00.000Z"
}
```
### Update patient Status (PUT /api/patient/:id)
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
## Additional Notes
In order to update a patient you may enter just this feilds:
<br/>
firstName,lastName,telephonNum,phonNum,receivingVaccineDate
<br/>
and if you didnt fill this feilds you may entry by update:positiveDate,recoveryDate
<br/>

## Usage

1. Install dependencies:
   ```bash
    npm install 
    npm i mongoose  
    npm i dotenv  
    npm i exppress  
    npm i cors  
    npm i joi
    ```

2. Run the server:
   ```bash
    npm start


![validation](C:\Users\USER\Pictures\Screenshots\images\validation.png?raw=true "Optional Title")