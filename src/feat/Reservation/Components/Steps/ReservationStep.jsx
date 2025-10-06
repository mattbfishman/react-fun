import { Modal } from "../Modal/Modal";
import {PeopleDialog} from '../Dialogs/PeopleDialog';
import {TimeDialog} from '../Dialogs/TimeDialog';
import { DatePicker } from "../DatePicker/DatePicker";
import { Error } from "../../../../Components/Error";

function ReservationStep({handleSubmit, formHelpers}) {
    return (
        <form className="ReservationStepForm" onSubmit={(e) => handleSubmit(e)}>
            <div className="ReservationStepForm__header">Book A Table</div>
            <div className="ReservationStepForm__subheader">This is where you'll add the details of your booking.</div>
            <div className="ReservationStepForm_modalContainer">
                <Modal name='people' className="ReservationStepForm__modal" label={'People'} Dialog={PeopleDialog} {...formHelpers}/>
                <Error message={formHelpers?.errors?.people?.message} />
            </div>
            <div className="ReservationStepForm_modalContainer">
                <DatePicker className="ReservationStepForm__modal" label={'Date'} {...formHelpers} />
                <Error message={formHelpers?.errors?.date?.message} />
            </div>
            <div className="ReservationStepForm_modalContainer">
                <Modal name='time' className="ReservationStepForm__modal" label={'Time'} open={'13:00'} closed={'24:00'} increments={15} Dialog={TimeDialog} {...formHelpers}/>
                <Error message={formHelpers?.errors?.time?.message} />
            </div>

            <button type='submit' className="ReservationStepForm__button ReservationStepForm__button--submit">Book Table</button>
        </form>
    )
}

export {ReservationStep};