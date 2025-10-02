import { Modal } from "./Modal";
import {PeopleDialog} from './PeopleDialog';
import {TimeDialog} from './TimeDialog';
import { DatePicker } from "./DatePicker";

function ReservationStep() {

    const handleSubmit = () => {
    }
    return (
        <form className="main" onSubmit={() => handleSubmit()}>
            <div className="header">Book A Table</div>
            <div className="subheader">This is where you'll add the details of your booking</div>
            <Modal name='people' className="modal" label={'People'} Dialog={PeopleDialog}/>
            <DatePicker className="modal" label={'Date'}/>
            <Modal name='time' className="modal" label={'Time'} open={'13:00'} closed={'24:00'} increments={15} Dialog={TimeDialog}/>
            <button type='submit' className="submitButton">Book Table</button>
        </form>
    )
}

export {ReservationStep};