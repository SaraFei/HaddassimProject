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

const getCntActivePatients = async (req, res) => {

    let today = Date.now();
    let before30Days = new Date(today);
    before30Days.setDate(before30Days.getDate() - 30);
    
    
    let datesArr = [30];
    let thisPatient;
    try {
        let allPatients = await patientModel.find({});
        for (let i = 0; i < allPatients.length; i++) {
            if (allPatients[i].positiveDate) {
                thisPatient = allPatients[i];
                if (!thisPatient.recoveryDate) {//sick yet
                    for (let i = 0; i < 30; i++) {
                        datesArr[i]++;
                    }
                }
                else if (thisPatient.recoveryDate <= today && thisPatient.positiveDate >= before30Days) {
                    let start = thisPatient.positiveDate.getDay();
                    let end = thisPatient.recoveryDate.getDay();
                    for (let i = start; i < end; i++) {
                        datesArr[i]++;

                    }
                }
                else if (thisPatient.recoveryDate <= today && thisPatient.positiveDate < before30Days) {
                    let end = thisPatient.recoveryDate.getDay();
                    for (let i = 0; i < end; i++) {
                        datesArr[i]++;

                    }
                }
            }

        }
       return res.json(datesArr);
    }
catch(error){
    res.status(400).json({ type: 'get error cnt active patients', message: 'cannot get count active patients' });
}

}
export { howManyVaccinated, getCountPatients, getCntActivePatients };