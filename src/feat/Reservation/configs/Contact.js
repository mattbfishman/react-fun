import { DatePicker } from "../Components/DatePicker/DatePicker";
import { PeopleDialog } from "../Components/Dialogs/PeopleDialog";
import { TimeDialog } from "../Components/Dialogs/TimeDialog";
import { Input } from "../Components/Input/Input";
import { Modal } from "../Components/Modal/Modal";

const ContactConfig = [
    {
        name: 'phone',
        labelText: 'Phone',
        Component: Input,
        errorMessage: 'Phone is required',
        type: 'tel',
        componentType: 'input'
    },
    {
        name: 'email',
        labelText: 'Email',
        Component: Input,
        errorMessage: 'Email is required',
        type: 'email',
        componentType: 'input'
    },
    {
        name: 'name',
        labelText: 'Name',
        Component: Input,
        errorMessage: 'Name is required',
        type: 'text',
        componentType: 'input'
    },
];

export {ContactConfig}
