import {useState, useRef} from 'react';
import './DataPicker.css';

function DatePicker({className, label, register}) {
    const [dateValue, setDateValue] = useState('');
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
    }
    
    return (
        <div className={className} onClick={showDatePicker}>
            <div className='modalLabel'>
                {label}
            </div>
            <input className='modalValue' {...register('date', { required: "Date is required" })} value={dateValue} autoComplete='off'/>
            <input ref={dateInputRef} onChange={selectDateValue} type="date" className='datePickerInput' />
        </div>
    );
}

export {DatePicker};