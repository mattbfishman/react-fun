import {useState, useRef} from 'react';
import './DataPicker.css';

function DatePicker({className, label}) {
    const [dateValue, setDateValue] = useState(null);
    const dateInputRef = useRef(null);
    const showDatePicker = () => {
        if (dateInputRef.current) {
            dateInputRef.current.showPicker();
        }
    };

    const selectDateValue = () => {
        const formatDate = new Date(dateInputRef.current.value);
        const yyyy = formatDate.getFullYear();
        let mm = formatDate.getMonth() + 1; // Months start at 0!
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
            {dateValue && 
                <div>
                    {dateValue}
                </div>
            }
            <input name="date" ref={dateInputRef} onChange={selectDateValue} type="date" id="datepicker" className='datePickerInput' />
        </div>
    );
}

export {DatePicker};