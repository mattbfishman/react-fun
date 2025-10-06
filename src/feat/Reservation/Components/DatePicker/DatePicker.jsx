import {useState, useRef} from 'react';
import './DataPicker.css';

function DatePicker({className, label, register, setValue, formData}) {
    const [dateValue, setDateValue] = useState(formData?.date ?? '');
    const dateInputRef = useRef();

    const showDatePicker = () => {
        if (dateInputRef.current) {
            dateInputRef.current.showPicker();
        }
    };

    const selectDateValue = () => {
        const formatDate = new Date(dateInputRef.current.value);
        const yyyy = formatDate.getFullYear();
        let mm = formatDate.getMonth() + 1;
        let dd = formatDate.getDate();

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedDate = mm + '/' + dd + '/' + yyyy
        setDateValue(formattedDate);
        setValue('date', formattedDate);
    }
    
    return (
        <div className={className} onClick={showDatePicker}>
            <div className='ReservationModal__Label'>
                {label}
            </div>
            {dateValue &&
                <div className='ReservationModal__Value'>
                    {dateValue}
                </div>
            }
            <input {...register('date', { required: "Date is required" })} value={dateValue} ref={dateInputRef} onChange={selectDateValue} type="date" className='datePickerInput' />

        </div>
    );
}

export {DatePicker};