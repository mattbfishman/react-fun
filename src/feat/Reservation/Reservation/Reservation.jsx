
import { useState } from 'react';
import './Reservation.css'
import { ReservationStep } from '../Components/Steps/ReservationStep';
import {ContactStep} from '../Components/Steps/ContactStep';
import { useForm } from "react-hook-form";

const STEPS = [ReservationStep, ContactStep];

function Reservation (){
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [formData, setFormData] = useState({});
    const onSubmit = (data) => {
        setFormData(() => {
            return data;
        })
        setStep((prevStep) => {
            return prevStep + 1;
        })
    }

    const [step, setStep] = useState(0);
    const StepElement = STEPS[step];

    return <StepElement handleSubmit={handleSubmit(onSubmit)} formHelpers={{
        register,
        errors,
        setValue,
        formData
    }}/>;
}

export {Reservation};