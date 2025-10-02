
import { useState } from 'react';
import './Reservation.css'
import { ReservationStep } from './ReservationStep';

const STEPS = [<ReservationStep/>];

function Reservation (){
    const [step, setStep] = useState(0);
    const stepElement = STEPS[step];

    return stepElement;
}

export {Reservation};