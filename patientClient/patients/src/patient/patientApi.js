//In this compound we have calls to server.
// This is basically the connection between the client and the server

import axios from "axios";


let baseUrl = "http://localhost:8000/api/patient";

export const getAllPatients = (page) => {
    return axios.get(`${baseUrl}?page=${page}`);
}

export const getPatientById = (id) => {
    return axios.get(`${baseUrl}/${id}`);
}
export const deletePatient = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
}
export const upDatePatient = (id, updatedPatient) => {
    return axios.put(`${baseUrl}/${id}`, updatedPatient);
}
export const addPatient = (patient) => {
    return axios.post(baseUrl, patient)
}
export const getCntUnVaccinFromServer = () => {
    return axios.get("http://localhost:8000/api/cnt");
}

export const getPatientCntFromServer = () => {
    return axios.get("http://localhost:8000/api/cntpatient");
}
export const getActivePatientFromServer=()=>{
    return axios.get("http://localhost:8000/api/active");
}