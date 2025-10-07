import {useState, useRef } from 'react';
import { TWO_WEEKS_MS } from '../constants';
import './DataPicker.css';



function DatePicker({className, labelText = '', register, setValue, formData, errorMessage = ''}) {
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
        let dd = formatDate.getDate() + 1;

        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;

        const formattedDate = mm + '/' + dd + '/' + yyyy
        setDateValue(formattedDate);
        setValue('date', formattedDate);
    }

    const currentDate = new Date();
    const minDateFormatted = currentDate.toISOString().split('T')[0];
    const endDate = new Date(Date.now() + TWO_WEEKS_MS);
    const endDateFormatted = endDate.toISOString().split('T')[0];

    return (
        <div className={className} onClick={showDatePicker}>
            <div className='ReservationModal__Label'>
                {labelText}
            </div>
            {dateValue &&
                <div className='ReservationModal__Value'>
                    {dateValue}
                </div>
            }
            <input {...register('date', { required: errorMessage})} min={minDateFormatted} max={endDateFormatted} value={dateValue} ref={dateInputRef}  onChange={selectDateValue} type="date" className='datePickerInput' />

        </div>
    );
}

export {DatePicker};