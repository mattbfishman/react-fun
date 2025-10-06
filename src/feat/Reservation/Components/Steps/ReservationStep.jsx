import { Modal } from "../Modal/Modal";
import {PeopleDialog} from '../Dialogs/PeopleDialog';
import {TimeDialog} from '../Dialogs/TimeDialog';
import { DatePicker } from "../DatePicker/DatePicker";
import { Error } from "../../../../Components/Error";

function ReservationStep({handleSubmit, formHelpers}) {
    return (
        <form className="main" onSubmit={(e) => handleSubmit(e)}>
            <div className="header">Book A Table</div>
            <div className="subheader">This is where you'll add the details of your booking</div>
            <Modal name='people' className="modal" label={'People'} Dialog={PeopleDialog} {...formHelpers}/>
            <Error message={formHelpers?.errors?.people?.message} />
            <DatePicker className="modal" label={'Date'} {...formHelpers} />
            <Error message={formHelpers?.errors?.date?.message} />
            <Modal name='time' className="modal" label={'Time'} open={'13:00'} closed={'24:00'} increments={15} Dialog={TimeDialog} {...formHelpers}/>
            <Error message={formHelpers?.errors?.time?.message} />

            <button type='submit' className="submitButton">Book Table</button>
        </form>
    )
}

export {ReservationStep};