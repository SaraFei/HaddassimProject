//This component is responsible for importing the patients from the server
// and saving them in the local state

import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { getAllPatients, getPatientCntFromServer } from "./patientApi";
import SignlePatient from "./SignlePatient";

//mui paginaation
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const AllPatients = () => {

  let [allPatients, setAllPatients] = useState([]);
  let [flag, setFlag] = useState(false);
  let [currentPage, setCurrentPage] = useState(1);
  let [cntOfPatient, setCntOfPatient] = useState(0);
  useEffect(() => {
    getAllPatients(currentPage,9).then(
      res => {
        setAllPatients(res.data);
      }
    ).catch((err => {
      console.log("   cannot bring the patients from server", err)

    }))
  }, [flag, currentPage])
  useEffect(() => {
    getPatientCntFromServer()
      .then(res => {
        setCntOfPatient(res.data.count);
      })
      .catch(err => {
        console.log(err);
      })
  }, [flag])

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (<>
    <div style={{ display: 'grid', marginTop: "2%", marginLeft: "0.5%", gridTemplateColumns: "1fr 1fr 1fr" }}>
      {allPatients.map(item => <SignlePatient key={item.id} signlePatient={item} setFlag={setFlag} />

      )}

      <Stack spacing={2} style={{ alignItems: "self-start" }}>
        <Pagination count={(cntOfPatient / 9) % 1 == 0 ? (cntOfPatient / 9) : Math.floor(cntOfPatient / 9) + 1} page={currentPage} onChange={handleChange} />
      </Stack>
      <Outlet /></div>
  </>);
}

export default AllPatients;