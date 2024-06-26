import { patientModel } from "../model/patient.js";

//Return how many patients are not vaccited
const howManyVaccinated = async (req, res) => {
    let cnt = 0;
    try {
        let allPatients = await patientModel.find({});
        for (let i = 0; i < allPatients.length; i++) {
            if (allPatients[i].receivingVaccineDate.length === 0) {
                cnt++;
            }
        }
        return res.json({ cnt });
    }
    catch (error) {
        res.status(400).send({ type: "get cnt error", message: "error accur when get cnt of not vaccinated " })
    }
}

//retuen how many patients 
const getCountPatients = async (req, res) => {
    try {
        let patients = await patientModel.find({});
        let count = patients.length;
        return res.json({ count });
    }
    catch (err) {
        res.status(400).json({ type: 'get error', message: 'cannot get count all patients' });
    }
}


export { howManyVaccinated, getCountPatients };