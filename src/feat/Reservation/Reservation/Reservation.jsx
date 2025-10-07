
import { useState } from 'react';
import './Reservation.css'
import { ReservationStep } from '../Components/Steps/ReservationStep';
import {ContactStep} from '../Components/Steps/ContactStep';
import { useForm } from "react-hook-form";
import { ReservationConfig } from '../configs/Reservation';
import { ContactConfig } from '../configs/Contact';

const STEPS = [{Component: ReservationStep, config: ReservationConfig}, {Component: ContactStep, config: ContactConfig}];

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

    const goBack = () => {
        setStep((prevStep) => {
            return prevStep - 1;
        })
    }

    const [step, setStep] = useState(1);
    const stepInfo = STEPS[step];
    const {Component, config} = stepInfo;

    return <Component handleSubmit={handleSubmit(onSubmit)} config={config} formHelpers={{
        register,
        errors,
        setValue,
        formData,
        goBack,
    }}/>;
}

export {Reservation};