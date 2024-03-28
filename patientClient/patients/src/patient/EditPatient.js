//In this compound we have the option to edit a health insurance member,
//using react hook form
//(Only the editable ones are shown)


import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import { upDatePatient } from "./patientApi";
import "./style/EditPatient.css"



const EditPatient = () => {
    let location = useLocation();
    let patient = location.state;
    let numFieldVaccine = patient.receivingVaccineDate;
    let ArrayEdit = patient.receivingVaccineDate;
    let navigate = useNavigate();


    let [addVaccine, setAddVaccine] = useState(false);
    let [errorVaccinArr, setErrorVaccinArr] = useState(false);
    let [errorRecovery, setErrorRecovery] = useState(false);

    const { register, handleSubmit, formState: { errors }, watch } = useForm({
        defaultValues: {
            firstName: patient.firstName,
            lastName: patient.lastName,
            address: {
                city: patient.address.city,
                street: patient.address.street,
                houseNum: patient.address.houseNum
            },
            telephonNum: patient.telephonNum,
            phonNum: patient.phonNum,
            positiveDate: patient.positiveDate,
            recoveryDate: patient.recoveryDate,
        }
    });


    const onSubmit = async (data) => {
        let { firstName, lastName, telephonNum, phonNum, address, positiveDate, recoveryDate,
            date, manufacturer } = data;
        let patientToEdit = {
            firstName, lastName, address, telephonNum, phonNum
        };
        if (date == '' && manufacturer == '') {
            date = null;
            manufacturer = null;
        }
        if (recoveryDate != "") {
            patientToEdit.recoveryDate = recoveryDate;
        }
        if (positiveDate != "") {
            patientToEdit.positiveDate = positiveDate;
        }

        if (date && manufacturer) {
            let vaccineEntry = { date, manufacturer };
            await ArrayEdit.push(vaccineEntry);
            patientToEdit.receivingVaccineDate = ArrayEdit;

        }
        if (!date && manufacturer || !manufacturer && date) {
            setErrorVaccinArr(true);
        }
        if (!positiveDate && recoveryDate) {
            setErrorRecovery(true);
        }
        const userConfirmation = window.confirm('האם אתה בטוח שברצונך לעדכן את הפרטים?');
        if (userConfirmation) {
            try {
                console.log("patientToEdit before update:", patientToEdit);
                const response = await upDatePatient(patient._id, patientToEdit);
                alert("החבר עודכן בהצלחה!");
                console.log("updated by success");
                console.log("Updating patient with data:", patient._id, patientToEdit);

                navigate('/allpatients')

            }
            catch (error) {
                console.log(error)
                if (error.response.request.status === 404 && error.response.data.type === "patient error") {
                    console.log(" didnt found a patient with such id");
                }
                if (error.response.request.status === 403 && error.response.data.type === "error validate") {
                    console.log("One of the fields you entered was not filled in correctly");
                }
                else {
                    console.error('Failed to register:', error);
                }

            }
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} >

            <h2>  <label >שם פרטי</label>
                <input type='text'{...register('firstName', { required: "שם פרטי זהו שדה חובה", pattern: { message: "שם מורכב רק מאותיות", value: /^[A-Za-zא-ת\s]+$/ } })} />
                {errors.firstName && <p>{errors.firstName.message}</p>}</h2>
            <h2>       <label >שם משפחה</label>
                <input type='text' {...register('lastName', { required: "שם משפחה הוא שדה חובה", pattern: { message: "שם מורכב רק מאותיות", value: /^[A-Za-zא-ת\s]+$/ } })} />
                {errors.lastName && <p>{errors.lastName.message}</p>}
            </h2>

            <h2>  <label > מס' טלפון</label>
                <input type='text' {...register('telephonNum', { required: "טלפון זהו שדה חובה", pattern: { message: "מספר טלפון באורך 9 ספרות וחייב להתחיל ב0   ", value: /^0\d{8}$/ } })} />
                {errors.telephonNum && <p>{errors.telephonNum.message}</p>}</h2>
            <h2>   <label > מס' נייד</label>
                <input type='text'   {...register('phonNum', { required: "נייד זהו שדה חובה", pattern: { message:  "מספר טלפון באורך 10 ספרות וחייב להתחיל ב05 ", value: /^05\d{8}$/ } })} />
                {errors.phonNum && <p>{errors.phonNum.message}</p>}</h2>
            כתובת:
            <h2> <label> עיר </label>
                <input type='text'  {...register('address.city', { required: "עיר זהו שדה חובה", pattern: { message: "אותיות בלבד", value: /^[A-Za-zא-ת\s]+$/ } })} />
                {errors.city && <p>{errors.address.city.message}</p>} </h2>
            <h2> <label> רחוב </label>
                <input type='text' {...register('address.street', { required: "רחוב הוא שדה חובה", pattern: { message: "אותיות בלבד", value: /^[A-Za-zא-ת\s]+$/ } })} />
                {errors.street && <p>{errors.address.street.message}</p>} </h2>
            <h2> <label > מס' בית </label>
                <input type='text'  {...register('address.houseNum', { required: "מספר בית הוא שדה חובה", pattern: { message: " מספרים בלבד!", value: /^[0-9]/, maxLength: 3 } })} />
                {errors.houseNum && <p>{errors.address.houseNum.message}</p>} </h2>



            {!patient.positiveDate && <h2><label > תאריך בו נמצא חיובי לנגיף </label>
                <input type='date' {...register('positiveDate', { min: { value: watch('dob'), message:"  תאריך   חייב להיות אחרי תאריך לידה"  } }, { max: { value: new Date().toISOString().split("T")[0], message: "תאריך החלמה חייב להיות גדול מהיום" } })} />
                {errors.positiveDate && <p>{errors.positiveDate.message}</p>}</h2>}


            {!patient.recoveryDate && <h2>  <label > תאריך החלמה </label>
                <input type='date' {...register('recoveryDate', { min: { value: watch('positiveDate'), message: " תאריך החלמה אחרי תאריך קבלת הנגיף "} }, { max: { value: new Date().toISOString().split("T")[0], message:  " תאריך החלמה אחרי תאריך קבלת הנגיף " } }, { max: { value: new Date().toISOString().split("T")[0], message: "תאריך החלמה לא יכול להיות גדול מהיום"  } })} />
                {errorRecovery && <p>לא ניתן להכניס תאריך החלמה ללא תאריך קבלת הנגיף</p>}
                {errors.recoveryDate && <p>{errors.recoveryDate.message}</p>}</h2>
            }


            מס החיסונים שקיבל:{numFieldVaccine.length}
            {patient.receivingVaccineDate.length < 4 ? <input type="button" value="להוספת חיסון" onClick={() => { setAddVaccine(true) }} /> : <h2>לא ניתן להוסיף מעל 4 חיסונים</h2>}
            {addVaccine && <><h2>

                <label>  תאריך קבלת חיסון</label>
                <input type="date"  {...register('date', { min: { value: watch('dob'), message: "  תאריך   חייב להיות אחרי תאריך לידה" } }, { max: { value: new Date().toISOString().split("T")[0], message:  " תאריך החלמה אחרי תאריך קבלת הנגיף " } }, { max: { value: new Date().toISOString().split("T")[0], message: "תאריך קבלת חיסון לא יכול להיות גדול מהיום"  } })} /></h2>
                <p>{errors.date?.message}</p>
                <select {...register('manufacturer')}>
                    <option value={null}>{null} </option>
                    <option value="Moderna" >Moderna</option>
                    <option value="Pfizer">Pfizer</option>
                    <option value="AstraZeneca">AstraZeneca (Vaxzevria)</option>
                    <option value="Johnson & Johnson">Johnson & Johnson (Janssen)</option>
                    <option value="Sinovac">Sinovac (CoronaVac)</option>
                    <option value="Sinopharm">Sinopharm (BBIBP-CorV)</option>
                    <option value="Bharat Biotech">Bharat Biotech (Covaxin)</option>
                </select>
                {errorVaccinArr && <p>חובה למלאות את שני שדות פרטי החיסון</p>}
            </>}



            <button type="submit"> עדכן פרטים</button>
        </form>
    );
}

export default EditPatient;