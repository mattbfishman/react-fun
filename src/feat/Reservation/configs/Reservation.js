import { DatePicker } from "../Components/DatePicker/DatePicker";
import { PeopleDialog } from "../Components/Dialogs/PeopleDialog";
import { TimeDialog } from "../Components/Dialogs/TimeDialog";
import { Modal } from "../Components/Modal/Modal";

const ReservationConfig = [
    {
        name: 'people',
        labelText: 'People',
        Dialog: PeopleDialog,
        Component: Modal,
        className: 'ReservationStepForm__modal',
        errorMessage: 'People is required',
        componentType: 'modal'
    },
    {
        name: 'date',
        labelText: 'Date',
        Component: DatePicker,
        className: 'ReservationStepForm__modal',
        errorMessage: 'Date is required',
        componentType: 'datePicker'
    },
    {
        name: 'time',
        labelText: 'Time',
        Dialog: TimeDialog,
        Component: Modal,
        additionalProps: {
            open: '13:00',
            closed: '24:00',
            increments: 15
        },
        className: 'ReservationStepForm__modal',
        errorMessage: 'Time is required',
        componentType: 'modal'
    },
];

export {ReservationConfig}