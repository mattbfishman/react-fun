
import { useState } from 'react';
import './Reservation.css'
import { ReservationStep } from './ReservationStep';
import { useForm } from "react-hook-form";

const STEPS = [ReservationStep];

function Reservation (){
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    
    console.log(errors);
    const [step, setStep] = useState(0);
    const StepElement = STEPS[step];

    return <StepElement handleSubmit={handleSubmit(onSubmit)} register={register} errors={errors}/>;
}

export {Reservation};