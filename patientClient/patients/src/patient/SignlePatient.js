//This component accepts a single patient in the profile and displays his basic details,
//including the option to delete, edit, and display additional details

import { Link, useNavigate } from "react-router-dom";
import { deletePatient } from "./patientApi";


//mui-card
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SignlePatient = ({ signlePatient, setFlag }) => {

    let navigate = useNavigate();

    return (<>


        <div style={{ margin: "10px" }}>
            <Card sx={{ minWidth: 275 }} style={{ width: "80%" }} >
                <CardContent >
                    <Typography sx={{ fontSize: 32 }} color="text.secondary" gutterBottom  >
                        {signlePatient.lastName} {signlePatient.firstName}
                    </Typography >

                    <Typography component="div" variant>
                        {signlePatient.id}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {signlePatient.address.city}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`patientDetails/${signlePatient._id}`} state={signlePatient} >
                        <Button size="small">לפרטים נוספים</Button>
                    </Link>
                </CardActions>

                <Link to={`/edit/${signlePatient._id}`} state={signlePatient}>
                    <Button size="small">ערוך פרטי חבר </Button>
                </Link>
                <Button size="small" onClick={() => {
                    const userConfirmation = window.confirm('האם אתה מעוניין למחוק?');
                    if (userConfirmation) {
                        deletePatient(signlePatient._id).then(
                            alert('נמחק בהצלחה'),
                            setFlag(true),
                            console.log("החבר נמחק בהצלחה", signlePatient.id),

                            setTimeout(() => { navigate('/allpatients') }, 1000)
                            // navigate('/')
                        ).catch(
                            (error) => {
                                if (error.response.request.status === 404 && error.response.data.type === "patient error") {
                                    console.log(error.response.data.message);
                                }
                                if (error.response.request.status === 400 && error.response.data.type === "error id") {
                                    console.log("id is not valied");
                                    console.log(error.response.data.message);
                                }
                            }
                        )
                    }
                }
                } >למחיקת  חבר </Button>
            </Card>
        </div>
    </>);
}

export default SignlePatient;