import { DatePicker } from "../Components/DatePicker/DatePicker";
import { PeopleDialog } from "../Components/Dialogs/PeopleDialog";
import { TimeDialog } from "../Components/Dialogs/TimeDialog";
import { Modal } from "../Components/Modal/Modal";

const ReservationConfig = [
    {
        name: 'people',
        label: 'People',
        Dialog: PeopleDialog,
        Component: Modal,
        className: 'ReservationStepForm__modal',
        errorMessage: 'People is required'
    },
    {
        name: 'date',
        label: 'Date',
        Component: DatePicker,
        className: 'ReservationStepForm__modal',
        errorMessage: 'Date is required'
    },
    {
        name: 'time',
        label: 'Time',
        Dialog: TimeDialog,
        Component: Modal,
        additionalProps: {
            open: '13:00',
            closed: '24:00',
            increments: 15
        },
        className: 'ReservationStepForm__modal',
        errorMessage: 'Time is required'
    },
];

export {ReservationConfig}