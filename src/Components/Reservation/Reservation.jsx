import { Modal } from "./Modal";
import {PeopleDialog} from './PeopleDialog';
import {TimeDialog} from './TimeDialog';
import { DatePicker } from "./DatePicker";
import './Reservation.css'

function Reservation (){
    return (
        <div className="main">
            <div className="header">Book A Table</div>
            <div className="subheader">This is where you'll add the details of your booking</div>
            <Modal className="modal" label={'People'} Dialog={PeopleDialog}/>
            <DatePicker className="modal" label={'Date'}/>
            <Modal className="modal" label={'Time'} open={'13:00'} closed={'24:00'} increments={15} Dialog={TimeDialog}/>
            <button className="submitButton">Book Table</button>
        </div>
    );
}

export {Reservation};