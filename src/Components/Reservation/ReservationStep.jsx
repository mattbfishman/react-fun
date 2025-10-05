import { Modal } from "./Modal";
import {PeopleDialog} from './PeopleDialog';
import {TimeDialog} from './TimeDialog';
import { DatePicker } from "./DatePicker";
import { Error } from "./Error";

function ReservationStep({handleSubmit, register, errors}) {
    return (
        <form className="main" onSubmit={(e) => handleSubmit(e)}>
            <div className="header">Book A Table</div>
            <div className="subheader">This is where you'll add the details of your booking</div>
            <Modal name='people' className="modal" label={'People'} Dialog={PeopleDialog} register={register}/>
            <Error message={errors?.people?.message} />
            <DatePicker className="modal" label={'Date'} register={register} />
            <Error message={errors?.date?.message} />
            <Modal name='time' className="modal" label={'Time'} open={'13:00'} closed={'24:00'} increments={15} Dialog={TimeDialog} register={register}/>
            <Error message={errors?.time?.message} />

            <button type='submit' className="submitButton">Book Table</button>
        </form>
    )
}

export {ReservationStep};