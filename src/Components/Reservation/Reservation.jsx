
import { useState } from 'react';
import './Reservation.css'
import { ReservationStep } from './ReservationStep';
import {ContactStep} from './ContactStep';
import { useForm } from "react-hook-form";

const STEPS = [ReservationStep, ContactStep];

function Reservation (){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formData, setFormData] = useState({});
    const onSubmit = (data) => {
        setFormData(() => {
            return data;
        })
    }

    console.log(formData);
    const [step, setStep] = useState(0);
    const StepElement = STEPS[step];

    return <StepElement handleSubmit={handleSubmit(onSubmit)} register={register} errors={errors}/>;
}

export {Reservation};