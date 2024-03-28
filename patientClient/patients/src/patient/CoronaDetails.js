//mui-graph

import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { getActivePatientFromServer, getCntUnVaccinFromServer, getPatientCntFromServer } from './patientApi';
import { useState } from 'react';
import { useEffect } from 'react';

const CoronaDetails = () => {

    let [activeDate, setActiveDate] = useState([]);
    let [cntOfUnVacc, setCntOfUnVacc] = useState(null);
    let [cntOfPatient, setCntOfPatient] = useState(0);

    useEffect(() => {
        getActivePatientFromServer()
            .then(res => {
                setActiveDate(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, [])


    useEffect(() => {
        getCntUnVaccinFromServer()
            .then(res => {
                setCntOfUnVacc(res.data.cnt);
            })
            .catch(err => {
                console.log("לא הצליח להביא את מספר הפציינטים שאינם מחוסנים מהשרת", err);
            });
    }, []);
    useEffect(() => {
        getPatientCntFromServer()
          .then(res => {
            setCntOfPatient(res.data.count);
          })
          .catch(err => {
            console.log(err);
          })
      }, [])
    
      
    return (

        <>
        <div style={{ fontSize: "50px", marginTop: "3px", color: "cyan" }}>חולים פעילים ליום🤒:</div>

            <LineChart
                xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30] }]}
                series={[
                    {
                        data: activeDate,
                    },
                ]}
                width={500}
                height={300}
            />
<h2 style={{color: "cyan"}}>חולים לא מחוסנים:{cntOfUnVacc}</h2>
<h2 style={{color: "cyan"}}>  מתוך בסך הכל חולים:{cntOfPatient}</h2>
        </>
    );
}

export default CoronaDetails;